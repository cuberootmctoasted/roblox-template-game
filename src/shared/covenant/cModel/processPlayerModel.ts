import { InferComponent } from "@rbxts/covenant";
import { IdPlayer } from "../idPlayer/idPlayerComponent";
import { CovenantHooks } from "@rbxts/covenant/src/hooks";

export function processPlayerModel(
    player: InferComponent<typeof IdPlayer>,
    updateId: number,
    useEvent: CovenantHooks["useEvent"],
): PVInstance | undefined {
    useEvent(updateId, player, player.CharacterAppearanceLoaded);
    useEvent(updateId, player, player.CharacterRemoving);

    return player.Character;
}
