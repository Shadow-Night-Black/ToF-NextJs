import { Player } from "@/model/character/player";
import { Lens } from "monocle-ts";

export interface state {
    character:Player
}

export const getCharacterFromState = Lens.fromProp<state>()("character");