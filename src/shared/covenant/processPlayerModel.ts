import { InferComponent } from "@rbxts/covenant";
import { CovenantHooks } from "@rbxts/covenant/src/hooks";
import { IdPlayer } from "./components/_list";

export function processPlayerModel(
    player: InferComponent<typeof IdPlayer>,
    updateId: number,
    useEvent: CovenantHooks["useEvent"],
): PVInstance | undefined {
    useEvent(updateId, player, player.CharacterAppearanceLoaded);
    useEvent(updateId, player, player.CharacterRemoving);

    return player.Character;
}
