import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './one-card-tarot.module.css';

// Import custom components
import QuestionInput from '../../components/TarotReading/QuestionInput/QuestionInput';
import LoadingIndicator from '../../components/TarotReading/LoadingIndicator/LoadingIndicator';
import ErrorDisplay from '../../components/TarotReading/ErrorDisplay/ErrorDisplay';
import ReadingResults from '../../components/TarotReading/ReadingResults/ReadingResults';

// Import card-related components
import CardSelector from '../../components/CardSelector/CardSelector';
import SpreadLayout from '../../components/SpreadLayout/SpreadLayout';

function OneCardTarotPage() {
  const { siteConfig } = useDocusaurusContext();
  
  // Tạo state
  const [question, setQuestion] = useState('');
  const [selectedCards, setSelectedCards] = useState([]);
  const [shuffledCards, setShuffledCards] = useState([]);
  const [isReading, setIsReading] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [readingAnalysis, setReadingAnalysis] = useState(null);
  const [error, setError] = useState(null);
  
  // Tạo spread object (cố định cho rút 1 lá)
  const spreadType = {
    name: 'Rút 1 Lá',
    count: 1,
    description: 'Trả lời nhanh cho một câu hỏi đơn giản'
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
      setError(err.message || 'Failed to load tarot cards');
    }
  }, []);

  // Xử lý thay đổi câu hỏi
  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  // Xử lý chọn lá bài
  const handleCardSelect = (card) => {
    if (selectedCards.length < spreadType.count) {
      setSelectedCards([card]);
    }
  };

  // Phân tích kết quả (mô phỏng)
  const analyzeReading = () => {
    if (!selectedCards.length || !question.trim()) return;
    
    setIsAnalyzing(true);
    
    // Giả lập phân tích bài với setTimeout
    setTimeout(() => {
      const card = selectedCards[0];
      let analysis = `# Phân tích lá bài: ${card.name}\n\n`;
      
      // Phân tích dựa trên loại lá bài
      if (card.type === 'major') {
        analysis += `## Lá bài Ẩn Chính (Major Arcana)\n\n`;
        analysis += `Lá ${card.name} là một lá bài Ẩn Chính, tượng trưng cho những năng lượng mạnh mẽ và các bài học quan trọng trong cuộc sống. `;
        
        // Thêm ý nghĩa cụ thể cho một vài lá Major Arcana
        if (card.name.includes('Fool')) {
          analysis += `Lá này tượng trưng cho sự khởi đầu mới, tinh thần phiêu lưu, và tiềm năng vô hạn. `;
        } else if (card.name.includes('Magician')) {
          analysis += `Lá này tượng trưng cho khả năng biến ý tưởng thành hiện thực, năng lực sáng tạo và sự khéo léo. `;
        } else if (card.name.includes('Priestess')) {
          analysis += `Lá này tượng trưng cho trực giác, sự thông thái bên trong và những bí ẩn chưa được tiết lộ. `;
        }
      } else {
        analysis += `## Lá bài Ẩn Phụ (Minor Arcana)\n\n`;
        analysis += `Lá ${card.name} thuộc bộ Ẩn Phụ, `;
        
        // Phân tích dựa trên suit
        if (card.suit === 'cups') {
          analysis += `chất Cups liên quan đến cảm xúc, mối quan hệ, trực giác và sự sáng tạo. `;
        } else if (card.suit === 'wands') {
          analysis += `chất Wands liên quan đến đam mê, năng lượng, hành động và tinh thần. `;
        } else if (card.suit === 'swords') {
          analysis += `chất Swords liên quan đến suy nghĩ, trí tuệ, thách thức và giao tiếp. `;
        } else if (card.suit === 'pentacles') {
          analysis += `chất Pentacles liên quan đến vật chất, sự nghiệp, tài chính và sức khỏe. `;
        }
      }
      
      // Phân tích dựa trên hướng lá bài
      if (card.isReversed) {
        analysis += `\n\n## Ý nghĩa khi lá bài ngược\n\n`;
        analysis += `Khi lá bài xuất hiện ở vị trí ngược, nó thường biểu thị những khía cạnh tiêu cực hơn hoặc năng lượng bị chặn. Điều này có thể chỉ ra rằng bạn đang gặp khó khăn trong việc thể hiện trọn vẹn tiềm năng của mình, hoặc đang đối mặt với những thử thách nội tâm liên quan đến bản chất của lá bài này.`;
      } else {
        analysis += `\n\n## Ý nghĩa khi lá bài thuận\n\n`;
        analysis += `Khi lá bài xuất hiện ở vị trí thuận, nó thể hiện năng lượng tích cực và dòng chảy tự nhiên. Điều này gợi ý rằng bạn đang có khả năng tiếp cận và khai thác đầy đủ tiềm năng liên quan đến bản chất của lá bài này.`;
      }
      
      // Liên hệ với câu hỏi
      analysis += `\n\n## Liên hệ với câu hỏi của bạn\n\n`;
      analysis += `Liên quan đến câu hỏi: "${question}", lá ${card.name} gợi ý rằng bạn nên... `;
      
      // Cung cấp lời khuyên
      analysis += `\n\n## Lời khuyên\n\n`;
      analysis += `- Hãy dành thời gian suy ngẫm về ý nghĩa của lá bài này trong cuộc sống của bạn\n`;
      analysis += `- Nhận ra những mẫu hình và năng lượng đang ảnh hưởng đến tình huống của bạn\n`;
      analysis += `- Sử dụng trực giác của bạn để hiểu sâu hơn về thông điệp của lá bài\n`;
      
      setReadingAnalysis({ text: analysis });
      setIsReading(true);
      setIsAnalyzing(false);
    }, 2000);
  };

  // Bắt đầu đọc bài
  const startReading = () => {
    analyzeReading();
  };

  // Reset lại trạng thái
  const resetReading = () => {
    setQuestion('');
    setSelectedCards([]);
    setIsReading(false);
    setReadingAnalysis(null);
    
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
      title="Bói Bài Tarot Một Lá" 
      description="Trải Bài Tarot Một Lá - Trả lời nhanh cho câu hỏi đơn giản"
    >
      <div className={styles.container}>
        <h1 className={styles.title}>Bói Bài Tarot Một Lá</h1>
        <p className={styles.subtitle}>
          Trả lời nhanh cho một câu hỏi đơn giản. Lá bài đơn lẻ sẽ cung cấp thông tin rõ ràng và trực tiếp.
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
          />
        )}
        
        {!isReading && !isAnalyzing && !error && (
          <>
            <div className={styles.instructionBox}>
              <h3>Hướng Dẫn</h3>
              <ol>
                <li>Viết câu hỏi của bạn vào ô trên</li>
                <li>Tập trung vào câu hỏi và thở sâu</li>
                <li>Chọn một lá bài bên dưới</li>
                <li>Nhấn "Đọc Bài" để xem kết quả</li>
              </ol>
            </div>
          
            <div className={styles.cardSelectionArea}>
              <h3>Chọn Một Lá Bài</h3>
              <CardSelector
                shuffledCards={shuffledCards}
                selectedCards={selectedCards}
                onCardSelect={handleCardSelect}
                maxCards={1}
                isBack={true}
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
        ) : (
          <ReadingResults
            reading={readingAnalysis}
            selectedCards={selectedCards}
            onReset={resetReading}
            showControls={true}
          />
        )}
      </div>
    </Layout>
  );
}

export default OneCardTarotPage;