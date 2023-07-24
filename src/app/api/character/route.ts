import { examplePlayer, examplePlayer2 } from "@/data/character/example";
import { NextResponse } from "next/server";


const chars = [examplePlayer, examplePlayer2];
export async function GET() {
  return NextResponse.json(
    chars.map((c) => ({ id: c.id, name: c.characterName }))
  );
}
