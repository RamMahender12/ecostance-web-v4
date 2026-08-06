import { NextResponse } from "next/server";
import { answerFromFaq } from "../../../content/site";

export async function POST(req: Request) {
  let message = "";
  try {
    const body = (await req.json()) as { message?: unknown };
    message = typeof body.message === "string" ? body.message.slice(0, 500) : "";
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  // ponytail: keyword FAQ, not an LLM — swap for real model / app API when ready
  return NextResponse.json({ reply: answerFromFaq(message) });
}
