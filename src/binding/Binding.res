type structureType
@val external structureExtension: structureType = "STRUCTURE_EXTENSION"
@val external structureSpawn: structureType = "STRUCTURE_SPAWN"
@val external structureTower: structureType = "STRUCTURE_TOWER"
@val external structureRoad: structureType = "STRUCTURE_ROAD"
@val external structureContainerC: structureType = "STRUCTURE_CONTAINER"
@val external structureWall: structureType = "STRUCTURE_WALL"
@val external structureRampart: structureType = "STRUCTURE_RAMPART"

type bodyPart
@val external work: bodyPart = "WORK"
@val external carry: bodyPart = "CARRY"
@val external move: bodyPart = "MOVE"

// STRUCTURE_KEEPER_LAIR: "keeperLair",
// STRUCTURE_PORTAL: "portal",
// STRUCTURE_CONTROLLER: "controller",
// STRUCTURE_LINK: "link",
// STRUCTURE_STORAGE: "storage",
// STRUCTURE_TOWER: "tower",
// STRUCTURE_OBSERVER: "observer",
// STRUCTURE_POWER_BANK: "powerBank",
// STRUCTURE_POWER_SPAWN: "powerSpawn",
// STRUCTURE_EXTRACTOR: "extractor",
// STRUCTURE_LAB: "lab",
// STRUCTURE_TERMINAL: "terminal",
// STRUCTURE_NUKER: "nuker",
// STRUCTURE_FACTORY: "factory",
// STRUCTURE_INVADER_CORE: "invaderCore",

type roomPosition = {"x": int, "y": int, "roomName": string}
type store = {"dummy": int}
type structure = {
  "pos": roomPosition,
  // "room": room,
  "id": string,
  "structureType": structureType,
  "store": store,
  "hits": int,
  "hitsMax": int,
}
type structureController = {
  "pos": roomPosition,
  // "room": room,
  "id": string,
  "structureType": structureType,
  "store": store,
  "hits": int,
  "hitsMax": int,
}
type structureContainer = {
  "pos": roomPosition,
  // "room": room,
  "id": string,
  "structureType": structureType,
  "store": store,
  "hits": int,
  "hitsMax": int,
}
type structureExtension = {
  "pos": roomPosition,
  // "room": room,
  "id": string,
  "structureType": structureType,
  "store": store,
  "hits": int,
  "hitsMax": int,
}
type room = {"controller": structureController, "energyAvailable": int}
type roomObject = {"pos": roomPosition, "room": room}

type stats = {
  gcl: float,
  gclLevel: int,
  gpl: float,
  gplLevel: int,
  cpu: float,
  bucket: int,
}

type memory = {role: string, mutable building: bool}

type resource = {pos: roomPosition, amount: int}

type constructionSite = {
  pos: roomPosition,
  structureType: structureType,
}

type spawn = {...structure, "room": room}

type source = {pos: roomPosition}

type body = {
  boost: string,
  \"type": bodyPart,
  hits: int,
}

type creep = {
  id: int,
  my: bool,
  name: string,
  pos: roomPosition,
  store: store,
  room: room,
  memory: memory,
  body: array<body>,
}

type tower = {
  pos: roomPosition,
  id: int,
  store: store,
  room: room,
}

type flag = {pos: roomPosition}

type gcl = {
  level: int,
  progress: int,
  progressTotal: int,
}

type gpl = {
  level: int,
  progress: int,
  progressTotal: int,
}

type cpu = {
  limit: int,
  tickLimit: int,
  bucket: int,
  // shardLimits:
  unlocked: bool,
  unlockedTime: int,
}

@send external getUsed: cpu => float = "getUsed"

type game = {
  spawns: Js.Dict.t<spawn>,
  creeps: Js.Dict.t<creep>,
  flags: Js.Dict.t<flag>,
  rooms: Js.Dict.t<room>,
  time: int,
  gcl: gcl,
  gpl: gpl,
  cpu: cpu,
}

@send @return(nullable)
external getStructureById: (game, string) => option<structure> = "getObjectById"

@send @return(nullable)
external getTowerById: (game, string) => option<tower> = "getObjectById"

@send @return(nullable)
external getCreepById: (game, string) => option<creep> = "getObjectById"

@val external game: game = "Game"
@val external memory: memory = "Memory"
@val external global: 'a = "global"

@val external resourceEnergy: 'a = "RESOURCE_ENERGY"

type actionErr
@val external ok: actionErr = "OK" // 0
@val external errNotOwner: actionErr = "ERR_NOT_OWNER" // -1
@val external errNoPath: actionErr = "ERR_NO_PATH" // -2
@val external errNameExists: actionErr = "ERR_NAME_EXISTS" // -3
@val external errBusy: actionErr = "ERR_BUSY" // -4
@val external errNotFound: actionErr = "ERR_NOT_FOUND" // -5
@val external errNotEnoughEnergy: actionErr = "ERR_NOT_ENOUGH_ENERGY" // -6
@val external errNotEnoughResources: actionErr = "ERR_NOT_ENOUGH_RESOURCES" // -6
@val external errInvalidTarget: actionErr = "ERR_INVALID_TARGET" // -7
@val external errFull: actionErr = "ERR_FULL" // -8
@val external errNotInRange: actionErr = "ERR_NOT_IN_RANGE" // -9
@val external errInvalidArgs: actionErr = "ERR_INVALID_ARGS" // -10
@val external errTired: actionErr = "ERR_TIRED" // -11
@val external errNoBodypart: actionErr = "ERR_NO_BODYPART" // -12
@val external errNotEnoughExtensions: actionErr = "ERR_NOT_ENOUGH_EXTENSIONS" // -6
@val external errRclNotEnough: actionErr = "ERR_RCL_NOT_ENOUGH" // -14
@val external errGclNotEnough: actionErr = "ERR_GCL_NOT_ENOUGH" // -15

