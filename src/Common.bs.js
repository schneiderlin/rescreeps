// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Caml_obj = require("rescript/lib/js/caml_obj.js");

function testToPick(creep) {
  var freeCapacity = creep.store.getFreeCapacity(RESOURCE_ENERGY);
  return freeCapacity > 0;
}

function pickResource(creep, resource) {
  if (Caml_obj.caml_equal(creep.pickup(resource), ERR_NOT_IN_RANGE)) {
    creep.moveTo(resource.pos);
    return ;
  }
  
}

exports.testToPick = testToPick;
exports.pickResource = pickResource;
/* No side effect */