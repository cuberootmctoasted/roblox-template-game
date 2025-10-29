import { RunService } from "@rbxts/services";
import { covenant } from "../covenant";
import { CInputs } from "../cInputs/cInputsComponent";
import { CPage } from "./cPageComponent";
import { IdPlayer } from "../idPlayer/idPlayerComponent";

covenant.defineComponent({
    component: CPage,
    queriedComponents: [[IdPlayer, CInputs]],
    replicated: true,
    predictionValidator: false,
    recipe: (entity, lastState, updateId, { useEvent, useComponentChange }) => {
        if (!RunService.IsServer()) {
            return lastState;
        }

        // where logic for the pages happen

        return "placeholder";
    },
});
