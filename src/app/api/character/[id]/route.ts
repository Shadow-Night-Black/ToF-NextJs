import {
  examplePlayer,
  examplePlayer2 
} from "@/data/character/example";
import { playerId } from "@/model/character/player";
import { NextRequest, NextResponse } from "next/server";


const chars = [examplePlayer, examplePlayer2];

export async function GET(
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  const character = chars.find(c => playerId.get(c) == id)

  if (!character) return new Response(null, {status:404})

  return NextResponse.json(character);
}
