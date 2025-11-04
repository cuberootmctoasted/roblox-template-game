import { useCamera, useKeyPress } from "@rbxts/pretty-react-hooks";
import React, { useEffect, useMemo } from "@rbxts/react";
import { RunService } from "@rbxts/services";
import { useChangable } from "client/hooks/useChangable";
import { useComponent } from "client/hooks/useComponent";
import { useKeybind } from "client/hooks/useKeybind";
import { getInputs, updateInputs } from "shared/inputs";

export function MovementController({ humanoid }: { humanoid: Humanoid }) {
    const camera = useCamera();

    const forward = useKeybind("forward");
    const backward = useKeybind("backward");
    const left = useKeybind("left");
    const right = useKeybind("right");
    print(forward);

    useEffect(() => {
        let moveDirection = Vector2.zero;
        if (forward) {
            moveDirection = moveDirection.add(new Vector2(0, 1));
        }
        if (backward) {
            moveDirection = moveDirection.add(new Vector2(-1, 0));
        }
        if (left) {
            moveDirection = moveDirection.add(new Vector2(0, -1));
        }
        if (right) {
            moveDirection = moveDirection.add(new Vector2(1, 0));
        }
        updateInputs((inputs) => {
            inputs.moveDirection = moveDirection.Magnitude > 0 ? moveDirection : undefined;
        });
    }, [forward, backward, left, right]);

    const { moveDirection } = useChangable(getInputs);

    useEffect(() => {
        if (moveDirection === undefined) {
            humanoid.WalkSpeed = 0;
            return;
        }
        humanoid.WalkSpeed = 16;
        const connection = RunService.Heartbeat.Connect(() => {
            const realMoveDirection = camera.CFrame.LookVector.mul(moveDirection.Y).add(
                camera.CFrame.RightVector.mul(moveDirection.X),
            );
            humanoid.Move(realMoveDirection);
        });
        return () => {
            connection.Disconnect();
        };
    }, [moveDirection, camera, humanoid]);

    return <></>;
}
