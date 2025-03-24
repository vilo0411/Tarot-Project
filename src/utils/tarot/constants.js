// src/utils/tarot/constants.js

/**
 * API keys and configuration constants
 * In a production environment, these would be stored in environment variables
 */

// Google Gemini API configuration
export const GEMINI_API_KEY = 'AIzaSyDo_UPahCaXZIdtGGVDMJy6QrPhLh2gE44';
export const GEMINI_API_ENDPOINT = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent'; 
export const GEMINI_MODEL = 'gemini-2.0-flash'; // Alternative: 'gemini-1.0-pro' for more detailed analysis

// OpenAI API configuration (alternative)
export const OPENAI_API_KEY = 'YOUR_OPENAI_API_KEY'; // Not used in the current implementation
export const OPENAI_API_ENDPOINT = 'https://api.openai.com/v1/chat/completions';
export const OPENAI_MODEL = 'gpt-3.5-turbo';

// Tarot spread types
export const SPREAD_TYPES = {
  SINGLE_CARD: {
    name: 'Rút 1 Lá',
    count: 1,
    description: 'Trả lời nhanh cho một câu hỏi đơn giản',
    spreadType: 'single-card'
  },
  THREE_CARDS: {
    name: 'Rút 3 Lá',
    count: 3,
    description: 'Quá khứ - Hiện tại - Tương lai',
    spreadType: 'past-present-future'
  },
  FIVE_CARDS: {
    name: 'Rút 5 Lá',
    count: 5,
    description: 'Trải bài chữ thập',
    spreadType: 'cross-spread'
  },
  TEN_CARDS: {
    name: 'Rút 10 Lá',
    count: 10,
    description: 'Trải bài Celtic Cross',
    spreadType: 'celtic-cross'
  }
};

// Feature flags - safely check environment without using process directly
export const USE_MOCK_DATA = typeof window !== 'undefined' && window.location.hostname === 'localhost';
export const ENABLE_DEBUG_LOGGING = typeof window !== 'undefined' && window.location.hostname === 'localhost';

// Analysis configuration
export const ANALYSIS_CONFIG = {
  maxTokens: 1024,
  temperature: 0.7,
  presencePenalty: 0.0,
  frequencyPenalty: 0.0,
  requestTimeout: 30000, // 30 seconds
  retryCount: 2,
  retryDelay: 1000, // 1 second
};

// Path configuration
export const IMAGE_PATHS = {
  CARD_BACK: '/img/deck/back.jpg',
  CARD_FRONT_PREFIX: '/img/deck/',
  CARD_FRONT_SUFFIX: '.jpg',
};

export default {
  GEMINI_API_KEY,
  GEMINI_API_ENDPOINT,
  GEMINI_MODEL,
  SPREAD_TYPES,
  USE_MOCK_DATA,
  ENABLE_DEBUG_LOGGING,
  ANALYSIS_CONFIG,
  IMAGE_PATHS
};