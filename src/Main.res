open Binding

let spawnCreeps = () => {
  let harvesters =
    game.creeps
    ->Js.Dict.values
    ->Js.Array2.filter(creep => {
      creep.memory.role == "harvester"
    })

  if harvesters->Js.Array2.length < 2 {
    let newName = "Harvester" ++ game.time->Belt.Int.toString
    Js.log2("Spawning new harvester: ", newName)
    let _ =
      game.spawns
      ->Js.Dict.unsafeGet("Spawn1")
      ->spawnCreepOpts([work, carry, move], newName, {"memory": {"role": "harvester"}})
  }
}

let towerDefence = () => {
  let towerOpt = game->getTowerById("ad88e3fc2859f93aa703b852")
  if towerOpt->Belt.Option.isSome {
    let tower = towerOpt->Belt.Option.getUnsafe

    // 修墙
    let closestDamagedStructure = tower.pos->findClosestStructureByRangeOpt({
      "filter": (structure: structure) => structure["hits"] < structure["hitsMax"],
    })
    Js.log(closestDamagedStructure)
    if closestDamagedStructure->Belt.Option.isSome {
      let _ = tower->repairT(closestDamagedStructure->Belt.Option.getUnsafe)
    }

    // 攻击
    let closestHostile = tower.pos->findClosestHostileCreepsByRange
    if closestHostile->Belt.Option.isSome {
      let _ = tower->attackT(closestHostile->Belt.Option.getUnsafe)
    }
  }
}

let dispatchTask = () => {
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
    if creep.memory.role == "builder" {
      RoleBuilder.roleBuilder(creep)
    }
  })
}

let loop = () => {
  spawnCreeps()
  towerDefence()
  dispatchTask()
}
