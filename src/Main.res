open Binding

let upgraders = spawn => {
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

let towerDefence = (spawn) => {
  let towerOpt = game->getTowerById("630033cd4bcfd152983bccab")
  if towerOpt->Belt.Option.isSome {
    let tower = towerOpt->Belt.Option.getUnsafe

    // 维修
    let closestDamagedStructure = tower.pos->findClosestByRangeStructure(spawn->RoleRepairer.findRepairTargets)
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
    if creep.memory.role == "upgrader" {
      RoleUpgrader.roleUpgrader(creep)
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

let mine = (room, spawn) => {
  let energy = room["energyAvailable"]
  let bodies = if energy <= 300 {
    [work, work, move]
  } else {
    [work, work, work, move]
  }

  // 生成
  let name1 = RoleMiner.minerName(minePos1)
  let err1 = spawn->spawnCreepOpts(bodies, name1, {"memory": {"role": "miner1"}})
  if err1 == errNotEnoughEnergy {
    Js.log("miner no energy")
  }

  let name2 = RoleMiner.minerName(minePos2)
  let err2 = spawn->spawnCreepOpts(bodies, name2, {"memory": {"role": "miner2"}})
  if err2 == errNotEnoughEnergy {
    Js.log("miner no energy")
  }

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
    let _ =
      spawn->spawnCreepOpts([work, work, carry, move], newName, {"memory": {"role": "builder"}})
  }

  // 房间里面有没有工地
  let hasConstructionSite = spawn["room"]->findConstructionSites->Js.Array2.length > 0
  // 房间里面有没有受损建筑
  let hasDamagedStructure = RoleRepairer.findRepairTargets(spawn)->Js.Array2.length > 0

  // 分配任务
  game.creeps
  ->Js.Dict.keys
  ->Js.Array2.forEach(name => {
    let creep = game.creeps->Js.Dict.unsafeGet(name)
    if creep.memory.role == "builder" {
      if hasDamagedStructure {
        Js.log("builder repair")
        RoleRepairer.roleRepairer(spawn, creep)
      } else if hasConstructionSite {
        Js.log("builder build")
        RoleBuilder.roleBuilder(creep)
      } else {
        Js.log("builder upgrade")
        RoleUpgrader.roleUpgrader(creep)
      }
    }
  })
}

let transfer = spawn => {
  let transferers =
    game.creeps
    ->Js.Dict.values
    ->Js.Array2.filter(creep => {
      creep.memory.role == "transferer"
    })

  if transferers->Js.Array2.length < 2 {
    let newName = "Transferer" ++ game.time->Belt.Int.toString
    let _ =
      spawn->spawnCreepOpts(
        [carry, carry, carry, move],
        newName,
        {"memory": {"role": "transferer"}},
      )
  }

  game.creeps
  ->Js.Dict.keys
  ->Js.Array2.forEach(name => {
    let creep = game.creeps->Js.Dict.unsafeGet(name)
    if creep.memory.role == "transferer" {
      RoleTransferer.roleTransferer(creep)
    }
  })
}

let harvest = spawn => {
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

  game.creeps
  ->Js.Dict.keys
  ->Js.Array2.forEach(name => {
    let creep = game.creeps->Js.Dict.unsafeGet(name)
    if creep.memory.role == "harvester" {
      RoleHarvester.roleHarvester(creep)
    }
  })
}

let loop = () => {
  let spawn = game.spawns->Js.Dict.unsafeGet("Spawn1")
  let room = spawn["room"]

  Js.log("transfer")
  transfer(spawn)
  Js.log("mine")
  mine(room, spawn)
  Js.log("build")
  build(spawn, 3)
  upgraders(spawn)
  towerDefence()
  dispatchTask()
}
