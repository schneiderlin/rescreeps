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
    let resources = creep.room->findDroppedResources
    if creep->pickup(resources[1]) == errNotInRange {
      let _ = creep->moveTo(resources[1].pos)
    }
  }
}
