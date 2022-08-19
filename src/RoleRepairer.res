open Binding

let findRepairTargets = spawn => {
  spawn["room"]
  ->findStructures
  ->Js.Array2.filter(structure =>
    structure["hits"] < structure["hitsMax"] - 2000 && structure["structureType"] != structureWall
  )
}

let roleRepairer = (spawn, creep: creep) => {
  if creep.memory.repairing && creep.store->getUsedCapacityE(resourceEnergy) == 0 {
    creep.memory.repairing = false
  }
  if !creep.memory.repairing && creep.store->getFreeCapacityE(resourceEnergy) == 0 {
    creep.memory.repairing = true
  }

  if creep.memory.repairing {
    let closestDamagedStructure = creep.pos->findClosestByRangeStructure(findRepairTargets(spawn))

    if closestDamagedStructure->Belt.Option.isSome {
      let target = closestDamagedStructure->Belt.Option.getUnsafe
      if creep->repair(target) == errNotInRange {
        let _ = creep->moveTo(target["pos"])
      }
    }
  } else {
    let resources = creep.room->findDroppedResources
    if creep->pickup(resources[1]) == errNotInRange {
      let _ = creep->moveTo(resources[1].pos)
    }
  }
}
