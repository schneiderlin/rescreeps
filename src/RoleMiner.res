open Binding

let minerName = (minePos) => {
    "Miner" ++ minePos["x"]->Belt.Int.toString ++ "." ++ minePos["y"]->Belt.Int.toString
}

let roleMiner = (creep: creep, minePos) => {
  // 需要指定采矿点, 如果不在采矿点上, 移动过去
  if !Common.samePosition(creep.pos, minePos) {
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
