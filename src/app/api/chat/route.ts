import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { message } = (await request.json()) as ChatRequest;
  const response = await fetch("http://192.168.219.100:8001/v1/chat", {
    method: "POST",
    body: JSON.stringify({ message }),
  });
  return NextResponse.json({ ok: true, response });
}

export async function GET(request: NextRequest) {
  const response = await fetch("http://192.168.219.100:8001/v1/chat-info").then(
    (res) => res.json()
  );
  return NextResponse.json({ message: "Hello, world!", response });
}
