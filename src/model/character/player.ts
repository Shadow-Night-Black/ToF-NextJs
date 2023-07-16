import { Skill, createSkill } from "./skill";

type Setter<T, V> = (state:T) => (value:V) => T 

export interface Player {
  playerName: string;
  characterName: string;
  skills: Skill[];
  traits: string[];
  setting: string;
}

export const updatePlayerSkills: Setter<Player, Skill[]> = (player) => (skills) => ({
  ...player,
  skills,
});

const updateSkill: Setter<Skill[], Skill> = (skills) => (skill) =>
  skills.map((s) => (s.name == skill.name ? skill : s));

export const updatePlayerSkill: Setter<Player, Skill> = (player) => (skill) => updatePlayerSkills(player)(updateSkill(player.skills)(skill))
export const addSkill: Setter<Skill[], Skill> = (skills) => (skill) =>
  [...skills, createSkill(skill)];

