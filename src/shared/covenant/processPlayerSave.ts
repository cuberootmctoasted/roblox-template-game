import { Entity } from "@rbxts/covenant";
import { PlayerSave } from "./playerSave";
import { CovenantHooks } from "@rbxts/covenant/src/hooks";

export function processPlayerSave(
    entity: Entity,
    player: Player,
    lastSave: PlayerSave,
    updateId: number,
    hooks: CovenantHooks,
): PlayerSave {
    // how player save interacts with other components
    return lastSave;
}
