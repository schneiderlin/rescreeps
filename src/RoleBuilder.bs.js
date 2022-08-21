// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Caml_obj = require("rescript/lib/js/caml_obj.js");
var Caml_array = require("rescript/lib/js/caml_array.js");
var Belt_Option = require("rescript/lib/js/belt_Option.js");
var Caml_option = require("rescript/lib/js/caml_option.js");

function roleBuilder(creep) {
  if (creep.memory.building && creep.store.getUsedCapacity(RESOURCE_ENERGY) === 0) {
    creep.memory.building = false;
    creep.say("\xf0\x9f\x94\x84 harvest");
  }
  if (!creep.memory.building && creep.store.getFreeCapacity(RESOURCE_ENERGY) === 0) {
    creep.memory.building = true;
    creep.say("\xf0\x9f\x9a\xa7 build");
  }
  if (creep.memory.building) {
    var targets = creep.room.find(111);
    if (targets.length > 0 && Caml_obj.caml_equal(creep.build(Caml_array.get(targets, 0)), ERR_NOT_IN_RANGE)) {
      creep.moveTo(Caml_array.get(targets, 0).pos);
      return ;
    } else {
      return ;
    }
  }
  var resource = creep.pos.findClosestByPath(creep.room.find(106).filter(function (r) {
            return r.amount > 300;
          }));
  return Belt_Option.forEach((resource == null) ? undefined : Caml_option.some(resource), (function (r) {
                if (Caml_obj.caml_equal(creep.pickup(r), ERR_NOT_IN_RANGE)) {
                  creep.moveTo(r.pos);
                  return ;
                }
                
              }));
}

exports.roleBuilder = roleBuilder;
/* No side effect */
