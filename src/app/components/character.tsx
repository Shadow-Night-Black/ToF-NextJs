import { Player } from "@/model/character/player";
import { FC } from "react";
import { theCity } from "@/data/world/setting";
import { CharacterBio } from "./characterBio";
import { SkillsList } from "./skillsList";
import { Update } from "../state/updateLens";

export const Character: FC<{ character: Player, updateCharacter: Update<Player> }> = ({ character, updateCharacter }) => {
  return (
    <>
      <CharacterBio character={character} update={updateCharacter}></CharacterBio>
      <SkillsList
        character={character}
        update={updateCharacter}
        setting={theCity}
      ></SkillsList>
    </>
  );
};
