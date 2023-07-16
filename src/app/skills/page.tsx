"use client"

import { useState } from "react";
import { SkillsList } from "../components/skillsList";
import { examplePlayer } from "@/data/character/example";
import { theCity } from "@/data/world/setting";

export default function Home() {
  const [character, updateCharacter] = useState(examplePlayer);
  return (
    <SkillsList character={character} setting={theCity} update={ updateCharacter}></SkillsList>
  );
}