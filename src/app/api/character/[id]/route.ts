import {
  examplePlayer,
  examplePlayer as examplePlayer2,
} from "@/data/character/example";
import { playerId } from "@/model/character/player";
import { NextRequest, NextResponse } from "next/server";
import * as z from "zod";

export const characterGetRequest = z.object({
  //   id: z.string().uuid(),
  id: z.number(),
});
export type characterGetRequest = z.infer<typeof characterGetRequest>;

const chars = [examplePlayer, examplePlayer2];

export async function GET(
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  const character = chars[parseInt(id)];

  return NextResponse.json(character);
}
