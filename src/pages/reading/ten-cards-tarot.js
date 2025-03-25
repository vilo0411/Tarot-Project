import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './three-cards-tarot.module.css';

// Import custom components
import QuestionInput from '../../components/TarotReading/QuestionInput/QuestionInput';
import LoadingIndicator from '../../components/TarotReading/LoadingIndicator/LoadingIndicator';
import ErrorDisplay from '../../components/TarotReading/ErrorDisplay/ErrorDisplay';
import InstructionBox from '../../components/TarotReading/InstructionBox/InstructionBox';
import ReadingResults from '../../components/TarotReading/ReadingResults/ReadingResults';

// Import card-related components
import CardSelector from '../../components/CardSelector/CardSelector';
import SpreadLayout from '../../components/SpreadLayout/SpreadLayout';

// Import API functions
import { getMockAnalysis } from '../../api/tarot/mockAnalysis';
import { analyzeTarotReading } from '../../api/tarot/geminiClient';
import { useSound } from '../../hooks/useSound';

function ThreeCardsTarotPage() {
  const { siteConfig } = useDocusaurusContext();
  
  // Tạo state
  const [question, setQuestion] = useState('');
  const [selectedCards, setSelectedCards] = useState([]);
  const [shuffledCards, setShuffledCards] = useState([]);
  const [isReading, setIsReading] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [mockAnalysis, setMockAnalysis] = useState(null);
  const [aiAnalysis, setAIAnalysis] = useState(null);
  const [error, setError] = useState(null);
  const { playSound } = useSound();
  
  // Tạo spread object cố định cho rút 3 lá - Quá khứ, Hiện tại, Tương lai
  const spreadType = {
    name: 'Rút 10 Lá',
    count: 10,
    description: 'cross-spread'
  };

  // Tạo bộ bài Tarot
  const generateTarotCards = () => {
    // Major Arcana
    const majorArcana = Array.from({ length: 22 }, (_, i) => ({
      id: `major-${i}`,
      name: getMajorArcanaName(i),
      code: `m${String(i).padStart(2, '0')}`,
      type: 'major',
      suit: null,
      number: i,
    }));
    
    // Minor Arcana
    const suits = ['cups', 'wands', 'swords', 'pentacles'];
    const minorArcana = suits.flatMap(suit => 
      Array.from({ length: 14 }, (_, i) => ({
        id: `${suit}-${i + 1}`,
        name: getMinorArcanaName(suit, i + 1),
        code: `${suit.charAt(0)}${String(i + 1).padStart(2, '0')}`,
        type: 'minor',
        suit,
        number: i + 1,
      }))
    );
    
    return [...majorArcana, ...minorArcana];
  };

  // Lấy tên lá Major Arcana
  const getMajorArcanaName = (number) => {
    const names = [
      'The Fool', 'The Magician', 'The High Priestess', 'The Empress', 
      'The Emperor', 'The Hierophant', 'The Lovers', 'The Chariot',
      'Strength', 'The Hermit', 'Wheel of Fortune', 'Justice',
      'The Hanged Man', 'Death', 'Temperance', 'The Devil',
      'The Tower', 'The Star', 'The Moon', 'The Sun',
      'Judgement', 'The World'
    ];
    return names[number] || `Unknown Major Arcana (${number})`;
  };

  // Lấy tên lá Minor Arcana
  const getMinorArcanaName = (suit, number) => {
    if (number < 1 || number > 14) return `Unknown ${suit} (${number})`;
    
    // Court cards
    if (number === 11) return `Page of ${capitalize(suit)}`;
    if (number === 12) return `Knight of ${capitalize(suit)}`;
    if (number === 13) return `Queen of ${capitalize(suit)}`;
    if (number === 14) return `King of ${capitalize(suit)}`;
    
    // Ace
    if (number === 1) return `Ace of ${capitalize(suit)}`;
    
    // Number cards
    return `${number} of ${capitalize(suit)}`;
  };

  // Viết hoa chữ cái đầu
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  // Xáo bài khi component mount
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
  
  // Xử lý thay đổi câu hỏi
  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  // Xử lý chọn lá bài
  const handleCardSelect = (card) => {
    if (selectedCards.length < spreadType.count) {
      setSelectedCards(prev => [...prev, card]);
      
      // Play card selection sound
      try {
        playSound('/sounds/card-sounds-35956.mp3');
      } catch (error) {
        console.error('Error playing sound:', error);
      }
    }
  };

  // Phân tích bài
  const analyzeReading = async () => {
    if (!canStartReading()) return;
    
    setIsAnalyzing(true);
    setError(null);
    
    try {
      // Sử dụng song song cả 2 phân tích: mock và AI
      const spreadTypeValue = 'past-present-future';
      
      // Gọi mock analysis trước để đảm bảo luôn có một phân tích
      const mockResult = await getMockAnalysis(question, selectedCards, spreadTypeValue);
      console.log('Mock Analysis result:', mockResult);
      setMockAnalysis(mockResult);
      
      // Thử gọi AI analysis (có thể thất bại)
      try {
        const aiResult = await analyzeTarotReading(question, selectedCards, spreadTypeValue);
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

  // Bắt đầu đọc bài
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

  // Reset lại trạng thái
  const resetReading = () => {
    setQuestion('');
    setSelectedCards([]);
    setIsReading(false);
    setMockAnalysis(null);
    setAIAnalysis(null);
    setError(null);
    
    // Xáo lại bài
    const allCards = generateTarotCards();
    const reshuffled = allCards
      .map(card => ({
        ...card,
        isReversed: Math.random() > 0.5
      }))
      .sort(() => Math.random() - 0.5);
    
    setShuffledCards(reshuffled);
  };

  // Kiểm tra xem có thể bắt đầu đọc bài không
  const canStartReading = () => {
    return question.trim() && selectedCards.length === spreadType.count;
  };

  return (
    <Layout 
      title="Bói Bài Tarot 10 Lá" 
      description="Trải Bài Tarot 10 Lá - Celtic Cross"
    >
      <div className={styles.container}>
        <h1 className={styles.title}>Bói Bài Tarot 10 Lá</h1>
        <p className={styles.subtitle}>
          TRả lời các câu hỏi cụ thể về tình yêu, sự nghiệp, tài chính và các khía cạnh khác của cuộc sống.
        </p>
        
        {/* Question Input */}
        <QuestionInput
          question={question}
          onChange={handleQuestionChange}
          isDisabled={isReading || isAnalyzing}
          placeholder="Nhập câu hỏi của bạn ở đây... (Bắt Buộc)"
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
            <div className={styles.instructionBox}>
              <h3>Hướng Dẫn</h3>
              <ol>
                <li>Viết câu hỏi của bạn vào ô trên</li>
                <li>Tập trung vào câu hỏi và thở sâu</li>
                <li>Chọn ba lá bài bên dưới</li>
                <li>Nhấn "Đọc Bài" để xem kết quả</li>
              </ol>
            </div>
          
            <div className={styles.cardSelectionArea}>
              <h3>Chọn 10 Lá Bài</h3>
              <CardSelector
                shuffledCards={shuffledCards}
                selectedCards={selectedCards}
                onCardSelect={handleCardSelect}
                maxCards={10}
              />
            </div>
            
            {selectedCards.length > 0 && (
              <div className={styles.previewArea}>
                <h3>Lá Bài Đã Chọn</h3>
                <SpreadLayout
                  selectedCards={selectedCards}
                  spreadType={spreadType}
                />
              </div>
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
            Đọc Bài
          </button>
        ) : isAnalyzing ? (
          <LoadingIndicator
            message="Đang phân tích bói bài của bạn..."
            type="cards"
          />
        ) : mockAnalysis ? (
          <ReadingResults
            reading={mockAnalysis}
            aiAnalysis={aiAnalysis}
            selectedCards={selectedCards}
            onReset={resetReading}
            showControls={true}
            timestamp={new Date()}
          />
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

export default ThreeCardsTarotPage;