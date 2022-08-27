open Binding
open Common

let transfererName = minePos => {
  "Transferer" ++
  minePos["roomName"] ++
  minePos["x"]->Belt.Int.toString ++
  "." ++
  minePos["y"]->Belt.Int.toString
}

let roleTransferer = (creep: creep, minePos) => {
  let freeCapacity = creep.store->getFreeCapacityE(resourceEnergy)

  if creep.memory.transfering && creep.store->getUsedCapacityE(resourceEnergy) == 0 {
    creep.memory.transfering = false
  }
  if !creep.memory.transfering && freeCapacity == 0 {
    creep.memory.transfering = true
  }

  if creep.memory.transfering {
    let _ = switch creep.room["name"] {
    | "E32N28" =>
      let _ = {
        // 所有建筑找出来
        let allStructures = creep.room->findStructures

        // 找出 [structureExtension, structureSpawn] 类型的建筑, 搬运
        let hasTask = RoleTransferer.findAndTransfer(
          creep,
          allStructures,
          [structureExtension, structureSpawn],
        )
        if !hasTask {
          let hasTask = RoleTransferer.findAndTransfer(creep, allStructures, [structureTower])
          if !hasTask {
            // 如果没有上述的搬运任务, 再找 [structureContainerC] 类型的搬运任务
            let hasTask = RoleTransferer.findAndTransfer(
              creep,
              allStructures,
              [structureContainerC],
            )
            if !hasTask {
              let _ = RoleTransferer.findAndTransfer(creep, allStructures, [structureStorage])
            }
          }
        }
      }
    | "E33N28" =>
      let _ = creep->moveToPos(0, 17)
    | _ =>
      let _ = Js.log(`外矿搬运工跑到了其他房间`)
    }
  } else {
    let _ = switch creep.room["name"] {
    | "E32N28" =>
      let _ = creep->moveToPos(49, 17)
    | "E33N28" => {
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
      }
    | _ =>
      let _ = Js.log(`外矿搬运工跑到了其他房间`)
    }
  }
}
