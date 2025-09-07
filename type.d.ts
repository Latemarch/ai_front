// {
//   "message": "내 생일은?",
//   "conversation_history": [
//     {
//       "role": "user",
//       "content": "나의 생일은 3월1일이야"
//     }
//   ]
// }

interface ChatRequest {
  message: string;
  conversation_history?: Array<{
    role: "user" | "assistant";
    content: string;
  }>;
  system_prompt?: string;
}

interface ClientSession {
  chatRequest?: ChatRequest;
  symbols?: Array<string>;
  tools?: Array<string>;
  period?: [number, number]; //unix time stamp
}
