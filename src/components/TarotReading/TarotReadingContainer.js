// src/components/TarotReading/TarotReadingContainer.js
import React, { useState } from 'react';
import styles from './TarotReadingContainer.module.css';

// Import custom components
import QuestionInput from './QuestionInput/QuestionInput';
import LoadingIndicator from './LoadingIndicator/LoadingIndicator';
import ErrorDisplay from './ErrorDisplay/ErrorDisplay';
import InstructionBox from './InstructionBox/InstructionBox';
import ReadingResults from './ReadingResults/ReadingResults';

// Import custom hooks
import useTarotCards from './hooks/useTarotCards';
import useTarotAnalysis from './hooks/useTarotAnalysis';

// Import existing components
import CardSelector from '../CardSelector/CardSelector';
import SpreadSelector from '../SpreadSelector/SpreadSelector';
import SpreadLayout from '../SpreadLayout/SpreadLayout';

const TarotReadingContainer = ({ title = "Bắt Đầu Cuộc Hành Trình Tarot" }) => {
  // State for the reading flow
  const [question, setQuestion] = useState('');
  const [isReading, setIsReading] = useState(false);
  const [selectedSpread, setSelectedSpread] = useState(null);
  
  // Use custom hooks
  const { 
    shuffledCards, 
    selectedCards, 
    isLoading: cardsLoading, 
    error: cardsError,
    resetCards,
    shuffleDeck,
    selectCard, // Fix: Add selectCard method from hook
    clearSelectedCards // Fix: Add clearSelectedCards method from hook
  } = useTarotCards();
  
  const {
    result: readingAnalysis,
    isAnalyzing,
    error: analysisError,
    analyzeCards,
    clearResults
  } = useTarotAnalysis();
  
  // Combine errors
  const error = cardsError || analysisError;
  
  // Handle question input
  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };
  
  // Handle spread selection
  const handleSpreadSelect = (spread) => {
    setSelectedSpread(spread);
    // Reset selected cards when changing spread
    clearSelectedCards(); // Fix: Use clearSelectedCards method from hook
  };
  
  // Handle card selection
  const handleCardSelect = (card) => {
    if (!selectedSpread) return;
    
    // Check if already at max cards for this spread
    if (selectedCards.length < selectedSpread.count) {
      // Fix: Use selectCard method from useTarotCards hook
      // Note: Our original CardSelector passes entire card object, but hook expects cardId
      // For compatibility with existing code, we'll use card.id or fallback to card.code
      const cardId = card.id || card.code;
      if (cardId) {
        selectCard(cardId);
      } else {
        // Fallback if card object structure isn't compatible with hook
        // This simulates what the hook's selectCard would do
        const newCard = { ...card, id: card.code || `card-${Date.now()}` };
        // Note: This is a workaround and wouldn't be needed if card objects are consistent
        shuffledCards.push(newCard);
        selectCard(newCard.id);
      }
    }
  };
  
  // Start reading
  const startReading = async () => {
    if (canStartReading()) {
      try {
        // Analyze cards
        await analyzeCards(question, selectedCards, getSpreadType());
        setIsReading(true);
      } catch (err) {
        console.error('Reading analysis error:', err);
      }
    }
  };
  
  // Helper to get spread type string from selected spread
  const getSpreadType = () => {
    if (!selectedSpread) return 'general';
    
    switch (selectedSpread.count) {
      case 1:
        return 'single-card';
      case 3:
        return 'past-present-future';
      case 5:
        return 'cross-spread';
      case 10:
        return 'celtic-cross';
      default:
        return 'general';
    }
  };
  
  // Reset reading
  const resetReading = () => {
    setQuestion('');
    resetCards(); // This should include clearSelectedCards
    setIsReading(false);
    clearResults();
  };
  
  // Check if ready to start reading
  const canStartReading = () => {
    return (
      question.trim() && 
      selectedSpread && 
      selectedCards.length === selectedSpread.count
    );
  };
  
  // Instructions for each spread type
  const getInstructions = () => {
    if (!selectedSpread) return [];
    
    const baseInstructions = [
      "Viết câu hỏi của bạn vào ô trên",
      "Tập trung vào câu hỏi và thở sâu"
    ];
    
    const cardInstructions = `Chọn ${selectedSpread.count} lá bài bên dưới`;
    
    return [
      ...baseInstructions,
      cardInstructions,
      "Nhấn nút 'Bắt Đầu Bói' để xem kết quả"
    ];
  };
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Hãy Thở Sâu, Xua Đi Mọi Suy Nghĩ, {title}
      </h1>
      
      {/* Question Input */}
      <QuestionInput
        question={question}
        onChange={handleQuestionChange}
        isDisabled={isReading || isAnalyzing}
        placeholder="Câu hỏi bói của bạn (Bắt Buộc)"
        showHints={true}
        showCharacterCount={true}
      />
      
      {/* Error Display */}
      {error && (
        <ErrorDisplay
          error={error}
          retryAction={error === cardsError ? shuffleDeck : null}
          type="error"
        />
      )}
      
      {!isReading && !isAnalyzing && !error && (
        <>
          {/* Spread Selector */}
          <SpreadSelector
            onSelectSpread={handleSpreadSelect}
            selectedSpread={selectedSpread}
          />
          
          {selectedSpread && (
            <>
              {/* Instructions */}
              <InstructionBox
                title="Hướng Dẫn"
                steps={getInstructions()}
                icon="🔮"
              />
              
              {/* Card Selector */}
              <CardSelector
                shuffledCards={shuffledCards}
                selectedCards={selectedCards}
                onCardSelect={handleCardSelect}
                maxCards={selectedSpread?.count || 0}
              />
              
              {/* Spread Layout Preview */}
              <SpreadLayout
                selectedCards={selectedCards}
                spreadType={selectedSpread}
              />
            </>
          )}
        </>
      )}
      
      {/* Start Button or Loading Indicator */}
      {!isReading && !isAnalyzing ? (
        <button 
          className={styles.startButton}
          onClick={startReading}
          disabled={!canStartReading()}
        >
          Bắt Đầu Bói
        </button>
      ) : isAnalyzing ? (
        <LoadingIndicator
          message="Đang phân tích bói bài của bạn..."
          type="cards"
        />
      ) : (
        <>
          {/* Reading Results */}
          <ReadingResults
            reading={readingAnalysis}
            selectedCards={selectedCards}
            onReset={resetReading}
            showControls={true}
          />
        </>
      )}
    </div>
  );
};

export default TarotReadingContainer;