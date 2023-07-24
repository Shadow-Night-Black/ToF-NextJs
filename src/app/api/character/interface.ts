import { Player } from "@/model/character/player";
import { z } from "zod";

export const getCharacter = async (id:string) => {
  const data = await fetch(`/api/character/${id}`);
  return Player.parse(await data.json())
};

export const getCharacters = async () => {
  const data = await fetch(`/api/character/`);
  return z.array(z.object({id:z.string().uuid(), name:z.string()})).parse(await data.json())
};
