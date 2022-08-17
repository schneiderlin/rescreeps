open Binding

let roleUpgrader = (creep: creep) => {
  if creep.memory.upgrading && creep.store->getUsedCapacityE(resourceEnergy) == 0 {
    creep.memory.upgrading = false
  }
  if !creep.memory.upgrading && creep.store->getFreeCapacityE(resourceEnergy) == 0 {
    creep.memory.upgrading = true
  }

  if creep.memory.upgrading {
    if creep->upgradeController(creep.room["controller"]) == errNotInRange {
      let _ = creep->moveTo(creep.room["controller"]["pos"])
    }
  } else {
    let resources = creep.room->findDroppedResources
    if creep->pickup(resources[1]) == errNotInRange {
      let _ = creep->moveTo(resources[1].pos)
    }
  }
}
