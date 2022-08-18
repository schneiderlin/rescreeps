open Binding

let spawnCreeps = spawn => {
  let harvesters =
    game.creeps
    ->Js.Dict.values
    ->Js.Array2.filter(creep => {
      creep.memory.role == "harvester"
    })

  if harvesters->Js.Array2.length < 2 {
    let newName = "Harvester" ++ game.time->Belt.Int.toString
    Js.log2("Spawning new harvester: ", newName)
    let _ = spawn->spawnCreepOpts([work, carry, move], newName, {"memory": {"role": "harvester"}})
  }

  let upgraders =
    game.creeps
    ->Js.Dict.values
    ->Js.Array2.filter(creep => {
      creep.memory.role == "upgrader"
    })

  if upgraders->Js.Array2.length < 1 {
    let newName = "Upgrader" ++ game.time->Belt.Int.toString
    Js.log2("Spawning new upgrader: ", newName)
    let _ = spawn->spawnCreepOpts([work, carry, move], newName, {"memory": {"role": "upgrader"}})
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

let minePos1 = {
  "x": 5,
  "y": 16,
}

let minePos2 = {
  "x": 13,
  "y": 22,
}

let mine = spawn => {
  // 生成
  let name1 = RoleMiner.minerName(minePos1)
  let _ = spawn->spawnCreepOpts([work, work, move], name1, {"memory": {"role": "miner1"}})

  let name2 = RoleMiner.minerName(minePos2)
  let _ = spawn->spawnCreepOpts([work, work, move], name2, {"memory": {"role": "miner2"}})

  // 分配任务
  game.creeps
  ->Js.Dict.keys
  ->Js.Array2.forEach(name => {
    let creep = game.creeps->Js.Dict.unsafeGet(name)
    if creep.memory.role == "miner1" {
      RoleMiner.roleMiner(creep, minePos1)
    }
    if creep.memory.role == "miner2" {
      RoleMiner.roleMiner(creep, minePos2)
    }
  })
}

let build = (spawn, n) => {
  // 生成
  let builders =
    game.creeps
    ->Js.Dict.values
    ->Js.Array2.filter(creep => {
      creep.memory.role == "builder"
    })

  if builders->Js.Array2.length < n {
    let newName = "Builder" ++ game.time->Belt.Int.toString
    Js.log2("Spawning new Builder: ", newName)
    let _ = spawn->spawnCreepOpts([work, carry, move], newName, {"memory": {"role": "builder"}})
  }

  // 房间里面有没有工地
  let noConstructionSite = spawn["room"]->findConstructionSites->Js.Array2.length == 0

  // 分配任务
  game.creeps
  ->Js.Dict.keys
  ->Js.Array2.forEach(name => {
    let creep = game.creeps->Js.Dict.unsafeGet(name)
    if creep.memory.role == "builder" {
      if noConstructionSite {
        RoleUpgrader.roleUpgrader(creep)
      } else {
        RoleBuilder.roleBuilder(creep)
      }
    }
  })
}

let loop = () => {
  let spawn = game.spawns->Js.Dict.unsafeGet("Spawn1")

  mine(spawn)
  build(spawn, 2)
  spawnCreeps(spawn)
  towerDefence()
  dispatchTask()
}
