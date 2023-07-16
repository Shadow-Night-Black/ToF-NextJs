"use client";

import { Character } from "./components/character";
import { exampleGlobalState } from "@/data/character/example";

import { useState } from "react";
import { getCharacterFromState } from "@/data/globalState";
import { lensToUpdate } from "./state/updateLens";

export default function Home() {
  const [state, updateState] = useState(exampleGlobalState);
  return (
    <Character
      character={getCharacterFromState.get(state)}
      updateCharacter={lensToUpdate(getCharacterFromState, updateState)}
    />
  );
}
