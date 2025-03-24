// src/api/tarot/aiAnalysisClient.js

/**
 * Base class for AI analysis clients.
 * This provides a common interface for different AI providers.
 */
export class AIAnalysisClient {
    constructor(config = {}) {
      this.config = {
        apiKey: null,
        apiEndpoint: null,
        model: null,
        ...config
      };
      
      if (!this.config.apiKey && !this.config.skipValidation) {
        console.warn('No API key provided for AI Analysis Client');
      }
    }
    
    /**
     * Analyze tarot cards based on question and selected cards.
     * This is an abstract method that should be implemented by subclasses.
     * 
     * @param {string} question User's question
     * @param {Array} cards Selected cards
     * @param {string} spreadType Type of spread
     * @returns {Promise<Object>} Analysis result
     */
    async analyzeReading(question, cards, spreadType) {
      throw new Error('Method not implemented. Use a specific AI client implementation.');
    }
    
    /**
     * Format the prompt for the AI model
     * 
     * @param {string} question User's question 
     * @param {Array} cards Selected cards
     * @param {string} spreadType Type of spread
     * @returns {string} Formatted prompt
     */
    formatPrompt(question, cards, spreadType) {
      throw new Error('Method not implemented. Use a specific AI client implementation.');
    }
    
    /**
     * Process the raw response from the AI model
     * 
     * @param {any} response Raw response from the AI API
     * @returns {Object} Processed response with standardized structure
     */
    processResponse(response) {
      throw new Error('Method not implemented. Use a specific AI client implementation.');
    }
    
    /**
     * Handle errors from the AI API
     * 
     * @param {Error} error Error object
     * @returns {Error} Processed error with more context
     */
    handleError(error) {
      // Add additional context to the error
      const enhancedError = new Error(`AI Analysis Error: ${error.message}`);
      enhancedError.originalError = error;
      enhancedError.statusCode = error.statusCode || 500;
      return enhancedError;
    }
  }