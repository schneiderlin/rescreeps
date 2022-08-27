// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Js_dict = require("rescript/lib/js/js_dict.js");
var Caml_obj = require("rescript/lib/js/caml_obj.js");
var RoleMiner = require("./RoleMiner.bs.js");
var Belt_Option = require("rescript/lib/js/belt_Option.js");
var Caml_option = require("rescript/lib/js/caml_option.js");
var RoleBuilder = require("./RoleBuilder.bs.js");
var RoleRepairer = require("./RoleRepairer.bs.js");
var RoleUpgrader = require("./RoleUpgrader.bs.js");
var RoleHarvester = require("./RoleHarvester.bs.js");
var RoleTransferer = require("./RoleTransferer.bs.js");
var RoleOutpostMiner = require("./RoleOutpostMiner.bs.js");
var RoleOutpostTransferer = require("./RoleOutpostTransferer.bs.js");

function upgraders(spawn) {
  var upgraders$1 = Js_dict.values(Game.creeps).filter(function (creep) {
        return creep.memory.role === "upgrader";
      });
  if (upgraders$1.length < 1) {
    var newName = "Upgrader" + String(Game.time);
    console.log("Spawning new upgrader: ", newName);
    spawn.spawnCreep([
          WORK,
          CARRY,
          MOVE
        ], newName, {
          memory: {
            role: "upgrader"
          }
        });
  }
  Object.keys(Game.creeps).forEach(function (name) {
        var creep = Game.creeps[name];
        if (creep.memory.role === "upgrader") {
          return RoleUpgrader.roleUpgrader(creep);
        }
        
      });
  
}

function towerDefence(spawn) {
  var towerOpt = Game.getObjectById("630033cd4bcfd152983bccab");
  var towerOpt$1 = (towerOpt == null) ? undefined : Caml_option.some(towerOpt);
  if (!Belt_Option.isSome(towerOpt$1)) {
    return ;
  }
  var closestDamagedStructure = towerOpt$1.pos.findClosestByRange(RoleRepairer.findRepairTargets(spawn));
  var closestDamagedStructure$1 = (closestDamagedStructure == null) ? undefined : Caml_option.some(closestDamagedStructure);
  if (Belt_Option.isSome(closestDamagedStructure$1)) {
    towerOpt$1.repair(closestDamagedStructure$1);
  }
  var closestHostile = towerOpt$1.pos.findClosestByRange(103);
  var closestHostile$1 = (closestHostile == null) ? undefined : Caml_option.some(closestHostile);
  if (Belt_Option.isSome(closestHostile$1)) {
    towerOpt$1.attack(closestHostile$1);
    return ;
  }
  
}

var minePos1 = {
  roomName: "E32N28",
  x: 5,
  y: 16
};

var minePos2 = {
  roomName: "E32N28",
  x: 13,
  y: 22
};

var outpostMinePos1 = {
  roomName: "E33N28",
  x: 10,
  y: 19
};

function mine(room, spawn) {
  var energy = room.energyAvailable;
  var bodies = energy <= 300 ? [
      WORK,
      WORK,
      MOVE
    ] : [
      WORK,
      WORK,
      WORK,
      WORK,
      MOVE
    ];
  var name1 = RoleMiner.minerName(minePos1);
  var err1 = spawn.spawnCreep(bodies, name1, {
        memory: {
          role: "miner1"
        }
      });
  if (Caml_obj.caml_equal(err1, ERR_NOT_ENOUGH_ENERGY)) {
    console.log("miner no energy");
  }
  var name2 = RoleMiner.minerName(minePos2);
  var err2 = spawn.spawnCreep(bodies, name2, {
        memory: {
          role: "miner2"
        }
      });
  if (Caml_obj.caml_equal(err2, ERR_NOT_ENOUGH_ENERGY)) {
    console.log("miner no energy");
  }
  Object.keys(Game.creeps).forEach(function (name) {
        var creep = Game.creeps[name];
        if (creep.memory.role === "miner1") {
          RoleMiner.roleMiner(creep, minePos1);
        }
        if (creep.memory.role === "miner2") {
          return RoleMiner.roleMiner(creep, minePos2);
        }
        
      });
  
}

function outpostMine(_mainRoom, spawn) {
  var bodies = [
    WORK,
    WORK,
    MOVE
  ];
  var name1 = RoleOutpostMiner.minerName(outpostMinePos1);
  spawn.spawnCreep(bodies, name1, {
        memory: {
          role: "outpostMiner1"
        }
      });
  Object.keys(Game.creeps).forEach(function (name) {
        var creep = Game.creeps[name];
        if (creep.memory.role === "outpostMiner1") {
          return RoleOutpostMiner.roleMiner(creep, outpostMinePos1);
        }
        
      });
  
}

