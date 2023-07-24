"use client";

import { Character } from "./components/character";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCharacter, getCharacters } from "./api/character/interface";
import Error from "next/error";
import { Navbar } from "@nextui-org/react";

export default function Home() {
  const charactersQuery = useQuery({
    queryKey: ["getCharacter"],
    queryFn: () => getCharacters(),
  });

  const [characterId, setCharacterId] = useState(charactersQuery.data?.[0].id ?? "");

  if (!characterId && charactersQuery.isSuccess) {
    setCharacterId(charactersQuery.data[0].id)
  }


  const characterQuery = useQuery({
    queryKey: ["getCharacter", characterId],
    queryFn: () => getCharacter(characterId),
    enabled: charactersQuery.isSuccess && !!characterId
  });

  if (charactersQuery.isLoading || characterQuery.isLoading) return <></>;
  if (charactersQuery.isError || characterQuery.isError)
    return <Error statusCode={500}></Error>;

  return (
    <>
      <Navbar>
        <Navbar.Content>
          {charactersQuery.data.map((c) => (
            <Navbar.Item key={c.id} onClick={() => setCharacterId(c.id)}>{c.name}</Navbar.Item>
          ))}
        </Navbar.Content>
      </Navbar>
      {!!characterQuery.data ? <Character character={characterQuery.data} updateCharacter={() => {}} /> : <></>}
    </>
  );
}
