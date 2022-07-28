open Binding

let loop = () => {
    game.creeps->Js.Dict.keys->Js.Array2.forEach(name => {
        let creep = game.creeps->Js.Dict.get(name)->Belt.Option.getUnsafe
        RoleHarvester.roleHarvester(creep)
    })
}