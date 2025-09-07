import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface ChatMessage {
  sender: 'ai' | 'user';
  text: string;
  timestamp?: string;
  error?: boolean;
}

interface AppState {
  // Session
  sessionId: string;
  
  // Chat
  messages: ChatMessage[];
  isLoading: boolean;
  
  // Symbols
  selectedSymbols: string[];
  
  // UI State
  leftPanelWidth: number;
}

interface AppActions {
  // Session
  setSessionId: (sessionId: string) => void;
  
  // Chat
  addMessage: (message: ChatMessage) => void;
  setMessages: (messages: ChatMessage[]) => void;
  setLoading: (loading: boolean) => void;
  clearMessages: () => void;
  
  // Symbols
  toggleSymbol: (symbol: string) => void;
  removeSymbol: (symbol: string) => void;
  setSelectedSymbols: (symbols: string[]) => void;
  
  // UI
  setLeftPanelWidth: (width: number) => void;
}

type AppStore = AppState & AppActions;

const generateSessionId = () => {
  return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

export const useAppStore = create<AppStore>()(
  devtools(
    persist(
      (set, get) => ({
        // Initial state
        sessionId: '',
        messages: [],
        isLoading: false,
        selectedSymbols: [],
        leftPanelWidth: 50,

        // Actions
        setSessionId: (sessionId: string) => 
          set({ sessionId }, false, 'setSessionId'),

        addMessage: (message: ChatMessage) =>
          set(
            (state) => ({ messages: [...state.messages, message] }),
            false,
            'addMessage'
          ),

        setMessages: (messages: ChatMessage[]) =>
          set({ messages }, false, 'setMessages'),

        setLoading: (loading: boolean) =>
          set({ isLoading: loading }, false, 'setLoading'),

        clearMessages: () =>
          set({ messages: [] }, false, 'clearMessages'),

        toggleSymbol: (symbol: string) =>
          set(
            (state) => ({
              selectedSymbols: state.selectedSymbols.includes(symbol)
                ? state.selectedSymbols.filter(s => s !== symbol)
                : [...state.selectedSymbols, symbol]
            }),
            false,
            'toggleSymbol'
          ),

        removeSymbol: (symbol: string) =>
          set(
            (state) => ({
              selectedSymbols: state.selectedSymbols.filter(s => s !== symbol)
            }),
            false,
            'removeSymbol'
          ),

        setSelectedSymbols: (symbols: string[]) =>
          set({ selectedSymbols: symbols }, false, 'setSelectedSymbols'),

        setLeftPanelWidth: (width: number) =>
          set({ leftPanelWidth: width }, false, 'setLeftPanelWidth'),
      }),
      {
        name: 'app-store',
        partialize: (state) => ({
          sessionId: state.sessionId,
          selectedSymbols: state.selectedSymbols,
          leftPanelWidth: state.leftPanelWidth,
        }),
        onRehydrateStorage: () => (state) => {
          // 세션 ID가 없으면 새로 생성
          if (state && !state.sessionId) {
            state.setSessionId(generateSessionId());
          }
        },
      }
    ),
    {
      name: 'app-store',
    }
  )
);

// 세션 초기화 헬퍼
export const initializeSession = () => {
  const store = useAppStore.getState();
  if (!store.sessionId) {
    store.setSessionId(generateSessionId());
  }
};