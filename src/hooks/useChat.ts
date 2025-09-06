import { useState, useCallback } from 'react';
import api from '@/lib/axios';

export interface ChatMessage {
  sender: 'ai' | 'user';
  text: string;
  timestamp?: string;
  error?: boolean;
}

export interface UseChatReturn {
  messages: ChatMessage[];
  isLoading: boolean;
  error: string | null;
  sendMessage: (message: string) => Promise<void>;
  clearMessages: () => void;
  retry: () => Promise<void>;
}

export function useChat(initialMessages: ChatMessage[] = []): UseChatReturn {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastUserMessage, setLastUserMessage] = useState<string>('');

  const sendMessage = useCallback(async (message: string) => {
    if (!message.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      sender: 'user',
      text: message.trim(),
      timestamp: new Date().toISOString(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);
    setLastUserMessage(message.trim());

    try {
      // Convert messages to conversation_history format
      const conversation_history = messages.map(msg => ({
        role: msg.sender === 'ai' ? 'assistant' as const : 'user' as const,
        content: msg.text,
      }));

      const response = await api.post('/chat', {
        message: message.trim(),
        conversation_history,
      });

      const aiMessage: ChatMessage = {
        sender: 'ai',
        text: response.data.message,
        timestamp: response.data.timestamp,
        error: response.data.error || false,
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (err) {
      console.error('Chat error:', err);
      
      const errorMessage: ChatMessage = {
        sender: 'ai',
        text: '죄송합니다. 메시지 전송 중 오류가 발생했습니다.',
        timestamp: new Date().toISOString(),
        error: true,
      };

      setMessages(prev => [...prev, errorMessage]);
      setError('메시지 전송에 실패했습니다.');
    } finally {
      setIsLoading(false);
    }
  }, [messages, isLoading]);

  const retry = useCallback(async () => {
    if (!lastUserMessage || isLoading) return;
    await sendMessage(lastUserMessage);
  }, [lastUserMessage, isLoading, sendMessage]);

  const clearMessages = useCallback(() => {
    setMessages([]);
    setError(null);
    setLastUserMessage('');
  }, []);

  return {
    messages,
    isLoading,
    error,
    sendMessage,
    clearMessages,
    retry,
  };
}