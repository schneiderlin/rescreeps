// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Caml_obj = require("rescript/lib/js/caml_obj.js");
var Caml_array = require("rescript/lib/js/caml_array.js");
var Belt_Option = require("rescript/lib/js/belt_Option.js");
var Caml_option = require("rescript/lib/js/caml_option.js");

function findAndTransfer(creep, allStructures, structureTypes) {
  var filteredTargets = allStructures.filter(function (structure) {
        if (Belt_Option.isSome(Caml_option.undefined_to_opt(structureTypes.find(function (t) {
                        return Caml_obj.caml_equal(structure.structureType, t);
                      })))) {
          return structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
        } else {
          return false;
        }
      });
  if (filteredTargets.length > 0) {
    if (Caml_obj.caml_equal(creep.transfer(Caml_array.get(filteredTargets, 0), RESOURCE_ENERGY), ERR_NOT_IN_RANGE)) {
      creep.moveTo(Caml_array.get(filteredTargets, 0).pos);
    }
    return true;
  } else {
    return false;
  }
}

function roleTransferer(creep) {
  if (creep.store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
    var resources = creep.room.find(106);
    if (Caml_obj.caml_equal(creep.pickup(Caml_array.get(resources, 0)), ERR_NOT_IN_RANGE)) {
      creep.moveTo(Caml_array.get(resources, 0).pos);
      return ;
    } else {
      return ;
    }
  }
  var allStructures = creep.room.find(107);
  var hasTask = findAndTransfer(creep, allStructures, [
        STRUCTURE_EXTENSION,
        STRUCTURE_SPAWN
      ]);
  if (!hasTask) {
    findAndTransfer(creep, allStructures, [STRUCTURE_CONTAINER]);
    return ;
  }
  
}

exports.findAndTransfer = findAndTransfer;
exports.roleTransferer = roleTransferer;
/* No side effect */
