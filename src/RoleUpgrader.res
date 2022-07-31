// var roleUpgrader = {

//     /** @param {Creep} creep **/
//     run: function(creep) {
// 	    if(creep.store[RESOURCE_ENERGY] == 0) {
//             var sources = creep.room.find(FIND_SOURCES);
//             if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
//                 creep.moveTo(sources[0]);
//             }
//         }
//         else {
//             if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
//                 creep.moveTo(creep.room.controller);
//             }
//         }
// 	}
// };

// module.exports = roleUpgrader;

open Binding

let roleUpgrader = (creep: creep) => {
  if creep.store->getUsedCapacityE(resourceEnergy) == 0 {
    let sources = creep.room->findSources
    if creep->harvest(sources[0]) == errNotInRange {
      let _ = creep->moveTo(sources[0].pos)
    }
  } else if creep->upgradeController(creep.room["controller"]) == errNotInRange {
    let _ = creep->moveTo(creep.room["controller"]["pos"])
  }
}
