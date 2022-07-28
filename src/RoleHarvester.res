open Binding

let roleHarvester = (creep: creep) => {
  if (creep.store->getFreeCapacity > 0) {
    let sources = creep.room->findSources
    if (creep->harvest(sources[0]) == errNotInRange) {
      let _ = creep->moveTo(sources[0].pos)
    }
  } else {
    let spawn1 = game.spawns->Js.Dict.get("Spawn1")->Belt.Option.getUnsafe
    if (creep->transferSpawn(spawn1, resourceEnergy) == errNotInRange) {
      let _ = creep->moveTo(spawn1["pos"])
    }
  }
}