open Binding

let loop = () => {
    game.rooms->Js.Dict.keys->Js.Array2.forEach(name => {
        let room = game.rooms->Js.Dict.get(name)->Belt.Option.getUnsafe
        Js.log("Room " ++ name ++ " has " ++ room["energyAvailable"]->Belt.Int.toString ++ " energy")
    })

    game.creeps->Js.Dict.keys->Js.Array2.forEach(name => {
        let creep = game.creeps->Js.Dict.get(name)->Belt.Option.getUnsafe
        if (creep.memory.role == "harvester") {
            RoleHarvester.roleHarvester(creep)
        }
        if (creep.memory.role == "builder") {
            RoleBuilder.roleBuilder(creep)
        }
    })
}