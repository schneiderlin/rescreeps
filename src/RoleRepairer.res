open Binding

let roleRepairer = (creep: creep) => {
  if creep.memory.repairing && creep.store->getUsedCapacityE(resourceEnergy) == 0 {
    creep.memory.repairing = false
  }
  if !creep.memory.repairing && creep.store->getFreeCapacityE(resourceEnergy) == 0 {
    creep.memory.repairing = true
  }

  if creep.memory.repairing {
    let closestDamagedStructure = creep.pos->findClosestStructureByRangeOpt({
      "filter": (structure: structure) => structure["hits"] < structure["hitsMax"],
    })
    if closestDamagedStructure->Belt.Option.isSome {
      let _ = creep->repair(closestDamagedStructure->Belt.Option.getUnsafe)
    }
  } else {
    let resources = creep.room->findDroppedResources
    if creep->pickup(resources[1]) == errNotInRange {
      let _ = creep->moveTo(resources[1].pos)
    }
  }
}
