import { Players, RunService } from "@rbxts/services";
import { covenant } from "../covenant";
import { IdRepFocus } from "../idRepFocus/idRepFocusComponent";
import { CLocalRepFocus } from "./cLocalRepFocusComponent";

covenant.defineComponent({
    component: CLocalRepFocus,
    queriedComponents: [[IdRepFocus]],
    replicated: false,
    predictionValidator: false,
    recipe: (entity, lastState, updateId, { useEvent, useChange, useComponentChange }) => {
        if (!RunService.IsClient()) return undefined;
        const repFocus = covenant.worldGet(entity, IdRepFocus);
        if (repFocus === undefined) return undefined;
        if (repFocus.player !== Players.LocalPlayer) return undefined;
        return true;
    },
});
