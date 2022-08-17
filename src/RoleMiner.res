open Binding

let samePosition = (p1, p2) => {
  p1["x"] == p2["x"] && p2["y"] == p2["y"]
}

let minerName = (minePos) => {
    "Miner" ++ minePos["x"]->Belt.Int.toString ++ "." ++ minePos["y"]->Belt.Int.toString
}

let roleMiner = (creep: creep, minePos) => {
  // 需要指定采矿点, 如果不在采矿点上, 移动过去
  if !samePosition(creep.pos, minePos) {
    let moveErr = creep->moveToPos(minePos["x"], minePos["y"])
    Js.log3("miner moving", creep.name, moveErr)
  } else {
    Js.log2("miner working", creep.name)
    let sources = creep.room->findSources
    let source = creep.pos->findClosestByPathSource(sources)
    Js.log2(sources, source)
    source->Belt.Option.forEach(s => {
      if creep->harvest(s) == errNotInRange {
        let _ = creep->moveTo(s.pos)
      }
    })
  }
}
