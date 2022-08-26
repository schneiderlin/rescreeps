open Binding

let minerName = minePos => {
  "OutpostMiner" ++
  minePos["roomName"] ++
  minePos["x"]->Belt.Int.toString ++
  "." ++
  minePos["y"]->Belt.Int.toString
}

let roleMiner = (creep: creep, minePos) => {
  // 需要指定采矿点, 如果不在采矿点上, 移动过去
  if !Common.samePosition(creep.pos, minePos) {
    // 如果在主房间, 走到边界
    // 如果在目标房间, 走到采矿点
    let _ = switch creep.room["name"] {
    | "E32N28" =>
      let _ = creep->moveToPos(49, 17)
    | "E33N28" =>
      let _ = creep->moveToPos(minePos["x"], minePos["y"])
    | _ =>
      let _ = Js.log(`外矿工人跑到了其他房间`)
    }
  } else {
    let sources = creep.room->findSources
    let source = creep.pos->findClosestByPathSource(sources)
    source->Belt.Option.forEach(s => {
      if creep->harvest(s) == errNotInRange {
        let _ = creep->moveTo(s.pos)
      }
    })
  }
}
