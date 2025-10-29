import { lerpBinding, useBindingListener } from "@rbxts/pretty-react-hooks";
import React, { useMemo } from "@rbxts/react";
import { Screen } from "client/components/screen";
import { Transition } from "client/components/transition";
import { useComponent } from "client/hooks/useComponent";
import { usePlayerEntity } from "client/hooks/usePlayerEntity";
import { MotionVariantOptions, useTransition } from "client/hooks/useTransition";
import { CPage } from "shared/covenant/components/_list";

export function Template() {
    const playerEntity = usePlayerEntity();
    const page = useComponent(playerEntity, CPage);
    const visible = useMemo(() => page === "placeholder", [page]);
    const direction = useMemo(() => (visible ? "in" : "out"), [visible]);
    const transition = useTransition(visible, {
        in: MotionVariantOptions.spring({}),
        out: MotionVariantOptions.spring({}),
    });

    return (
        <Screen>
            <Transition groupTransparency={lerpBinding(transition, 1, 0)}></Transition>
        </Screen>
    );
}
