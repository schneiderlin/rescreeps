open Binding

let samePosition = (p1: roomPosition, p2: roomPosition) => {
  p1["x"] == p2["x"] && p2["y"] == p2["y"] && p1["roomName"] == p2["roomName"]
}

let pickResource = (creep, resource) => {
  if creep->pickup(resource) == errNotInRange {
    let _ = creep->moveTo(resource.pos)
  }
}