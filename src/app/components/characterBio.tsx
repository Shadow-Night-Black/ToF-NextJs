import { Player } from "@/model/character/player";
import { FC, useState } from "react";
import { UpdateCard } from "./input/UpdateCard";
import { Grid } from "@nextui-org/react";

export const CharacterBio: FC<{ character: Player }> = ({ character }) => {
    var [state, updateState] = useState(character);
  return (
    <Grid.Container gap={2} justify={"center"}>
      <UpdateCard label="Player Name" update={playerName => updateState({...state, playerName}) } text={state.playerName}></UpdateCard>
      <UpdateCard label="Character Name" update={characterName => updateState({...state, characterName})} text={state.characterName}></UpdateCard>
    </Grid.Container>
  );
};
