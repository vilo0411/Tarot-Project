// src/api/tarot/index.js
import { analyzeTarotReading } from './geminiClient';
import { getMockAnalysis } from './mockAnalysis';
import { USE_MOCK_DATA } from '../../utils/tarot/constants';

/**
 * Get tarot reading analysis based on selected cards and question
 * 
 * @param {string} question The user's question
 * @param {Array} selectedCards Array of selected card objects
 * @param {string} spreadType Type of spread (e.g., 'single-card', 'past-present-future')
 * @returns {Promise<Object>} Analysis result with text content
 */
export async function getTarotAnalysis(question, selectedCards, spreadType) {
  try {
    // Use mock data if specified in configuration
    if (USE_MOCK_DATA) {
      console.log('Using mock tarot analysis data');
      return getMockAnalysis(question, selectedCards, spreadType);
    }
    
    // Otherwise use the real API
    return await analyzeTarotReading(question, selectedCards, spreadType);
  } catch (error) {
    console.error('Error getting tarot analysis:', error);
    throw error;
  }
}

export default {
  getTarotAnalysis
};