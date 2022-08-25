// 采矿点有 100 资源, 会同时吸引到多个搬运工过来, 但是只有走得最快的那个搬运工能拿到资源.
// 其他的都会白走一趟.
// 需要有一个预约的机制, 搬运工在往采矿点跑的时候, 需要先预约.
// 需要保证
// - 预约了一定去
// - 不去一定取消预约

// 预约信息对外提供 API
// - reserve(creep, resource, amount)
// - reserveAmount(resource): int

// 每一个 creep 在捡资源之前, 用 findTarget 看看有没有自己已经预约过的.
//   如果有, 移动过去捡资源
//   如果没有, 找到最近一个可预约的资源, 预约, 并且走过去

// 怎么保证
// - 预约了一定去
// - 不去一定取消预约
//   遍历预约表里面的每一个 creep, 问他去不去, 不去就删了

open Binding
open Task

type reservation = {
  creepName: string,
  resourceId: string,
  amount: int,
}

type state = {reservations: list<reservation>}

let initState = {
  reservations: Belt.List.fromArray([]),
}

let reserve = (state: state, creep: creep, resource: resource, amount) => {
  let reservation = {
    creepName: creep.name,
    resourceId: resource.id,
    amount: amount,
  }
  {reservations: state.reservations->Belt.List.add(reservation)}
}

// 把 state 里面没有执行的 reservation 去掉
let removeUnfulfill = (state, tasks, creepNameToCreep) => {
  let newR = state.reservations->Belt.List.keep(reservation => {
    let name = reservation.creepName
    let creep = creepNameToCreep(name)
    creep->Belt.Option.keep(c => tasks->hasTask(c))->Belt.Option.isSome
  })
  {reservations: newR}
}

// 返回 (所有的任务副作用, 新增的 tasks)
let dispatchTasks: (
  state,
  tasks,
  string => option<creep>,
  string => resource,
) => (list<unit => unit>, tasks) = (state, tasks, creepNameToCreep, resourceIdToResource) => {
  state.reservations->Belt.List.reduce((Belt.List.fromArray([]), tasks), (
    (effects, tasks),
    reservation,
  ) => {
    let name = reservation.creepName
    let creep = creepNameToCreep(name)
    switch creep {
    | Some(c) =>
      if tasks->hasTask(c) {
        (effects, tasks)
      } else if Common.testToPick(c) {
        let resource = resourceIdToResource(reservation.resourceId)
        let effect = () => Common.pickResource(c, resource)
        (effects->Belt.List.add(effect), tasks->addTask(c))
      } else {
        (effects, tasks)
      }
    | _ => (effects, tasks)
    }
  })
}

// 预约了的去捡资源, 没有去捡资源的取消预约
// 返回 (新的 state, 新的 tasks, effects)
let processState = (state, tasks, creepNameToCreep, resourceIdToResource) => {
  let (effects, newTasks) = dispatchTasks(state, tasks, creepNameToCreep, resourceIdToResource)
  let newState = removeUnfulfill(state, newTasks, creepNameToCreep)
  (newState, merge(tasks, newTasks), effects)
}
