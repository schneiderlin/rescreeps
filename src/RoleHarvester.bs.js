// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Caml_obj = require("rescript/lib/js/caml_obj.js");
var Caml_array = require("rescript/lib/js/caml_array.js");

function roleHarvester(creep) {
  if (creep.store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
    var resources = creep.room.find(106);
    if (Caml_obj.caml_equal(creep.pickup(Caml_array.get(resources, 0)), ERR_NOT_IN_RANGE)) {
      creep.moveTo(Caml_array.get(resources, 0).pos);
      return ;
    } else {
      return ;
    }
  }
  var targets = creep.room.find(107);
  var filteredTargets = targets.filter(function (structure) {
        if (Caml_obj.caml_equal(structure.structureType, STRUCTURE_EXTENSION) || Caml_obj.caml_equal(structure.structureType, STRUCTURE_TOWER) || Caml_obj.caml_equal(structure.structureType, STRUCTURE_SPAWN)) {
          return structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
        } else {
          return false;
        }
      });
  if (filteredTargets.length > 0 && Caml_obj.caml_equal(creep.transfer(Caml_array.get(filteredTargets, 0), RESOURCE_ENERGY), ERR_NOT_IN_RANGE)) {
    creep.moveTo(Caml_array.get(filteredTargets, 0).pos);
    return ;
  }
  
}

exports.roleHarvester = roleHarvester;
/* No side effect */
