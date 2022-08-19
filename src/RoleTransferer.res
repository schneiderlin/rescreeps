open Binding

// return: bool 表示是否已经分配了运输任务
let findAndTransfer = (creep, allStructures, structureTypes) => {
  let filteredTargets = allStructures->Js.Array2.filter(structure => {
    structureTypes->Js.Array2.find(t => structure["structureType"] == t)->Belt.Option.isSome &&
      structure["store"]->getFreeCapacityE(resourceEnergy) > 0
  })
  if filteredTargets->Js.Array2.length > 0 {
    if creep->transferStructure(filteredTargets[0], resourceEnergy) == errNotInRange {
      let _ = creep->moveTo(filteredTargets[0]["pos"])
    }
    true
  } else {
    false
  }
}

let roleTransferer = (creep: creep) => {
  if creep.store->getFreeCapacityE(resourceEnergy) > 0 {
    let resources = creep.room->findDroppedResources
    if creep->pickup(resources[0]) == errNotInRange {
      let _ = creep->moveTo(resources[0].pos)
    }
  } else {
    // 所有建筑找出来
    let allStructures = creep.room->findStructures

    // 找出 [structureExtension, structureSpawn] 类型的建筑, 搬运
    let hasTask = findAndTransfer(creep, allStructures, [structureExtension, structureSpawn])
    if !hasTask {
      // 如果没有上述的搬运任务, 再找 [structureContainerC] 类型的搬运任务
      let _ = findAndTransfer(creep, allStructures, [structureContainerC])
    }
  }
}
