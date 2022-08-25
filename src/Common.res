open Binding

let samePosition = (p1, p2) => {
  p1["x"] == p2["x"] && p2["y"] == p2["y"]
}

let pickResource = (creep, resource) => {
  if creep->pickup(resource) == errNotInRange {
    let _ = creep->moveTo(resource.pos)
  }
}