open Binding

let samePosition = (p1, p2) => {
  p1["x"] == p2["x"] && p2["y"] == p2["y"]
}

// 返回这个 creep 是否要去捡资源
let testToPick = (creep: creep) => {
  let freeCapacity = creep.store->getFreeCapacityE(resourceEnergy)
  freeCapacity > 0
}

let pickResource = (creep, resource) => {
  if creep->pickup(resource) == errNotInRange {
    let _ = creep->moveTo(resource.pos)
  }
}