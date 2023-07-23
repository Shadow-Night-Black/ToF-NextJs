"use client";

import { Character } from "./components/character";

import { Suspense, useState } from "react";
import { getCharacterFromState } from "@/data/globalState";
import { lensToUpdate } from "./state/updateLens";
import { useQuery } from "@tanstack/react-query";
import { getCharacter } from "./api/character/interface";
import Error from "next/error";
import { Player } from "@/model/character/player";

export default function Home() {
  const [characterId, setCharacterId] = useState(0);
  const {isLoading, isError, isSuccess, data, error } = useQuery({
    queryKey: ["getCharacter", characterId],
    queryFn: () => getCharacter(characterId),
  });


  if (isLoading) return <Suspense></Suspense>
  if (isError) return <Error  statusCode={500}>{error}</Error>


  return (
    <Character
      character={data}
      updateCharacter={() => {}}
    />
  );
}
