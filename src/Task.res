open Binding

// 每个回合初始化一次

type tasks = {hasTaskCreeps: Belt.Set.String.t}

let init = {
  hasTaskCreeps: Belt.Set.String.empty,
}

let addTask = (tasks: tasks, creep: creep) => {
  {hasTaskCreeps: tasks.hasTaskCreeps->Belt.Set.String.add(creep.name)}
}

let hasTask = (tasks: tasks, creep: creep) => {
  tasks.hasTaskCreeps->Belt.Set.String.has(creep.name)
}

let merge = (tasks1, tasks2) => {
  {hasTaskCreeps: Belt.Set.String.union(tasks1.hasTaskCreeps, tasks2.hasTaskCreeps)}
}
