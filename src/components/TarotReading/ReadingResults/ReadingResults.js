// src/components/TarotReading/ReadingResults/ReadingResults.js
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useHistory } from '@docusaurus/router';
import SpreadLayout from '../../SpreadLayout/SpreadLayout';
import styles from './ReadingResults.module.css';

function ReadingResults({
  reading,
  aiAnalysis,
  selectedCards,
  onReset,
  question,
  showControls = true,
  timestamp = new Date(),
  onSubmitEmail,
}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const history = useHistory();
  
  // Format timestamp
  const formattedDate = new Intl.DateTimeFormat('vi-VN', {
    dateStyle: 'full',
    timeStyle: 'medium'
  }).format(timestamp);
  
  // Email validation function
  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  // Handle name input change
  const handleNameChange = (e) => {
    const inputName = e.target.value;
    setName(inputName);
    setIsNameValid(inputName.trim().length > 0);
  };

  // Handle email input change
  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setIsEmailValid(validateEmail(inputEmail));
  };

  // Handle email submission
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    
    if (!isEmailValid) {
      alert('Vui lòng nhập địa chỉ email hợp lệ.');
      return;
    }
    
    if (!isNameValid) {
      alert('Vui lòng nhập họ và tên của bạn.');
      return;
    }

    try {
      setIsSubmitting(true);
      
      // Chuẩn bị dữ liệu để gửi đến webhook
      const formData = {
        name: name,
        email: email,
        question: question || "Không có câu hỏi",
        selectedCards: selectedCards.map(card => ({
          name: card.name,
          isReversed: card.isReversed,
          code: card.code
        })),
        readingType: selectedCards.length === 1 ? "Một lá" : 
                    selectedCards.length === 3 ? "Ba lá" :
                    selectedCards.length === 5 ? "Năm lá" : 
                    selectedCards.length === 10 ? "Mười lá" : "Khác",
        timestamp: new Date().toISOString()
      };
      
      // Gửi dữ liệu đến webhook của n8n
      const webhookResponse = await fetch('https://n8n.tarotguideonline.com/webhook-test/tarot-reading', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      if (!webhookResponse.ok) {
        throw new Error(`Webhook request failed with status ${webhookResponse.status}`);
      }
      
      // Gọi hàm onSubmitEmail từ props nếu có
      if (onSubmitEmail) {
        await onSubmitEmail(email, selectedCards, name);
      }
      
      // Show success message
      alert('Kết quả phân tích chi tiết sẽ được gửi đến email của bạn.');
      
      // Redirect về trang đọc bài
      history.push('/reading');
    } catch (error) {
      console.error('Submission error:', error);
      alert('Có lỗi xảy ra. Vui lòng thử lại.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get AI analysis summary content or fallback to mock analysis
  const getSummaryContent = () => {
    // If there's AI analysis available, use it for the summary
    if (aiAnalysis && typeof aiAnalysis === 'object' && aiAnalysis.text) {
      return aiAnalysis.text;
    }
    
    // Otherwise extract a summary from the mock analysis
    if (reading && reading.text) {
      // Extract the conclusion section which is usually after "## Kết luận"
      const conclusionMatch = reading.text.match(/## Kết luận\s*\n\n([\s\S]*?)(\n\n|$)/);
      if (conclusionMatch && conclusionMatch[1]) {
        return conclusionMatch[1];
      }
      
      // If no conclusion section, return first 250 characters as summary
      return reading.text.substring(0, 250) + '...';
    }
    
    return 'Không có thông tin tóm tắt. Vui lòng thử lại.';
  };

  // Get spread type based on number of cards
  const getSpreadType = () => {
    if (!selectedCards || selectedCards.length === 0) {
      return null;
    }
    
    switch (selectedCards.length) {
      case 1:
        return { name: 'Rút 1 Lá', count: 1 };
      case 3:
        return { name: 'Rút 3 Lá', count: 3 };
      case 5:
        return { name: 'Rút 5 Lá', count: 5 };
      case 10:
        return { name: 'Rút 10 Lá', count: 10 };
      default:
        return { name: `Rút ${selectedCards.length} Lá`, count: selectedCards.length };
    }
  };

  return (
    <div className={styles.readingResults}>
      {/* Display Question */}
      <div className={styles.questionContainer}>
        <h2 className={styles.questionTitle}>Câu Hỏi Của Bạn</h2>
        <div className={styles.questionContent}>
          <p>{question || 'Không thể hiển thị câu hỏi'}</p>
        </div>
      </div>
      
      {/* Display Cards */}
      <div className={styles.cardsContainer}>
        <h2 className={styles.cardsTitle}>Lá Bài Của Bạn</h2>
        {selectedCards && selectedCards.length > 0 ? (
            <SpreadLayout
              selectedCards={selectedCards}
              spreadType={getSpreadType()}
              isBack={false}
            />
        ) : (
          <p>Không có lá bài nào được chọn.</p>
        )}
      </div>
      
      {/* Reading Section Title */}
      <h2 className={styles.sectionTitle}>Kết Quả</h2>
      
      {/* Summary Only Section - No tabs */}
      <div className={styles.contentContainer}>
        <ReactMarkdown>{getSummaryContent()}</ReactMarkdown>
      </div>
      
      {/* Email Subscription Section */}
      <div className={styles.emailSection}>
        <h3 className={styles.emailHeading}>Nhận phân tích chi tiết về bài Tarot của bạn</h3>
        <p className={styles.emailDescription}>
          Để nhận được phân tích chi tiết và sâu sắc hơn về từng lá bài và ý nghĩa trong câu hỏi của bạn, 
          vui lòng để lại thông tin liên hệ:
        </p>
        
        <form onSubmit={handleEmailSubmit} className={styles.emailForm}>
          <div className={styles.formFields}>
            <input 
              type="text" 
              placeholder="Họ và tên của bạn" 
              value={name}
              onChange={handleNameChange}
              className={`${styles.nameInput} ${isNameValid ? styles.validName : ''}`}
              required
            />
            <input 
              type="email" 
              placeholder="Địa chỉ email" 
              value={email}
              onChange={handleEmailChange}
              className={`${styles.emailInput} ${isEmailValid ? styles.validEmail : ''}`}
              required
            />
          </div>
          <button 
            type="submit" 
            className={styles.emailSubmitButton}
            disabled={!isEmailValid || !isNameValid || isSubmitting}
          >
            {isSubmitting ? 'Đang gửi...' : 'Gửi Cho Tôi'}
          </button>
        </form>
        {!isEmailValid && email && (
          <p className={styles.emailError}>
            Vui lòng nhập địa chỉ email hợp lệ
          </p>
        )}
        {!isNameValid && name && (
          <p className={styles.emailError}>
            Vui lòng nhập họ và tên của bạn
          </p>
        )}
      </div>
      
      {showControls && (
        <div className={styles.controls}>
          <button 
            className={styles.resetButton}
            onClick={onReset}
          >
            Bói Lại
          </button>
        </div>
      )}
    </div>
  );
}

export default ReadingResults;