function outpostTransfer(_mainRoom, spawn) {
  var bodies = [
    CARRY,
    CARRY,
    CARRY,
    CARRY,
    MOVE,
    MOVE
  ];
  var name1 = RoleOutpostTransferer.transfererName(outpostMinePos1);
  spawn.spawnCreep(bodies, name1, {
        memory: {
          role: "outpostTransferer1"
        }
      });
  Object.keys(Game.creeps).forEach(function (name) {
        var creep = Game.creeps[name];
        if (creep.memory.role === "outpostTransferer1") {
          return RoleOutpostTransferer.roleTransferer(creep, outpostMinePos1);
        }
        
      });
  
}

function build(spawn, n) {
  var builders = Js_dict.values(Game.creeps).filter(function (creep) {
        return creep.memory.role === "builder";
      });
  if (builders.length < n) {
    var newName = "Builder" + String(Game.time);
    console.log("Spawning new Builder: ", newName);
    spawn.spawnCreep([
          WORK,
          WORK,
          WORK,
          CARRY,
          MOVE,
          MOVE
        ], newName, {
          memory: {
            role: "builder"
          }
        });
  }
  var hasConstructionSite = spawn.room.find(111).length > 0;
  var hasDamagedStructure = RoleRepairer.findRepairTargets(spawn).length > 0;
  Object.keys(Game.creeps).forEach(function (name) {
        var creep = Game.creeps[name];
        if (creep.memory.role === "builder") {
          if (hasDamagedStructure) {
            console.log("builder repair");
            return RoleRepairer.roleRepairer(spawn, creep);
          } else if (hasConstructionSite) {
            console.log("builder build");
            return RoleBuilder.roleBuilder(creep);
          } else {
            console.log("builder upgrade");
            return RoleUpgrader.roleUpgrader(creep);
          }
        }
        
      });
  
}

function transfer(spawn) {
  var bodies = [
    CARRY,
    CARRY,
    CARRY,
    CARRY,
    MOVE,
    MOVE
  ];
  var name1 = RoleTransferer.transfererName(minePos1);
  var err1 = spawn.spawnCreep(bodies, name1, {
        memory: {
          role: "transferer1"
        }
      });
  if (Caml_obj.caml_equal(err1, ERR_NOT_ENOUGH_ENERGY)) {
    console.log("transferer no energy");
  }
  var name2 = RoleTransferer.transfererName(minePos2);
  var err2 = spawn.spawnCreep(bodies, name2, {
        memory: {
          role: "transferer2"
        }
      });
  if (Caml_obj.caml_equal(err2, ERR_NOT_ENOUGH_ENERGY)) {
    console.log("transferer no energy");
  }
  Object.keys(Game.creeps).forEach(function (name) {
        var creep = Game.creeps[name];
        if (creep.memory.role === "transferer1") {
          RoleTransferer.roleTransferer(creep, minePos1);
        }
        if (creep.memory.role === "transferer2") {
          return RoleTransferer.roleTransferer(creep, minePos2);
        }
        
      });
  
}

function harvest(spawn) {
  var harvesters = Js_dict.values(Game.creeps).filter(function (creep) {
        return creep.memory.role === "harvester";
      });
  if (harvesters.length < 2) {
    var newName = "Harvester" + String(Game.time);
    console.log("Spawning new harvester: ", newName);
    spawn.spawnCreep([
          WORK,
          CARRY,
          MOVE
        ], newName, {
          memory: {
            role: "harvester"
          }
        });
  }
  Object.keys(Game.creeps).forEach(function (name) {
        var creep = Game.creeps[name];
        if (creep.memory.role === "harvester") {
          return RoleHarvester.roleHarvester(creep);
        }
        
      });
  
}

function loop(param) {
  var spawn = Game.spawns["Spawn1"];
  var room = spawn.room;
  transfer(spawn);
  mine(room, spawn);
  outpostMine(room, spawn);
  outpostTransfer(room, spawn);
  build(spawn, 3);
  upgraders(spawn);
  return towerDefence(spawn);
}

exports.upgraders = upgraders;
exports.towerDefence = towerDefence;
exports.minePos1 = minePos1;
exports.minePos2 = minePos2;
exports.outpostMinePos1 = outpostMinePos1;
exports.mine = mine;
exports.outpostMine = outpostMine;
exports.outpostTransfer = outpostTransfer;
exports.build = build;
exports.transfer = transfer;
exports.harvest = harvest;
exports.loop = loop;
/* No side effect */
