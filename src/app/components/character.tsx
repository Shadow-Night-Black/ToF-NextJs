import { Player } from "@/model/character/player";
import { FC } from "react";
import { SkillsList } from "./SkillsList";
import { theCity } from "@/data/world/setting";
import { Container } from "@nextui-org/react";
import { CharacterBio } from "./characterBio";

export const Character: FC<{ data: Player }> = ({ data }) => (
    <Container>
      <CharacterBio character={data}></CharacterBio>
      <SkillsList character={data} setting={theCity}></SkillsList>
    </Container>
);
