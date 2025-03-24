// src/pages/reading.js
import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './reading.module.css';

// Import custom components
import QuestionInput from '../components/TarotReading/QuestionInput/QuestionInput';
import LoadingIndicator from '../components/TarotReading/LoadingIndicator/LoadingIndicator';
import ErrorDisplay from '../components/TarotReading/ErrorDisplay/ErrorDisplay';
import InstructionBox from '../components/TarotReading/InstructionBox/InstructionBox';
import ReadingResults from '../components/TarotReading/ReadingResults/ReadingResults';

// Import existing components
import CardSelector from '../components/CardSelector/CardSelector';
import SpreadSelector from '../components/SpreadSelector/SpreadSelector';
import SpreadLayout from '../components/SpreadLayout/SpreadLayout';

function ReadingPage() {
  // Get context
  const { siteConfig } = useDocusaurusContext();
  
  // State for the reading flow
  const [question, setQuestion] = useState('');
  const [isReading, setIsReading] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [selectedSpread, setSelectedSpread] = useState(null);
  const [shuffledCards, setShuffledCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]); // Thêm state selectedCards
  const [readingAnalysis, setReadingAnalysis] = useState(null);
  const [error, setError] = useState(null);
  
  // Tarot card generation
  const generateTarotCards = () => {
    // Major Arcana
    const majorArcana = [
      { name: 'The Fool', code: 'm00' },
      { name: 'The Magician', code: 'm01' },
      { name: 'The High Priestess', code: 'm02' },
      { name: 'The Empress', code: 'm03' },
      { name: 'The Emperor', code: 'm04' },
      { name: 'The Hierophant', code: 'm05' },
      { name: 'The Lovers', code: 'm06' },
      { name: 'The Chariot', code: 'm07' },
      { name: 'Strength', code: 'm08' },
      { name: 'The Hermit', code: 'm09' },
      { name: 'Wheel of Fortune', code: 'm10' },
      { name: 'Justice', code: 'm11' },
      { name: 'The Hanged Man', code: 'm12' },
      { name: 'Death', code: 'm13' },
      { name: 'Temperance', code: 'm14' },
      { name: 'The Devil', code: 'm15' },
      { name: 'The Tower', code: 'm16' },
      { name: 'The Star', code: 'm17' },
      { name: 'The Moon', code: 'm18' },
      { name: 'The Sun', code: 'm19' },
      { name: 'Judgement', code: 'm20' },
      { name: 'The World', code: 'm21' }
    ];

    // Minor Arcana suits
    const suits = ['Cups', 'Wands', 'Swords', 'Pentacles'];
    const minorArcana = suits.flatMap(suit => 
      ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Page', 'Knight', 'Queen', 'King']
        .map((value, index) => ({
          name: `${value} of ${suit}`,
          code: `${suit.charAt(0).toLowerCase()}${String(index + 1).padStart(2, '0')}`
        }))
    );

    const result = [...majorArcana, ...minorArcana];
    console.log(result)
    return [...majorArcana, ...minorArcana];
  };
  
  // Initialize cards on mount
  useEffect(() => {
    const allCards = generateTarotCards();
    const shuffled = allCards
      .map(card => ({
        ...card,
        isReversed: Math.random() > 0.5
      }))
      .sort(() => Math.random() - 0.5);
    
    setShuffledCards(shuffled);
  }, []);
  
  // Handle question input
  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };
  
  // Handle spread selection
  const handleSpreadSelect = (spread) => {
    setSelectedSpread(spread);
    // Reset selected cards when changing spread
    setSelectedCards([]);
  };
  
  // Handle card selection
  const handleCardSelect = (card) => {
    if (!selectedSpread) return;
    
    // Check if already at max cards for this spread
    if (selectedCards.length < selectedSpread.count) {
      setSelectedCards(prev => [...prev, card]);
    }
  };
  
  // Mock function to analyze cards
  const analyzeCards = () => {
    setIsAnalyzing(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      const analysis = {
        text: generateMockAnalysis()
      };
      
      setReadingAnalysis(analysis);
      setIsReading(true);
      setIsAnalyzing(false);
    }, 2000);
  };
  
  // Generate mock analysis
  const generateMockAnalysis = () => {
    return `# Phân tích trải bài Tarot\n\n` +
           `## Câu hỏi của bạn\n"${question}"\n\n` +
           `## Các lá bài được chọn\n` +
           selectedCards.map((card, index) => 
             `${index + 1}. ${card.name} (${card.isReversed ? 'Ngược' : 'Thuận'})`
           ).join('\n') +
           `\n\n## Phân tích chi tiết\nĐây là phân tích mô phỏng...`;
  };
  
  // Start reading
  const startReading = () => {
    if (canStartReading()) {
      analyzeCards();
    }
  };
  
  // Reset reading
  const resetReading = () => {
    setQuestion('');
    setSelectedCards([]);
    setIsReading(false);
    setReadingAnalysis(null);
    
    // Re-shuffle cards
    const allCards = generateTarotCards();
    const reshuffled = allCards
      .map(card => ({
        ...card,
        isReversed: Math.random() > 0.5
      }))
      .sort(() => Math.random() - 0.5);
    
    setShuffledCards(reshuffled);
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
    <Layout 
      title="Bói Bài Tarot" 
      description="Trải Bài Tarot Trực Tuyến"
    >
      <div className={styles.container}>
        <h1 className={styles.title}>
          Hãy Thở Sâu, Xua Đi Mọi Suy Nghĩ, Bắt Đầu Cuộc Hành Trình Tarot
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
    </Layout>
  );
}

export default ReadingPage;