import { Player } from "@/model/character/player";
import { Skill } from "@/model/character/skill";
import {
  Power,
  Finesse,
  Intellect,
  Presence,
  Resilience,
  Wits,
} from "../world/attributes";
import { state } from "../globalState";

const exampleSkillList: Skill[] = [
  {
    name: "Jump",
    attributeMap: {
      [Power.name]: 3,
      [Finesse.name]: 1,
    },
    id: crypto.randomUUID(),
  },
  {
    name: "Talking",
    attributeMap: { [Presence.name]: 3, [Intellect.name]: 1 },
    id: crypto.randomUUID(),
  },
];

const exampleSkillList2: Skill[] = [
  {
    name: "Dash",
    attributeMap: {
      [Power.name]: 1,
      [Resilience.name]: 2,
    },
    id: crypto.randomUUID(),
  },
  {
    name: "Swearing",
    attributeMap: { [Presence.name]: 3, [Wits.name]: 3 },
    id: crypto.randomUUID(),
  },
];

export const examplePlayer: Player = {
  playerName: "Player Name",
  characterName: "Character Name",
  skills: exampleSkillList,
  traits: [],
  setting: "The City",
  id: "6c0d74ff-4ba8-45fc-b756-b4a8d7d66657"
};

export const examplePlayer2: Player = {
  playerName: "Other Name",
  characterName: "Other Character Name",
  skills: exampleSkillList2,
  traits: [],
  setting: "The City",
  id: "f51a693e-0bec-4edd-8b54-0fca1dcf9bf6",
};
