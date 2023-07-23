import { Lens, Prism,  fromTraversable } from "monocle-ts";
import { Skill, createSkill } from "./skill";
import {Traversable} from "fp-ts/Array";
import * as z from "zod"

type Setter<T, V> = (state:T) => (value:V) => T 

export const Player =  z.object({
  id: z.string().uuid(),
  playerName: z.string(),
  characterName: z.string(),
  skills: z.array(Skill),
  traits: z.array(z.string()),
  setting: z.string()
})

export type Player = z.infer<typeof Player> 


export const updatePlayerSkills = Lens.fromProp<Player>()("skills");
export const playerId  = Lens.fromProp<Player>()("id")

const updateSingleSkill = ({id}:Skill) => fromTraversable(Traversable)<Skill>().composePrism(Prism.fromPredicate(skill => skill.id == id));


export const updatePlayerSkill = (skill:Skill) => updatePlayerSkills.composeTraversal(updateSingleSkill(skill))
export const addSkill: Setter<Skill[], Skill> = (skills) => (skill) =>
  [...skills, createSkill(skill)];

