import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { ko } from '@/lib/i18n/ko';
import { en } from '@/lib/i18n/en';

interface ClientSessionState {
  // Session data
  chatRequest?: ChatRequest;
  symbols?: Array<string>;
  tools?: Array<string>;
  period?: [number, number]; // unix timestamp
  language?: 'ko' | 'en' | 'ja' | 'zh' | 'es' | 'fr' | 'de'; // user preferred language
}

interface ClientSessionActions {
  // Chat Request actions
  setChatRequest: (chatRequest: ChatRequest) => void;
  updateChatRequest: (updates: Partial<ChatRequest>) => void;
  addToConversationHistory: (message: {
    role: "user" | "assistant";
    content: string;
  }) => void;
  clearChatRequest: () => void;

  // Symbols actions
  setSymbols: (symbols: Array<string>) => void;
  addSymbol: (symbol: string) => void;
  removeSymbol: (symbol: string) => void;
  clearSymbols: () => void;

  // Tools actions
  setTools: (tools: Array<string>) => void;
  addTool: (tool: string) => void;
  removeTool: (tool: string) => void;
  clearTools: () => void;

  // Period actions
  setPeriod: (period: [number, number]) => void;
  clearPeriod: () => void;

  // Language actions
  setLanguage: (language: 'ko' | 'en' | 'ja' | 'zh' | 'es' | 'fr' | 'de') => void;
  clearLanguage: () => void;

  // Session actions
  resetSession: () => void;
  getSessionData: () => ClientSession;
}

type ClientSessionStore = ClientSessionState & ClientSessionActions;

export const useClientSessionStore = create<ClientSessionStore>()(
  devtools(
    persist(
      (set, get) => ({
        // Initial state
        chatRequest: undefined,
        symbols: [],
        tools: [],
        period: undefined,
        language: 'ko', // default language

        // Chat Request actions
        setChatRequest: (chatRequest: ChatRequest) =>
          set({ chatRequest }, false, "setChatRequest"),

        updateChatRequest: (updates: Partial<ChatRequest>) =>
          set(
            (state) => ({
              chatRequest: state.chatRequest
                ? { ...state.chatRequest, ...updates }
                : (updates as ChatRequest),
            }),
            false,
            "updateChatRequest"
          ),

        addToConversationHistory: (message: {
          role: "user" | "assistant";
          content: string;
        }) =>
          set(
            (state) => ({
              chatRequest: {
                ...state.chatRequest,
                message: state.chatRequest?.message || "",
                conversation_history: [
                  ...(state.chatRequest?.conversation_history || []),
                  message,
                ],
              },
            }),
            false,
            "addToConversationHistory"
          ),

        clearChatRequest: () =>
          set({ chatRequest: undefined }, false, "clearChatRequest"),

        // Symbols actions
        setSymbols: (symbols: Array<string>) =>
          set({ symbols }, false, "setSymbols"),

        addSymbol: (symbol: string) =>
          set(
            (state) => ({
              symbols: state.symbols?.includes(symbol)
                ? state.symbols
                : [...(state.symbols || []), symbol],
            }),
            false,
            "addSymbol"
          ),

        removeSymbol: (symbol: string) =>
          set(
            (state) => ({
              symbols: state.symbols?.filter((s) => s !== symbol) || [],
            }),
            false,
            "removeSymbol"
          ),

        clearSymbols: () => set({ symbols: [] }, false, "clearSymbols"),

        // Tools actions
        setTools: (tools: Array<string>) => set({ tools }, false, "setTools"),

        addTool: (tool: string) =>
          set(
            (state) => ({
              tools: state.tools?.includes(tool)
                ? state.tools
                : [...(state.tools || []), tool],
            }),
            false,
            "addTool"
          ),

        removeTool: (tool: string) =>
          set(
            (state) => ({
              tools: state.tools?.filter((t) => t !== tool) || [],
            }),
            false,
            "removeTool"
          ),

        clearTools: () => set({ tools: [] }, false, "clearTools"),

        // Period actions
        setPeriod: (period: [number, number]) =>
          set({ period }, false, "setPeriod"),

        clearPeriod: () => set({ period: undefined }, false, "clearPeriod"),

        // Language actions
        setLanguage: (language: 'ko' | 'en' | 'ja' | 'zh' | 'es' | 'fr' | 'de') =>
          set({ language }, false, "setLanguage"),

        clearLanguage: () => set({ language: 'ko' }, false, "clearLanguage"),

        // Session actions
        resetSession: () =>
          set(
            {
              chatRequest: undefined,
              symbols: [],
              tools: [],
              period: undefined,
              // language는 초기화하지 않음 - 사용자 설정 유지
            },
            false,
            "resetSession"
          ),

        getSessionData: (): ClientSession => {
          const state = get();
          return {
            chatRequest: state.chatRequest,
            symbols: state.symbols,
            tools: state.tools,
            period: state.period,
            language: state.language,
          };
        },
      }),
      {
        name: "client-session-store",
        partialize: (state) => ({
          symbols: state.symbols,
          tools: state.tools,
          period: state.period, // unix timestamp이므로 persist 가능
          language: state.language, // 사용자 언어 설정은 persist
          // chatRequest는 세션별로 관리하므로 persist하지 않음
        }),
      }
    ),
    {
      name: "client-session-store",
    }
  )
);

