open Binding

let loop = () => {
  memory.creeps
  ->Js.Dict.keys
  ->Js.Array2.forEach(name => {
    if game.creeps->Js.Dict.get(name)->Belt.Option.isNone {
      Js.Dict.unsafeDeleteKey(. memory.creeps, name)
      Js.log2("Clearing non-existing creep memory:", name)
    }
  })

  let harvesters =
    game.creeps
    ->Js.Dict.values
    ->Js.Array2.filter(creep => {
      creep.memory.role == "harvester"
    })
  Js.log2("Harvesters: ", harvesters->Js.Array2.length)

  if harvesters->Js.Array2.length < 2 {
    let newName = "Harvester" ++ game.time->Belt.Int.toString
    Js.log2("Spawning new harvester: ", newName)
    let _ =
      game.spawns
      ->Js.Dict.unsafeGet("Spawn1")
      ->spawnCreepOpts([work, carry, move], newName, {"memory": {"role": "harvester"}})
  }

  game.creeps
  ->Js.Dict.keys
  ->Js.Array2.forEach(name => {
    let creep = game.creeps->Js.Dict.unsafeGet(name)
    if creep.memory.role == "harvester" {
      RoleHarvester.roleHarvester(creep)
    }
    if creep.memory.role == "upgrader" {
      RoleUpgrader.roleUpgrader(creep)
    }
  })
}
