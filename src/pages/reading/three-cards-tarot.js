import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './three-cards-tarot.module.css';

// Import custom components
import QuestionInput from '../../components/TarotReading/QuestionInput/QuestionInput';
import LoadingIndicator from '../../components/TarotReading/LoadingIndicator/LoadingIndicator';
import ErrorDisplay from '../../components/TarotReading/ErrorDisplay/ErrorDisplay';
import ReadingResults from '../../components/TarotReading/ReadingResults/ReadingResults';

// Import card-related components
import SpreadLayout from '../../components/SpreadLayout/SpreadLayout';

// Import API functions
import { getMockAnalysis } from '../../api/tarot/mockAnalysis';
import { analyzeTarotReading } from '../../api/tarot/geminiClient';
import { useSound } from '../../hooks/useSound';

function ThreeCardsTarotPage() {
  const { siteConfig } = useDocusaurusContext();
  
  // Tạo state
  const [question, setQuestion] = useState('');
  const [randomCards, setRandomCards] = useState([]);
  const [isReading, setIsReading] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [mockAnalysis, setMockAnalysis] = useState(null);
  const [aiAnalysis, setAIAnalysis] = useState(null);
  const [error, setError] = useState(null);
  const { playSound } = useSound();
  
    // Hàm xử lý gửi email
  const handleSubmitEmail = async (email, cards) => {
    try {
      // Có thể thêm logic riêng cho trang một lá bài nếu cần
      console.log(`Sending email to ${email} with ${cards.length} cards`);
      
      // Nếu bạn muốn thực hiện các tác vụ bổ sung trước hoặc sau khi gửi webhook
      // Tuy nhiên, phần xử lý chính để gửi đến webhook đã được thực hiện trong component ReadingResults
      
      return true; // Trả về true để chỉ ra rằng xử lý thành công
    } catch (error) {
      console.error('Email submission failed:', error);
      throw error; // Ném lại lỗi để component ReadingResults có thể xử lý
    }
  };

  // Tạo spread object cố định cho rút 3 lá - Quá khứ, Hiện tại, Tương lai
  const spreadType = {
    name: 'Bói Bài Tarot 3 Lá',
    count: 3,
    description: 'past-present-future'
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

  // Random các lá bài khi component mount
  useEffect(() => {
    randomizeCards();
  }, []);

  // Hàm random lá bài
  const randomizeCards = () => {
    try {
      const allCards = generateTarotCards();
      const shuffled = allCards
        .map(card => ({
          ...card,
          isReversed: Math.random() > 0.5
        }))
        .sort(() => Math.random() - 0.5);
      
      // Chọn số lượng lá bài theo spreadType.count
      const selected = shuffled.slice(0, spreadType.count);
      setRandomCards(selected);
    } catch (err) {
      setError(err.message || 'Failed to generate random cards');
    }
  };

  // Xử lý thay đổi câu hỏi
  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  // Phân tích bài
  const analyzeReading = async () => {
    if (!randomCards.length || !question.trim()) return;
    
    setIsAnalyzing(true);
    setError(null);
    
    try {
      // Play sound khi bắt đầu đọc bài
      try {
        playSound('/sounds/card-sounds-35956.mp3');
      } catch (error) {
        console.error('Error playing sound:', error);
      }

      // Sử dụng song song cả 2 phân tích: mock và AI
      const spreadTypeValue = 'past-present-future';
      
      // Gọi mock analysis trước để đảm bảo luôn có một phân tích
      const mockResult = await getMockAnalysis(question, randomCards, spreadTypeValue);
      console.log('Mock Analysis result:', mockResult);
      setMockAnalysis(mockResult);
      
      // Thử gọi AI analysis (có thể thất bại)
      try {
        const aiResult = await analyzeTarotReading(question, randomCards, spreadTypeValue);
        console.log('AI Analysis result:', aiResult);
        setAIAnalysis(aiResult);
      } catch (aiError) {
        console.warn('AI analysis failed, using only mock analysis:', aiError);
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
    setIsReading(false);
    setMockAnalysis(null);
    setAIAnalysis(null);
    setError(null);
    randomizeCards();
  };

  // Kiểm tra xem có thể bắt đầu đọc bài không
  const canStartReading = () => {
    return question.trim() && randomCards.length === spreadType.count;
  };

  return (
    <Layout 
      title="Bói Bài Tarot 3 Lá" 
      description="Trải Bài Tarot 3 Lá"
    >
      <div className={styles.container}>
        <h1 className={styles.title}>Trải bài Tarot 3 lá</h1>
        <p className={styles.subtitle}>
          Trải bài Tarot 3 lá. Mỗi lá bài đại diện cho một giai đoạn thời gian, 
          giúp bạn hiểu rõ tình huống của mình dưới dòng chảy thời gian.
        </p>
        
        {!isReading && !isAnalyzing ? (
          <div className={styles.readingFlow}>
            {/* Form nhập câu hỏi với mũi tên */}
            <div className={styles.questionSection}>
              <QuestionInput
                question={question}
                onChange={handleQuestionChange}
                isDisabled={isAnalyzing}
                placeholder="Nhập câu hỏi của bạn ở đây..."
                showCharacterCount={true}
                onSubmit={startReading}
              />
            </div>
            {/* Hướng dẫn */}
            <div className={styles.instructionBox}>
              <h3>Hướng Dẫn</h3>
              <ol>
                <li>Viết câu hỏi của bạn vào ô trên</li>
                <li>Hít thở sâu và tập trung vào câu hỏi của bạn</li>
                <li>Nhấn mũi tên hoặc phím Enter để xem kết quả</li>
                <li>Ba lá bài sẽ đại diện cho Quá khứ, Hiện tại và Tương lai</li>
              </ol>
            </div>
                        
            {/* Hiển thị lá bài úp */}
            <div className={styles.cardDisplayArea}>
              <SpreadLayout
                selectedCards={randomCards}
                spreadType={spreadType}
                isBack={true} // Lá bài luôn úp
              />
            </div>
            

          </div>
        ) : isAnalyzing ? (
          <div className={styles.loadingContainer}>
            <LoadingIndicator
              message="Đang phân tích bài Tarot của bạn..."
              type="cards"
            />
          </div>
        ) : mockAnalysis ? (
          <div className={styles.resultsContainer}>
            <ReadingResults
              reading={mockAnalysis}
              aiAnalysis={aiAnalysis}
              selectedCards={randomCards}
              onReset={resetReading}
              showControls={true}
              timestamp={new Date()}
              question={question}
              onSubmitEmail={handleSubmitEmail}
            />
          </div>
        ) : (
          <ErrorDisplay
            message="Không thể hiển thị kết quả bói bài. Vui lòng thử lại."
            type="error"
            retryAction={resetReading}
          />
        )}
        
        {/* Error Display */}
        {error && (
          <ErrorDisplay
            error={error}
            type="error"
            retryAction={() => setError(null)}
          />
        )}
      </div>
    </Layout>
  );
}

export default ThreeCardsTarotPage;