// 헬퍼 함수들
export const useSymbolsActions = () => {
  const { symbols, addSymbol, removeSymbol, setSymbols } =
    useClientSessionStore();

  const toggleSymbol = (symbol: string) => {
    if (symbols?.includes(symbol)) {
      removeSymbol(symbol);
    } else {
      addSymbol(symbol);
    }
  };

  return {
    symbols: symbols || [],
    addSymbol,
    removeSymbol,
    toggleSymbol,
    setSymbols,
  };
};

export const useChatActions = () => {
  const {
    chatRequest,
    setChatRequest,
    updateChatRequest,
    addToConversationHistory,
  } = useClientSessionStore();

  const sendMessage = (message: string, systemPrompt?: string) => {
    // 사용자 메시지를 히스토리에 추가
    addToConversationHistory({ role: "user", content: message });

    // 현재 메시지로 chatRequest 업데이트
    updateChatRequest({
      message,
      system_prompt: systemPrompt,
    });
  };

  const addAssistantResponse = (response: string) => {
    addToConversationHistory({ role: "assistant", content: response });
  };

  return {
    chatRequest,
    conversationHistory: chatRequest?.conversation_history || [],
    sendMessage,
    addAssistantResponse,
    setChatRequest,
    updateChatRequest,
  };
};

// Period 관리용 헬퍼 함수 (Unix Timestamp)
export const usePeriodActions = () => {
  const { period, setPeriod, clearPeriod } = useClientSessionStore();

  const setPeriodFromDates = (startDate: Date, endDate: Date) => {
    const startTimestamp = Math.floor(startDate.getTime() / 1000);
    const endTimestamp = Math.floor(endDate.getTime() / 1000);
    setPeriod([startTimestamp, endTimestamp]);
  };

  const setPeriodFromStrings = (startDate: string, endDate: string) => {
    const startTimestamp = Math.floor(new Date(startDate).getTime() / 1000);
    const endTimestamp = Math.floor(new Date(endDate).getTime() / 1000);
    setPeriod([startTimestamp, endTimestamp]);
  };

  const setPeriodFromTimestamps = (startTimestamp: number, endTimestamp: number) => {
    setPeriod([startTimestamp, endTimestamp]);
  };

  // Unix timestamp를 Date로 변환하는 헬퍼
  const getStartDate = (): Date | undefined => {
    return period?.[0] ? new Date(period[0] * 1000) : undefined;
  };

  const getEndDate = (): Date | undefined => {
    return period?.[1] ? new Date(period[1] * 1000) : undefined;
  };

  // 포맷된 날짜 문자열 반환
  const getFormattedPeriod = () => {
    if (!period) return null;
    
    const startDate = getStartDate();
    const endDate = getEndDate();
    
    return {
      start: startDate?.toISOString().split('T')[0], // YYYY-MM-DD
      end: endDate?.toISOString().split('T')[0],
      startDate,
      endDate,
    };
  };

  return {
    period,
    setPeriod,
    setPeriodFromDates,
    setPeriodFromStrings,
    setPeriodFromTimestamps,
    clearPeriod,
    startTimestamp: period?.[0],
    endTimestamp: period?.[1],
    getStartDate,
    getEndDate,
    getFormattedPeriod,
  };
};

// Language 관리용 헬퍼 함수
export const useLanguageActions = () => {
  const { language, setLanguage } = useClientSessionStore();

  return {
    language: language || 'ko',
    setLanguage,
  };
};

// i18n 직접 사용 헬퍼 함수
export const useI18n = () => {
  const { language, setLanguage } = useClientSessionStore();
  
  // 번역 파일들은 상단에서 import
  
  const translations = {
    ko,
    en,
    // 추후 확장 가능
    ja: ko, // 임시로 한국어 사용
    zh: ko, // 임시로 한국어 사용
    es: en, // 임시로 영어 사용
    fr: en, // 임시로 영어 사용
    de: en, // 임시로 영어 사용
  };
  
  const currentLang = language || 'ko';
  
  return {
    language: currentLang,
    translations: translations[currentLang as keyof typeof translations] || translations.ko,
    setLanguage,
  };
};
