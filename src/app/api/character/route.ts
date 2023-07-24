import { examplePlayer, examplePlayer2 } from "@/data/character/example";
import { NextResponse } from "next/server";
import { z } from "zod";

export const characterGetRequest = z.object({
  //   id: z.string().uuid(),
  id: z.number(),
});
export type characterGetRequest = z.infer<typeof characterGetRequest>;

const chars = [examplePlayer, examplePlayer2];
export async function GET() {
  return NextResponse.json(
    chars.map((c) => ({ id: c.id, name: c.characterName }))
  );
}
