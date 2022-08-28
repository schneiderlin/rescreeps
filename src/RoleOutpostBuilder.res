open Binding

let roleBuilder = (creep: creep) => {
  // 判断 building 状态
  if creep.memory.building && creep.store->getUsedCapacityE(resourceEnergy) == 0 {
    creep.memory.building = false
  }
  if !creep.memory.building && creep.store->getFreeCapacityE(resourceEnergy) == 0 {
    creep.memory.building = true
  }

  // 根据 building 状态分配行为
  if creep.memory.building {
    let _ = switch creep.room["name"] {
    | "E32N28" =>
      let _ = creep->moveToPos(0, 23)
    | "E31N28" => {
        // 建造
        let targets = creep.room->findConstructionSites
        if targets->Js.Array2.length > 0 {
          if creep->build(targets[0]) == errNotInRange {
            let _ = creep->moveTo(targets[0].pos)
          }
        }
      }
    | _ =>
      let _ = Js.log(`out builder 跑到了其他房间`)
    }
  } else {
    let _ = switch creep.room["name"] {
    | "E32N28" =>
      // 拿资源
      let resource =
        creep.pos->findClosestByPathResource(
          creep.room->findDroppedResources->Js.Array2.filter(r => r.amount > 100),
        )
      resource->Belt.Option.forEach(r => {
        if creep->pickup(r) == errNotInRange {
          let _ = creep->moveTo(r.pos)
        }
      })
    | "E31N28" =>
      let _ = creep->moveToPos(49, 24)
    | _ =>
      let _ = Js.log(`out builder 跑到了其他房间`)
    }
  }
}
