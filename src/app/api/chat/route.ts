import { NextRequest, NextResponse } from "next/server";

interface ChatRequest {
  message: string;
  conversation_history?: Array<{
    role: "user" | "assistant";
    content: string;
  }>;
  system_prompt?: string;
}

export async function POST(request: NextRequest) {
  try {
    const { message, conversation_history, system_prompt } =
      (await request.json()) as ChatRequest;

    if (!message?.trim()) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    console.log(message, conversation_history, system_prompt);

    // 외부 AI API 호출
    const response = await fetch("http://192.168.219.100:8001/v1/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
        conversation_history: conversation_history || [],
        system_prompt,
      }),
    });

    if (!response.ok) {
      throw new Error(`AI API returned ${response.status}`);
    }

    const aiResponse = await response.json();

    return NextResponse.json({
      message:
        aiResponse.message || aiResponse.response || "응답을 받지 못했습니다.",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Chat API error:", error);

    // 폴백 응답
    const fallbackResponses = [
      "죄송합니다. 현재 서버에 연결할 수 없습니다.",
      "잠시 후 다시 시도해주세요.",
      "서버 연결에 문제가 있습니다.",
    ];

    const fallbackResponse =
      fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];

    return NextResponse.json({
      message: fallbackResponse,
      timestamp: new Date().toISOString(),
      error: true,
    });
  }
}

export async function GET() {
  try {
    const response = await fetch("http://192.168.219.100:8001/v1/chat-info");
    const data = await response.json();

    return NextResponse.json({
      message: "Chat API is running",
      info: data,
      timestamp: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json({
      message: "Chat API is running (offline mode)",
      error: "External API unavailable",
      timestamp: new Date().toISOString(),
    });
  }
}
