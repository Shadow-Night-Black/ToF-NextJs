import { Skill } from "./skill"

export interface Player{
    playerName:string
    characterName:string
    skills: Skill[]
    traits: string[]
    setting: string
}
