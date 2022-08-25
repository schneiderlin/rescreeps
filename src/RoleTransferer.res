open Binding
open Common

let transfererName = minePos => {
  "Transferer" ++ minePos["x"]->Belt.Int.toString ++ "." ++ minePos["y"]->Belt.Int.toString
}

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

let roleTransferer = (creep: creep, minePos) => {
  let freeCapacity = creep.store->getFreeCapacityE(resourceEnergy)

  if testToPick(creep) {
    // 先找固定位置的 resource
    let targetResource =
      creep.room
      ->findDroppedResourcesOpt({
        "filter": (resource: resource) => Common.samePosition(resource.pos, minePos),
      })
      ->Belt.Array.get(0)

    switch targetResource {
    | Some(target) => pickResource(creep, target)
    | _ =>
      // 找不到固定位置的再找最近的
      let resources = creep.room->findDroppedResourcesOpt({
        "filter": (resource: resource) => resource.amount > freeCapacity,
      })
      let resource = creep.pos->findClosestByPathResource(resources)

      switch resource {
      | Some(r) => pickResource(creep, r)
      | _ => ()
      }
    }
  } else {
    // 所有建筑找出来
    let allStructures = creep.room->findStructures

    // 找出 [structureExtension, structureSpawn] 类型的建筑, 搬运
    let hasTask = findAndTransfer(creep, allStructures, [structureExtension, structureSpawn])
    if !hasTask {
      let hasTask = findAndTransfer(creep, allStructures, [structureTower])
      if !hasTask {
        // 如果没有上述的搬运任务, 再找 [structureContainerC] 类型的搬运任务
        let hasTask = findAndTransfer(creep, allStructures, [structureContainerC])
        if !hasTask {
          let _ = findAndTransfer(creep, allStructures, [structureStorage])
        }
      }
    }
  }
}

// let roleTransferer = (creep: creep, reserve) => {
//   let freeCapacity = creep.store->getFreeCapacityE(resourceEnergy)

//   if testToPick(creep) {
//     let resources = creep.room->findDroppedResourcesOpt({
//       "filter": (resource: resource) => resource.amount > freeCapacity,
//     })
//     let resource = creep.pos->findClosestByPathResource(resources)

//     switch resource {
//     | Some(r) => {
//         pickResource(creep, r)
//         Reserve.reserve(reserve, creep, r, freeCapacity)
//       }
//     | _ => reserve
//     }
//   } else {
//     // 所有建筑找出来
//     let allStructures = creep.room->findStructures

//     // 找出 [structureExtension, structureSpawn] 类型的建筑, 搬运
//     let hasTask = findAndTransfer(creep, allStructures, [structureExtension, structureSpawn])
//     if !hasTask {
//       let hasTask = findAndTransfer(creep, allStructures, [structureTower])
//       if !hasTask {
//         // 如果没有上述的搬运任务, 再找 [structureContainerC] 类型的搬运任务
//         let hasTask = findAndTransfer(creep, allStructures, [structureContainerC])
//         if !hasTask {
//           let _ = findAndTransfer(creep, allStructures, [structureStorage])
//         }
//       }
//     }

//     reserve
//   }
// }
