import { Player } from "@/model/character/player";
import { FC, useState } from "react";
import { theCity } from "@/data/world/setting";
import { Container } from "@nextui-org/react";
import { CharacterBio } from "./characterBio";
import { SkillsList } from "./skillsList";

export const Character: FC<{ data: Player }> = ({ data }) => {
    var [state, updateState] = useState(data);
    return (
        <Container>
            <CharacterBio character={state} update={updateState}></CharacterBio>
            <SkillsList character={state} update={updateState} setting={theCity}></SkillsList>
        </Container>
    );
};
