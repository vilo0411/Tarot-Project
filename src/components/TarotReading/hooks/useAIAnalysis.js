// src/components/TarotReading/hooks/useAIAnalysis.js
import { useState, useCallback } from 'react';
import { getTarotAnalysis } from '../../../api/tarot';
import { SPREAD_TYPES } from '../../../utils/tarot/constants';

/**
 * Custom hook for handling AI analysis of tarot readings
 * 
 * @returns {Object} Analysis state and methods
 */
export function useAIAnalysis() {
  const [result, setResult] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState(null);
  const [timestamp, setTimestamp] = useState(null);

  /**
   * Analyze tarot reading based on question and selected cards
   * 
   * @param {string} question User's question for the reading
   * @param {Array} selectedCards Array of selected tarot cards
   * @param {string} spreadType Type of spread being used
   * @returns {Promise<Object|null>} Analysis result or null if error
   */
  const analyzeReading = useCallback(async (question, selectedCards, spreadType) => {
    if (!question || !selectedCards || selectedCards.length === 0) {
      setError('Question and cards are required for analysis');
      return null;
    }
    
    // Validate spread type
    const validSpreadType = getSpreadTypeValue(spreadType);
    if (!validSpreadType) {
      setError(`Invalid spread type: ${spreadType}`);
      return null;
    }
    
    // Reset states
    setError(null);
    setIsAnalyzing(true);
    
    try {
      // Get analysis from API
      const analysis = await getTarotAnalysis(question, selectedCards, validSpreadType);
      
      // Set results
      setResult(analysis);
      setTimestamp(new Date());
      setIsAnalyzing(false);
      
      return analysis;
    } catch (err) {
      console.error('Error analyzing tarot reading:', err);
      setError(err.message || 'An error occurred while analyzing your reading');
      setIsAnalyzing(false);
      return null;
    }
  }, []);

  /**
   * Clear analysis results and error state
   */
  const clearAnalysis = useCallback(() => {
    setResult(null);
    setError(null);
    setTimestamp(null);
  }, []);

  /**
   * Helper function to get the correct spread type value
   * 
   * @param {string|Object} spreadType Spread type identifier or object
   * @returns {string} Valid spread type string
   */
  const getSpreadTypeValue = (spreadType) => {
    // If spread type is a string that matches one of our known spreadTypes, use it
    if (typeof spreadType === 'string') {
      // Check if it's one of our known spreadType values
      const matchingSpread = Object.values(SPREAD_TYPES).find(
        spread => spread.spreadType === spreadType
      );
      
      if (matchingSpread) {
        return matchingSpread.spreadType;
      }
      
      // Otherwise just return the string as is
      return spreadType;
    }
    
    // If it's an object with count, try to match by count
    if (spreadType && typeof spreadType === 'object' && spreadType.count) {
      const matchingSpread = Object.values(SPREAD_TYPES).find(
        spread => spread.count === spreadType.count
      );
      
      if (matchingSpread) {
        return matchingSpread.spreadType;
      }
    }
    
    // Default to 'general' if we can't determine the spread type
    return 'general';
  };

  return {
    result,
    isAnalyzing,
    error,
    timestamp,
    analyzeReading,
    clearAnalysis
  };
}

export default useAIAnalysis;