import { Player } from "@/model/character/player";
import { FC } from "react";
import { UpdateCard } from "./input/UpdateCard";
import { Grid } from "@nextui-org/react";
import { Update } from "../state/updateLens";

export const CharacterBio: FC<{ character: Player, update:Update<Player>}> = ({ character, update }) => {
  return (
    <Grid.Container gap={2} justify={"center"}>
      <UpdateCard label="Player Name" update={playerName => update({...character, playerName}) } text={character.playerName}></UpdateCard>
      <UpdateCard label="Character Name" update={characterName => update({...character, characterName})} text={character.characterName}></UpdateCard>
    </Grid.Container>
  );
};
