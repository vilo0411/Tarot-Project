// src/components/TarotReading/AIAnalysisProvider.js
import React, { createContext, useContext } from 'react';
import useAIAnalysis from './hooks/useAIAnalysis';

// Create context
const AIAnalysisContext = createContext(null);

/**
 * Provider component for AI Analysis context
 * 
 * @param {Object} props Component props
 * @param {React.ReactNode} props.children Child components
 * @returns {JSX.Element} Provider component
 */
export function AIAnalysisProvider({ children }) {
  const analysisState = useAIAnalysis();
  
  return (
    <AIAnalysisContext.Provider value={analysisState}>
      {children}
    </AIAnalysisContext.Provider>
  );
}

/**
 * Custom hook to use AI Analysis context
 * 
 * @returns {Object} Analysis state and methods
 */
export function useAIAnalysisContext() {
  const context = useContext(AIAnalysisContext);
  
  if (!context) {
    throw new Error('useAIAnalysisContext must be used within an AIAnalysisProvider');
  }
  
  return context;
}

export default AIAnalysisProvider;