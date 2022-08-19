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
    // 资源可以从采矿点拿, 也可以从容器拿
    // 距离近的优先
    let containers =
      creep.room
      ->findStructures
      ->Js.Array2.filter(structure =>
        structure["structureType"] == structureContainerC &&
          structure["store"]->getUsedCapacityE(resourceEnergy) > 500
      )
    let resources = creep.room->findDroppedResources
    let candidates = Js.Array2.concat(
      containers->Js.Array2.map(StructureOrResource.structure),
      resources->Js.Array2.map(StructureOrResource.resource),
    )

    let target = creep.pos->findClosestByPath(candidates)
    target->Belt.Option.forEach(t => {
      switch t {
      | Resource(r) =>
        if creep->pickup(r) == errNotInRange {
          let _ = creep->moveTo(r.pos)
        }
      | Structure(s) =>
        if creep->withdraw(s, resourceEnergy) == errNotInRange {
          let _ = creep->moveTo(s["pos"])
        }
      }
    })
  }
}
