open Binding

let controllerId = "5bbcaeba9099fc012e639797"

let roleClaimer = (creep: creep) => {
  let _ = switch creep.room["name"] {
  | "E32N28" =>
    let _ = creep->moveToPos(0, 29)
  | "E31N28" =>
    let controller = game->getControllerById(controllerId)->Belt.Option.getUnsafe
    if creep->claimController(controller) == errNotInRange {
      let _ = creep->moveTo(controller["pos"])
    }
  | _ =>
    let _ = Js.log(`claimer跑到了其他房间`)
  }
}
