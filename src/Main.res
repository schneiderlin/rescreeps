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

  game.creeps
  ->Js.Dict.keys
  ->Js.Array2.forEach(name => {
    let creep = game.creeps->Js.Dict.unsafeGet(name)
    if creep.memory.role == "upgrader" {
      RoleUpgrader.roleUpgrader(creep)
    }
  })
}

let roleTower = (tower: tower, spawn) => {
  // 维修
  let closestDamagedStructure =
    tower.pos->findClosestByRangeStructure(spawn->RoleRepairer.findRepairTargets)
  if closestDamagedStructure->Belt.Option.isSome {
    let _ = tower->repairT(closestDamagedStructure->Belt.Option.getUnsafe)
  }

  // 攻击
  let closestHostile = tower.pos->findClosestHostileCreepsByRange
  if closestHostile->Belt.Option.isSome {
    let _ = tower->attackT(closestHostile->Belt.Option.getUnsafe)
  }
}

let towerDefence = spawn => {
  let towerOpt1 = game->getTowerById("630033cd4bcfd152983bccab")
  towerOpt1->Belt.Option.forEach(t => roleTower(t, spawn))
  let towerOpt2 = game->getTowerById("6307978291299163c785029c")
  towerOpt2->Belt.Option.forEach(t => roleTower(t, spawn))
}

let minePos1 = {
  "roomName": "E32N28",
  "x": 5,
  "y": 16,
}

let minePos2 = {
  "roomName": "E32N28",
  "x": 13,
  "y": 22,
}

let outpostMinePos1 = {
  "roomName": "E33N28",
  "x": 10,
  "y": 19,
}

let mine = (room, spawn) => {
  let energy = room["energyAvailable"]
  let bodies = if energy <= 300 {
    [work, work, move]
  } else {
    [work, work, work, work, move]
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

let outpostMine = (_mainRoom, spawn) => {
  let bodies = [work, work, move]

  // 生成
  let name1 = RoleOutpostMiner.minerName(outpostMinePos1)
  let _ = spawn->spawnCreepOpts(bodies, name1, {"memory": {"role": "outpostMiner1"}})

  // 分配任务
  game.creeps
  ->Js.Dict.keys
  ->Js.Array2.forEach(name => {
    let creep = game.creeps->Js.Dict.unsafeGet(name)
    if creep.memory.role == "outpostMiner1" {
      RoleOutpostMiner.roleMiner(creep, outpostMinePos1)
    }
  })
}

let outpostTransfer = (_mainRoom, spawn) => {
  let bodies = [carry, carry, carry, carry, move, move]

  // 生成
  let name1 = RoleOutpostTransferer.transfererName(outpostMinePos1)
  let _ = spawn->spawnCreepOpts(bodies, name1, {"memory": {"role": "outpostTransferer1"}})

  // 分配任务
  game.creeps
  ->Js.Dict.keys
  ->Js.Array2.forEach(name => {
    let creep = game.creeps->Js.Dict.unsafeGet(name)
    if creep.memory.role == "outpostTransferer1" {
      RoleOutpostTransferer.roleTransferer(creep, outpostMinePos1)
    }
  })
}

let build = (spawn, n) => {
  let bodies = [work, work, work, work, work, carry, move, move, move]

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
    let _ = spawn->spawnCreepOpts(bodies, newName, {"memory": {"role": "builder"}})
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
  let bodies = [carry, carry, carry, carry, move, move]

  let name1 = RoleTransferer.transfererName(minePos1)
  let err1 = spawn->spawnCreepOpts(bodies, name1, {"memory": {"role": "transferer1"}})
  if err1 == errNotEnoughEnergy {
    Js.log("transferer no energy")
  }

  let name2 = RoleTransferer.transfererName(minePos2)
  let err2 = spawn->spawnCreepOpts(bodies, name2, {"memory": {"role": "transferer2"}})
  if err2 == errNotEnoughEnergy {
    Js.log("transferer no energy")
  }

  // 分配任务
  game.creeps
  ->Js.Dict.keys
  ->Js.Array2.forEach(name => {
    let creep = game.creeps->Js.Dict.unsafeGet(name)
    if creep.memory.role == "transferer1" {
      RoleTransferer.roleTransferer(creep, minePos1)
    }
    if creep.memory.role == "transferer2" {
      RoleTransferer.roleTransferer(creep, minePos2)
    }
  })

  // game.creeps->Js.Dict.keys->Js.Array2.reduce((reserve, name) => {
  //   let creep = game.creeps->Js.Dict.unsafeGet(name)
  //   // 已经有任务, 跳过
  //   if tasks->Task.hasTask(creep) {
  //     reserve
  //   } else if creep.memory.role == "transferer" {
  //     RoleTransferer.roleTransferer(creep, reserve)
  //   } else {
  //     reserve
  //   }
  // }, reserve)
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

// type globalState = {mutable reserve: Reserve.state}

// let globalState = {
//   reserve: Reserve.initState,
// }

let loop = () => {
  let spawn = game.spawns->Js.Dict.unsafeGet("Spawn1")
  let room = spawn["room"]

  // let resourceIdToResource = id => game->getResourceById(id)->Belt.Option.getUnsafe
  // let creepNameToCreep = name => game.creeps->Js.Dict.get(name)

  // let tasks = Task.init
  // let (newReserve, tasks, effects) = Reserve.processState(
  //   globalState.reserve,
  //   tasks,
  //   creepNameToCreep,
  //   resourceIdToResource,
  // )
  // effects->Belt.List.forEach(effect => effect())

  // let newReserve = transfer(spawn, tasks, newReserve)
  transfer(spawn)
  mine(room, spawn)
  outpostMine(room, spawn)
  outpostTransfer(room, spawn)
  build(spawn, 3)
  upgraders(spawn)
  towerDefence(spawn)

  // globalState.reserve = newReserve
}
