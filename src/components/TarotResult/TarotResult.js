import React, { useState } from 'react';
import TarotCard from '../TarotCard/TarotCard';
import styles from './TarotResult.module.css';

function TarotResult({ 
  selectedCards = [], 
  onReset,
  onSubmitEmail,
  spreadType = { name: 'Rút 3 Lá', count: 3 }
}) {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Định nghĩa vị trí lá bài dựa trên loại trải bài
  const getPositions = () => {
    switch (spreadType.count) {
      case 1:
        return ['Lá Bài Duy Nhất'];
      case 3:
        return ['Quá Khứ', 'Hiện Tại', 'Tương Lai'];
      case 5:
        return ['Trung Tâm', 'Trên', 'Trái', 'Phải', 'Dưới'];
      case 10:
        return [
          'Tình Huận Hiện Tại', 
          'Thách Thức', 
          'Dưới Ý Thức', 
          'Quá Khứ Gần', 
          'Tiềm Năng Tương Lai', 
          'Ý Thức', 
          'Bản Thân', 
          'Môi Trường', 
          'Hy Vọng/Nỗi Sợ', 
          'Kết Quả'
        ];
      default:
        return selectedCards.map((_, index) => `Lá ${index + 1}`);
    }
  };

  const positions = getPositions();

  // Email validation function
  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
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

    try {
      setIsSubmitting(true);
      
      // Call the email submission handler passed from parent
      if (onSubmitEmail) {
        await onSubmitEmail(email, selectedCards);
      }
      
      // Optional: Show success message
      alert('Kết quả bói bài sẽ được gửi đến email của bạn.');
    } catch (error) {
      console.error('Email submission error:', error);
      alert('Có lỗi xảy ra. Vui lòng thử lại.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.readingResult}>
      <div className={styles.cardsContainer}>
        {selectedCards.map((card, index) => {
          if (!card || !card.code) return null;

          return (
            <div key={card.code} className={styles.cardSlot}>
              <div className={`${styles.cardWrapper} ${card.isReversed ? styles.reversed : ''}`}>
                <TarotCard 
                  card={card}
                  isBack={false}
                  isReversed={card.isReversed}
                />
              </div>
              <div className={styles.cardInfo}>
                <div className={styles.position}>{positions[index] || `Lá ${index + 1}`}</div>
                <div className={styles.cardName}>
                  {card.name}
                  <span className={styles.orientation}>
                    ({card.isReversed ? 'Ngược' : 'Thuận'})
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className={styles.emailSection}>
        <form onSubmit={handleEmailSubmit} className={styles.emailForm}>
          <input 
            type="email" 
            placeholder="Nhập email để nhận kết quả đầy đủ" 
            value={email}
            onChange={handleEmailChange}
            className={`${styles.emailInput} ${isEmailValid ? styles.validEmail : ''}`}
            required
          />
          <button 
            type="submit" 
            className={styles.emailSubmitButton}
            disabled={!isEmailValid || isSubmitting}
          >
            {isSubmitting ? 'Đang gửi...' : 'Gửi Kết Quả'}
          </button>
        </form>
        {!isEmailValid && email && (
          <p className={styles.emailError}>
            Vui lòng nhập địa chỉ email hợp lệ
          </p>
        )}
      </div>
      
      <button 
        className={styles.resetButton}
        onClick={onReset}
      >
        Bói Lại
      </button>
    </div>
  );
}

export default TarotResult;