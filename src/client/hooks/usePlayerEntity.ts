import { Entity } from "@rbxts/covenant";
import { useEffect, useState } from "@rbxts/react";
import { Players } from "@rbxts/services";
import { covenant } from "shared/covenant";
import { IdPlayer } from "shared/covenant/components/_list";

export function usePlayerEntity() {
    const [playerEntity, setPlayerEntity] = useState(-1 as Entity);

    useEffect(() => {
        const unsubscribe = covenant.subscribeComponent(IdPlayer, (entity, player, old) => {
            if (player !== Players.LocalPlayer) return;
            setPlayerEntity(entity);
        });
        return unsubscribe;
    }, []);

    return playerEntity;
}
