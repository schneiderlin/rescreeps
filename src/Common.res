open Binding

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