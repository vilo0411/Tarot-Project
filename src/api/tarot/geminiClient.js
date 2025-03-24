// src/api/tarot/geminiClient.js
import { AIAnalysisClient } from './aiAnalysisClient';
import { GEMINI_PROMPTS } from '../../utils/tarot/prompts';
import { GEMINI_API_KEY, GEMINI_API_ENDPOINT, GEMINI_MODEL } from '../../utils/tarot/constants';

/**
 * Client for Google's Gemini AI API
 */
export class GeminiClient extends AIAnalysisClient {
  constructor(config = {}) {
    super({
      apiKey: GEMINI_API_KEY,
      apiEndpoint: GEMINI_API_ENDPOINT,
      model: GEMINI_MODEL,
      temperature: 0.7,
      maxTokens: 1024,
      ...config
    });
  }
  
  /**
   * Format cards into a string representation for the prompt
   * 
   * @param {Array} cards Array of card objects
   * @returns {string} Formatted cards string
   */
  formatCardsForPrompt(cards) {
    return cards.map((card, index) => {
      let position = '';
      
      // Assign position based on spreadType and index
      switch (cards.length) {
        case 1:
          position = 'Single Card';
          break;
        case 3:
          position = ['Past', 'Present', 'Future'][index];
          break;
        case 5:
          position = ['Center', 'Top', 'Left', 'Right', 'Bottom'][index];
          break;
        case 10:
          position = [
            'Situation', 'Challenge', 'Conscious', 'Unconscious', 
            'Past', 'Future', 'Self', 'Environment', 'Hopes/Fears', 'Outcome'
          ][index];
          break;
        default:
          position = `Position ${index + 1}`;
      }
      
      return `${index + 1}. ${card.name} (${card.isReversed ? 'Reversed' : 'Upright'}) - ${position}`;
    }).join('\n');
  }
  
  /**
   * Format the prompt for Gemini API
   * 
   * @param {string} question User's question
   * @param {Array} cards Selected cards
   * @param {string} spreadType Type of spread
   * @returns {string} Formatted prompt
   */
  formatPrompt(question, cards, spreadType) {
    // Get the appropriate prompt template based on spread type
    let promptTemplate;
    switch (spreadType) {
      case 'single-card':
        promptTemplate = GEMINI_PROMPTS.SINGLE_CARD;
        break;
      case 'past-present-future':
        promptTemplate = GEMINI_PROMPTS.THREE_CARD;
        break;
      case 'celtic-cross':
        promptTemplate = GEMINI_PROMPTS.CELTIC_CROSS;
        break;
      default:
        promptTemplate = GEMINI_PROMPTS.GENERAL;
    }
    
    // Format the cards as a string
    const formattedCards = this.formatCardsForPrompt(cards);
    
    // Replace placeholders in the prompt template
    return promptTemplate
      .replace('{{QUESTION}}', question)
      .replace('{{CARDS}}', formattedCards)
      .replace('{{SPREAD_TYPE}}', spreadType);
  }
  
  /**
   * Process the response from Gemini API
   * 
   * @param {Object} response Raw response from Gemini API
   * @returns {Object} Processed analysis
   */
  processResponse(response) {
    // Extract the text content from Gemini's response
    const text = response?.candidates?.[0]?.content?.parts?.[0]?.text || '';
    
    // Basic sentiment analysis based on text content
    const sentiment = this.analyzeSentiment(text);
    
    return {
      text,
      sentiment,
      timestamp: new Date().toISOString()
    };
  }
  
  /**
   * Simple sentiment analysis to enhance the response
   * 
   * @param {string} text Analysis text
   * @returns {Object} Sentiment information
   */
  analyzeSentiment(text) {
    const positiveTerms = ['positive', 'opportunity', 'growth', 'strength', 'success', 'fortunate'];
    const negativeTerms = ['challenge', 'obstacle', 'difficult', 'warning', 'negative', 'loss'];
    
    let positiveCount = 0;
    let negativeCount = 0;
    
    positiveTerms.forEach(term => {
      const regex = new RegExp(term, 'gi');
      const matches = text.match(regex);
      if (matches) positiveCount += matches.length;
    });
    
    negativeTerms.forEach(term => {
      const regex = new RegExp(term, 'gi');
      const matches = text.match(regex);
      if (matches) negativeCount += matches.length;
    });
    
    const total = positiveCount + negativeCount;
    if (total === 0) return { score: 0, magnitude: 0 };
    
    const score = (positiveCount - negativeCount) / total;
    const magnitude = total / 10; // Normalize to 0-1 range
    
    return { score, magnitude };
  }
  
  /**
   * Send a request to Gemini API
   * 
   * @param {string} prompt Formatted prompt
   * @returns {Promise<Object>} API response
   */
  async sendRequest(prompt) {
    try {
      const url = `${this.config.apiEndpoint}?key=${this.config.apiKey}`;
      
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: prompt }]
          }],
          generationConfig: {
            temperature: this.config.temperature,
            maxOutputTokens: this.config.maxTokens,
          }
        })
      });
      
      if (!response.ok) {
        const errorBody = await response.text();
        throw new Error(`Gemini API Error: ${response.status} - ${errorBody}`);
      }
      
      return await response.json();
    } catch (error) {
      throw this.handleError(error);
    }
  }
  
  /**
   * Analyze a tarot reading
   * 
   * @param {string} question User's question
   * @param {Array} cards Selected cards
   * @param {string} spreadType Type of spread
   * @returns {Promise<Object>} Analysis result
   */
  async analyzeReading(question, cards, spreadType) {
    try {
      const prompt = this.formatPrompt(question, cards, spreadType);
      const response = await this.sendRequest(prompt);
      return this.processResponse(response);
    } catch (error) {
      throw this.handleError(error);
    }
  }
}

// Instance export for easier usage
const geminiClient = new GeminiClient();

/**
 * Analyze tarot reading using Gemini API
 * 
 * @param {string} question User's question
 * @param {Array} selectedCards Selected cards
 * @param {string} spreadType Type of spread
 * @returns {Promise<Object>} Analysis result
 */
export async function analyzeTarotReading(question, selectedCards, spreadType) {
  return geminiClient.analyzeReading(question, selectedCards, spreadType);
}

export default geminiClient;