exception Err

module StructureOrResource = {
  type t

  external structure: structure => t = "%identity"
  external resource: resource => t = "%identity"
}

type structureOrResource = Resource(resource) | Structure(structure)

module Private = {
  type any
  @send @return(nullable)
  external findClosestByPath: (roomPosition, array<StructureOrResource.t>) => option<any> =
    "findClosestByPath"
  type typeName = [#RESOURCE | #STRUCTURE]
  let getType: any => typeName = %raw(`x => {
      if (x instanceof Resource) { return "RESOURCE" }
      if (x instanceof Structure) { return "STRUCTURE" }
    }
  `)
  let classify = (v: any): structureOrResource =>
    switch v->getType {
    | #RESOURCE => Resource(v->Obj.magic)
    | #STRUCTURE => Structure(v->Obj.magic)
    }
}

// pos functions
@send @return(nullable)
external findClosestByPathCS: (roomPosition, array<constructionSite>) => option<constructionSite> =
  "findClosestByPath"
@send @return(nullable)
external findClosestByPathSource: (roomPosition, array<source>) => option<source> = "findClosestByPath"
@send @return(nullable)
external findClosestByPathCreep: (roomPosition, array<creep>) => option<creep> = "findClosestByPath"
@send @return(nullable)
external findClosestByPathStructure: (roomPosition, array<structure>) => option<structure> =
  "findClosestByPath"
@send @return(nullable)
external findClosestByPathResource: (roomPosition, array<resource>) => option<resource> = "findClosestByPath"
let findClosestByPath = (pos, array: array<StructureOrResource.t>) =>
  Private.findClosestByPath(pos, array)->Belt.Option.map(Private.classify)

// spawn functions
@send external spawnCreep: (spawn, array<bodyPart>, string) => actionErr = "spawnCreep"
@send external spawnCreepOpts: (spawn, array<bodyPart>, string, 'a) => actionErr = "spawnCreep"

// creep functions
@send external moveTo: (creep, roomPosition) => actionErr = "moveTo"
@send external moveToPos: (creep, int, int) => actionErr = "moveTo"
@send external harvest: (creep, source) => actionErr = "harvest"
@send external withdraw: (creep, structure, 'a) => actionErr = "withdraw"
@send external drop: (creep, 'a) => actionErr = "drop"
@send external pickup: (creep, resource) => actionErr = "pickup"
@send external transferStructure: (creep, structure, 'a) => actionErr = "transfer"
@send external transferSpawn: (creep, spawn, 'a) => actionErr = "transfer"
@send external say: (creep, string) => unit = "say"
@send external upgradeController: (creep, structureController) => actionErr = "upgradeController"
@send external build: (creep, constructionSite) => actionErr = "build"
@send external repair: (creep, structure) => actionErr = "repair"

// tower functions
// @send external attackT: (tower, pos)
@send external repairT: (tower, structure) => actionErr = "repair"
@send external attackT: (tower, creep) => actionErr = "attack"

// store functions
@send external getFreeCapacity: store => int = "getFreeCapacity"
@send external getCapacity: store => int = "getCapacity"
@send external getFreeCapacityE: (store, 'a) => int = "getFreeCapacity"
@send external getUsedCapacityE: (store, 'a) => int = "getUsedCapacity"

@send external findExitTop: (room, @as(1) _) => array<roomPosition> = "find"
@send external findExitRight: (room, @as(3) _) => array<roomPosition> = "find"
@send external findExitBottom: (room, @as(5) _) => array<roomPosition> = "find"
@send external findExitLeft: (room, @as(7) _) => array<roomPosition> = "find"
@send external findExit: (room, @as(10) _) => array<roomPosition> = "find"
@send external findCreeps: (room, @as(101) _) => array<creep> = "find"
@send external findMyCreeps: (room, @as(102) _) => array<creep> = "find"
@send external findHostileCreeps: (room, @as(103) _) => array<creep> = "find"
@send external findSourcesAtive: (room, @as(104) _) => array<source> = "find"
@send external findSources: (room, @as(105) _) => array<source> = "find"
@send external findDroppedResources: (room, @as(106) _) => array<resource> = "find"
@send external findStructures: (room, @as(107) _) => array<structure> = "find"
@send external findMyStructures: (room, @as(108) _) => array<structure> = "find"
@send external findHostileStructures: (room, @as(109) _) => array<structure> = "find"
@send external findFlags: (room, @as(110) _) => array<flag> = "find"
@send external findConstructionSites: (room, @as(111) _) => array<constructionSite> = "find"
@send external findMySpawns: (room, @as(112) _) => array<spawn> = "find"
@send external findHostileSpawns: (room, @as(113) _) => array<spawn> = "find"
@send external findMyConstructionSites: (room, @as(114) _) => array<constructionSite> = "find"
@send external findHostileConstructionSites: (room, @as(115) _) => array<constructionSite> = "find"
@send external findMinerals: (room, @as(116) _) => array<roomPosition> = "find"
