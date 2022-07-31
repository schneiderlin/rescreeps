// var roleHarvester = require('role.harvester');
// var roleUpgrader = require('role.upgrader');

// module.exports.loop = function () {

//     for(var name in Game.creeps) {
//         var creep = Game.creeps[name];
//         if(creep.memory.role == 'harvester') {
//             roleHarvester.run(creep);
//         }
//         if(creep.memory.role == 'upgrader') {
//             roleUpgrader.run(creep);
//         }
//     }
// }

open Binding

let loop = ( ) => {
    game.creeps->Js.Dict.keys->Js.Array2.forEach(name => {
        let creep = game.creeps->Js.Dict.get(name)->Belt.Option.getUnsafe
        if (creep.memory.role == "harvester") {
            RoleHarvester.roleHarvester(creep)
        } else {
            RoleUpgrader.roleUpgrader(creep)
        }
    })
}