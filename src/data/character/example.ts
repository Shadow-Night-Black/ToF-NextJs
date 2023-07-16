import { Player } from "@/model/character/player";
import { Skill } from "@/model/character/skill";
import { Power, Finesse, Intellect, Presence } from "../world/attributes";
import { state } from "../globalState";

const exampleSkillList: Skill[] = [
  {
    name: "Jump",
    attributeMap: {
      [Power.name]: 3,
      [Finesse.name]: 1,
    },
  },
  {
    name: "Talking",
    attributeMap: { [Presence.name]: 3, [Intellect.name]: 1 },
  },
];

export const examplePlayer: Player = {
  playerName: "Player Name",
  characterName: "Character Name",
  skills: exampleSkillList,
  traits: [],
  setting: "The City",
};

export const exampleGlobalState: state = {
  character: examplePlayer,
};
