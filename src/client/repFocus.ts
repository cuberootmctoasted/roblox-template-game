import { RunService, Workspace } from "@rbxts/services";
import { covenant } from "shared/covenant";
import { CLocalRepFocus } from "shared/covenant/cLocalRepFocus/cLocalRepFocusComponent";
import { IdRepFocus } from "shared/covenant/idRepFocus/idRepFocusComponent";

const camera = Workspace.CurrentCamera!;

RunService.Heartbeat.Connect(() => {
    for (const [entity, { part }] of covenant.worldQuery(IdRepFocus).with(CLocalRepFocus)) {
        //part?.PivotTo(new CFrame(100000, 0, 0));
        if (part === undefined) continue;
        if (camera.CFrame.Position.sub(part.Position).Magnitude < 20) continue;
        part.PivotTo(camera.CFrame);
    }
});
