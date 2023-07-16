import { Lens, Prism,  fromTraversable } from "monocle-ts";
import { Skill, createSkill } from "./skill";
import {Traversable} from "fp-ts/Array";

type Setter<T, V> = (state:T) => (value:V) => T 

export interface Player {
  playerName: string;
  characterName: string;
  skills: Skill[];
  traits: string[];
  setting: string;
}


export const updatePlayerSkills = Lens.fromProp<Player>()("skills");

const updateSingleSkill = ({id}:Skill) => fromTraversable(Traversable)<Skill>().composePrism(Prism.fromPredicate(skill => skill.id == id));


export const updatePlayerSkill = (skill:Skill) => updatePlayerSkills.composeTraversal(updateSingleSkill(skill))
export const addSkill: Setter<Skill[], Skill> = (skills) => (skill) =>
  [...skills, createSkill(skill)];

