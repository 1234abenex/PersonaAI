import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ChatMessage } from "@/types/personas.types";

interface ChatState {
  messages: ChatMessage[];
  isLoading: boolean;
  currentChatId: string | null;
  chatHistory: Record<string, ChatMessage[]>;
}

const initialState: ChatState = {
  messages: [],
  isLoading: false,
  currentChatId: null,
  chatHistory: {},
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<ChatMessage>) => {
      const message = {
        ...action.payload,
        timestamp: new Date(action.payload.timestamp), // Ensure timestamp is a Date object
      };
      state.messages.push(message);
      if (state.currentChatId) {
        if (!state.chatHistory[state.currentChatId]) {
          state.chatHistory[state.currentChatId] = [];
        }
        state.chatHistory[state.currentChatId].push(message);
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    clearMessages: (state) => {
      state.messages = [];
    },
    startNewChat: (state, action: PayloadAction<string>) => {
      const chatId = action.payload;
      state.currentChatId = chatId;
      state.messages = [];
      if (!state.chatHistory[chatId]) {
        state.chatHistory[chatId] = [];
      }
    },
    loadChat: (state, action: PayloadAction<string>) => {
      const chatId = action.payload;
      state.currentChatId = chatId;
      const chatMessages = state.chatHistory[chatId] || [];
      // Ensure timestamps are Date objects when loading
      state.messages = chatMessages.map((msg) => ({
        ...msg,
        timestamp: new Date(msg.timestamp),
      }));
    },
    deleteChat: (state, action: PayloadAction<string>) => {
      const chatId = action.payload;
      delete state.chatHistory[chatId];
      if (state.currentChatId === chatId) {
        state.currentChatId = null;
        state.messages = [];
      }
    },
    clearAllHistory: (state) => {
      state.chatHistory = {};
      state.messages = [];
      state.currentChatId = null;
    },
  },
});

export const {
  addMessage,
  setLoading,
  clearMessages,
  startNewChat,
  loadChat,
  deleteChat,
  clearAllHistory,
} = chatSlice.actions;

export default chatSlice.reducer;
