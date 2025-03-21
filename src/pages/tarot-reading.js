import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import CardSelector from '../components/CardSelector';
import TarotResult from '../components/TarotResult';
import styles from './tarot-reading.module.css';
import ReactMarkdown from 'react-markdown';

function TarotReading() {
  // Tarot card generation with robust error handling
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

  // State management with default values
  const [question, setQuestion] = useState('');
  const [selectedCards, setSelectedCards] = useState([]);
  const [isReading, setIsReading] = useState(false);
  const [shuffledCards, setShuffledCards] = useState([]);
  const [apiError, setApiError] = useState(null);
  const [readingAnalysis, setReadingAnalysis] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Gemini API configuration
  const GEMINI_API_KEY = 'AIzaSyDo_UPahCaXZIdtGGVDMJy6QrPhLh2gE44';
  const GEMINI_API_ENDPOINT = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

  // Shuffle and set cards on component mount
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

  // Analyze reading using Gemini API
  const analyzeReading = async (question, cards) => {
    if (!GEMINI_API_KEY) {
      setApiError({ message: 'Gemini API key is not configured' });
      return null;
    }

    try {
      setApiError(null);

      // Construct prompt with card positions (upright/reversed)
      const cardsWithPositions = cards.map(card => 
        `${card.name}${card.isReversed ? ' (Ngược)' : ' (Thuận)'}`
      ).join(', ');
      
      const prompt = `Bạn là 1 Tarot Reader chuyên nghiệp. Người dùng sẽ nhập câu hỏi và rút bài. Phương pháp trải bài sẽ là phương pháp 3 lá. Giải nghĩa bói bài tarot bằng tiếng Việt. 
        Câu hỏi là: ${question}. 
        Các lá bài được chọn lần lượt là: ${cardsWithPositions}. 
        Cung cấp một giải thích chi tiết về ý nghĩa từng lá bài và mối quan hệ giữa chúng, 
        có tính đến vị trí thuận/ngược của từng lá. 
        Kết luận với lời khuyên và hướng dẫn cụ thể cho người đặt câu hỏi.`;
      
      const response = await fetch(
        `${GEMINI_API_ENDPOINT}?key=${GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [{
              parts: [{ text: prompt }]
            }]
          })
        }
      );

      if (!response.ok) {
        const errorBody = await response.text();
        throw new Error(`API responded with status ${response.status}: ${errorBody}`);
      }

      const data = await response.json();
      const analysisText = data.candidates[0]?.content?.parts[0]?.text || 'Không có kết quả bói bài';

      const analysisResult = {
        text: analysisText,
        sentiment: {
          score: analysisText.includes(['tích cực', 'hy vọng', 'lạc quan']) ? 1 : 
                analysisText.includes(['tiêu cực', 'thách thức', 'khó khăn']) ? -1 : 0,
          magnitude: analysisText.length
        }
      };

      setReadingAnalysis(analysisResult);
      return analysisResult;
    } catch (error) {
      console.error('Gemini API Error:', error);
      
      setApiError({
        message: error.message,
        status: 'API Request Error'
      });

      return null;
    }
  };

  // Handle question input
  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  // Select card logic with preserving the isReversed state
  const selectCard = (card) => {
    // Ensure card and shuffledCards exist
    if (!card || !shuffledCards || shuffledCards.length === 0) return;

    const isAlreadySelected = selectedCards.some(
      selectedCard => selectedCard.code === card.code
    );

    if (isAlreadySelected) {
      // Deselect card if already selected
      setSelectedCards(
        selectedCards.filter(selectedCard => selectedCard.code !== card.code)
      );
    } else if (selectedCards.length < 3) {
      // Select card while preserving the isReversed value from shuffled cards
      const selectedCard = shuffledCards.find(c => c.code === card.code);
      if (selectedCard) {
        setSelectedCards([...selectedCards, selectedCard]);
      }
    }
  };

  // Start reading method with improved loading UX
  const startReading = async () => {
    if (question.trim() && selectedCards.length === 3) {
      // Set loading state immediately
      setIsAnalyzing(true);
      
      try {
        // Skip question analysis and go directly to reading analysis
        await analyzeReading(question, selectedCards);
        
        // Set reading state after analysis is complete
        setIsReading(true);
      } catch (error) {
        console.error('Reading analysis error:', error);
        setApiError({ message: 'Lỗi trong quá trình phân tích' });
      } finally {
        setIsAnalyzing(false);
      }
    }
  };

  // Reset method
  const resetReading = () => {
    setQuestion('');
    setSelectedCards([]);
    setIsReading(false);
    setReadingAnalysis(null);
    setApiError(null);
    
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

  // Render analysis results with improved styling
  const renderAnalysisResults = () => {
    // Loading state
    if (isAnalyzing) {
      return (
        <div className={styles.loadingContainer}>
          <div className={styles.spinner}></div>
          <p>Đang phân tích bói bài của bạn...</p>
        </div>
      );
    }

    // API Error
    if (apiError) {
      return (
        <div className={styles.apiErrorContainer}>
          <h3>Lỗi</h3>
          <p>{apiError.message}</p>
        </div>
      );
    }

    return (
      <div className={styles.analysisResults}>
        {readingAnalysis && (
          <div className={styles.analysisSection}>
            <h3>Kết Quả Bói Bài</h3>
            <div className={styles.markdownContainer}>
              <ReactMarkdown>{readingAnalysis.text}</ReactMarkdown>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <Layout title="Bói Bài Tarot" description="Trải Bài Tarot Trực Tuyến">
      <div className={styles.container}>
        <h1 className={styles.title}>Hãy Thở Sâu, Xua Đi Mọi Suy Nghĩ, Bắt Đầu Cuộc Hành Trình Tarot</h1>
        
        <textarea 
          className={styles.questionInput}
          placeholder="Câu hỏi bói của bạn (Bắt Buộc)"
          value={question}
          onChange={handleQuestionChange}
          disabled={isReading || isAnalyzing}
        />
        
        {!isReading && !isAnalyzing ? (
          <>
            <h2>Chọn 3 Lá Bài (Bắt Buộc)</h2>
            <CardSelector 
              shuffledCards={shuffledCards || []}
              selectedCards={selectedCards}
              onCardSelect={selectCard}
            />
            
            <button 
              className={styles.startButton}
              onClick={startReading}
              disabled={!question.trim() || selectedCards.length !== 3}
            >
              Bắt Đầu Bói
            </button>
          </>
        ) : isAnalyzing ? (
          <div className={styles.loadingContainer}>
            <div className={styles.spinner}></div>
            <p>Đang phân tích bói bài của bạn...</p>
          </div>
        ) : (
          <>
            <TarotResult 
              selectedCards={selectedCards}
              onReset={resetReading}
            />
            {renderAnalysisResults()}
          </>
        )}
      </div>
    </Layout>
  );
}

export default TarotReading;