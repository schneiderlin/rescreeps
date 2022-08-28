// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Caml_obj = require("rescript/lib/js/caml_obj.js");
var Caml_array = require("rescript/lib/js/caml_array.js");
var Belt_Option = require("rescript/lib/js/belt_Option.js");
var Caml_option = require("rescript/lib/js/caml_option.js");

function roleBuilder(creep) {
  if (creep.memory.building && creep.store.getUsedCapacity(RESOURCE_ENERGY) === 0) {
    creep.memory.building = false;
  }
  if (!creep.memory.building && creep.store.getFreeCapacity(RESOURCE_ENERGY) === 0) {
    creep.memory.building = true;
  }
  if (creep.memory.building) {
    var match = creep.room.name;
    switch (match) {
      case "E31N28" :
          var targets = creep.room.find(111);
          if (targets.length > 0 && Caml_obj.caml_equal(creep.build(Caml_array.get(targets, 0)), ERR_NOT_IN_RANGE)) {
            creep.moveTo(Caml_array.get(targets, 0).pos);
          }
          break;
      case "E32N28" :
          creep.moveTo(0, 23);
          break;
      default:
        console.log("out builder 跑到了其他房间");
    }
    return ;
  }
  var match$1 = creep.room.name;
  switch (match$1) {
    case "E31N28" :
        creep.moveTo(49, 24);
        break;
    case "E32N28" :
        var resource = creep.pos.findClosestByPath(creep.room.find(106).filter(function (r) {
                  return r.amount > 100;
                }));
        Belt_Option.forEach((resource == null) ? undefined : Caml_option.some(resource), (function (r) {
                if (Caml_obj.caml_equal(creep.pickup(r), ERR_NOT_IN_RANGE)) {
                  creep.moveTo(r.pos);
                  return ;
                }
                
              }));
        break;
    default:
      console.log("out builder 跑到了其他房间");
  }
  
}

exports.roleBuilder = roleBuilder;
/* No side effect */
