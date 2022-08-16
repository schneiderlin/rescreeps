open Binding

let roleHarvester = (creep: creep) => {
  if creep.store->getFreeCapacityE(resourceEnergy) > 0 {
    let sources = creep.room->findSources
    if creep->harvest(sources[0]) == errNotInRange {
      let _ = creep->moveTo(sources[0].pos)
    }
  } else {
    let targets = creep.room->findStructures
    let filteredTargets = targets->Js.Array2.filter(structure => {
      (structure["structureType"] == structureExtension ||
      structure["structureType"] == structureTower ||
      structure["structureType"] == structureSpawn) &&
        structure["store"]->getFreeCapacityE(resourceEnergy) > 0
    })
    if filteredTargets->Js.Array2.length > 0 {
      if creep->transferStructure(filteredTargets[0], resourceEnergy) == errNotInRange {
        let _ = creep->moveTo(filteredTargets[0]["pos"])
      }
    }
  }
}
