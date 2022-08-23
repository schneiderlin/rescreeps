// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Caml_obj = require("rescript/lib/js/caml_obj.js");
var Belt_Array = require("rescript/lib/js/belt_Array.js");
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
    var resource = Belt_Array.get(resources, 0);
    return Belt_Option.forEach(resource, (function (r) {
                  if (Caml_obj.caml_equal(creep.pickup(r), ERR_NOT_IN_RANGE)) {
                    creep.moveTo(r.pos);
                    return ;
                  }
                  
                }));
  }
  var allStructures = creep.room.find(107);
  var hasTask = findAndTransfer(creep, allStructures, [
        STRUCTURE_EXTENSION,
        STRUCTURE_SPAWN
      ]);
  if (hasTask) {
    return ;
  }
  var hasTask$1 = findAndTransfer(creep, allStructures, [STRUCTURE_TOWER]);
  if (hasTask$1) {
    return ;
  }
  var hasTask$2 = findAndTransfer(creep, allStructures, [STRUCTURE_CONTAINER]);
  if (!hasTask$2) {
    findAndTransfer(creep, allStructures, [STRUCTURE_STORAGE]);
    return ;
  }
  
}

exports.findAndTransfer = findAndTransfer;
exports.roleTransferer = roleTransferer;
/* No side effect */
