import { Player } from "@/model/character/player";

export const getCharacter = async (id = 0) => {
  const data = await fetch(`/api/character/${id}`);
  return Player.parse(await data.json())
};

export const getCharacters = () => fetch(`/api/character/`, {});
