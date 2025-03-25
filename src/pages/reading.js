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

// Import API functions trực tiếp từ các module đã có
import { getMockAnalysis } from '../api/tarot/mockAnalysis';
import { analyzeTarotReading } from '../api/tarot/geminiClient';
import { useSound } from '../hooks/useSound';

function ReadingPage() {
  // Get context
  const { siteConfig } = useDocusaurusContext();
  
  // State for the reading flow
  const [question, setQuestion] = useState('');
  const [isReading, setIsReading] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [selectedSpread, setSelectedSpread] = useState(null);
  const [shuffledCards, setShuffledCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [mockAnalysis, setMockAnalysis] = useState(null);
  const [aiAnalysis, setAIAnalysis] = useState(null);
  const [error, setError] = useState(null);
  const { playSound } = useSound();
  
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

    return [...majorArcana, ...minorArcana];
  };
  
  // Initialize cards on mount
  useEffect(() => {
    try {
      const allCards = generateTarotCards();
      const shuffled = allCards
        .map(card => ({
          ...card,
          isReversed: Math.random() > 0.5
        }))
        .sort(() => Math.random() - 0.5);
      
      setShuffledCards(shuffled);
    } catch (err) {
      setError('Error loading Tarot cards: ' + (err.message || 'Unknown error'));
    }
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
      
      // Play card selection sound
      try {
        playSound('/sounds/card-sounds-35956.mp3');
      } catch (error) {
        console.error('Error playing sound:', error);
      }
    }
  };
  
  // Get spread type string from selected spread object
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
  
  // Analyze the reading using both mock and AI analysis
  const analyzeReading = async () => {
    if (!canStartReading()) return;
    
    setIsAnalyzing(true);
    setError(null);
    
    try {
      // Sử dụng song song cả 2 phân tích: mock và AI
      const spreadType = getSpreadType();
      
      // Gọi mock analysis trước để đảm bảo luôn có một phân tích
      const mockResult = await getMockAnalysis(question, selectedCards, spreadType);
      console.log('Mock Analysis result:', mockResult);
      setMockAnalysis(mockResult);
      
      // Thử gọi AI analysis (có thể thất bại)
      try {
        const aiResult = await analyzeTarotReading(question, selectedCards, spreadType);
        console.log('AI Analysis result:', aiResult);
        setAIAnalysis(aiResult);
      } catch (aiError) {
        console.warn('AI analysis failed, using only mock analysis:', aiError);
        // Không set error state để tránh ảnh hưởng đến toàn bộ quy trình
      }
      
      // Đánh dấu là đã hoàn thành đọc bài
      setIsReading(true);
    } catch (err) {
      console.error('Error analyzing reading:', err);
      setError(err.message || 'An error occurred while analyzing your reading');
    } finally {
      setIsAnalyzing(false);
    }
  };
  
  // Start reading
  const startReading = async () => {
    if (canStartReading()) {
      try {
        await analyzeReading();
      } catch (error) {
        console.error('Failed to start reading:', error);
        setError('Không thể bắt đầu phân tích bài Tarot. Vui lòng thử lại.');
      }
    }
  };
  
  // Reset reading
  const resetReading = () => {
    setQuestion('');
    setSelectedCards([]);
    setIsReading(false);
    setMockAnalysis(null);
    setAIAnalysis(null);
    setError(null);
    
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
            retryAction={() => setError(null)}
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
        ) : mockAnalysis ? (
          <>
            {/* Reading Results with both standard and AI analysis */}
            <ReadingResults
              reading={mockAnalysis}
              aiAnalysis={aiAnalysis}
              selectedCards={selectedCards}
              onReset={resetReading}
              showControls={true}
              timestamp={new Date()}
            />
          </>
        ) : (
          <ErrorDisplay
            message="Không thể hiển thị kết quả bói bài. Vui lòng thử lại."
            type="error"
            retryAction={resetReading}
          />
        )}
      </div>
    </Layout>
  );
}

export default ReadingPage;