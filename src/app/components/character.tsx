import { Player } from "@/model/character/player";
import { FC } from "react";
import { SkillsList } from "./SkillsList";
import { theCity } from "@/data/world/setting";

export const Character:FC<{data:Player}> = ({data}) => 
    <div>

    <div>{data.playerName}</div>
    <div>{data.characterName}</div>
    <SkillsList character={data} setting={theCity}></SkillsList>
    </div>
