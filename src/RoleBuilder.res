open Binding

let roleBuilder = (creep: creep) => {
  // 判断 building 状态
  if creep.memory.building && creep.store->getUsedCapacityE(resourceEnergy) == 0 {
    creep.memory.building = false
    creep->say("🔄 harvest")
  }
  if !creep.memory.building && creep.store->getFreeCapacityE(resourceEnergy) == 0 {
    creep.memory.building = true
    creep->say("🚧 build")
  }

  // 根据 building 状态分配行为
  if creep.memory.building {
    // 建造
    let targets = creep.room->findConstructionSites
    if targets->Js.Array2.length > 0 {
      if creep->build(targets[0]) == errNotInRange {
        let _ = creep->moveTo(targets[0].pos)
      }
    }
  } else {
    // 拿资源
    let resource =
      creep.pos->findClosestByPathResource(
        creep.room->findDroppedResources->Js.Array2.filter(r => r.amount > 300),
      )
    resource->Belt.Option.forEach(r => {
      if creep->pickup(r) == errNotInRange {
        let _ = creep->moveTo(r.pos)
      }
    })
  }
}
