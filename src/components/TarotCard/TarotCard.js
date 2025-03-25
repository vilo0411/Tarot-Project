import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './TarotCard.module.css';


function TarotCard({ 
    card, 
    isBack = true, 
    isSelected = false, 
    onClick,
    style = {},
    variant = 'selector' // 'selector' hoặc 'spread'
  }) {
    // Chọn class dựa vào variant
    let cardContainerClass = variant === 'selector' 
      ? styles.selectorCardContainer 
      : styles.spreadCardContainer;

    const cardBackUrl = useBaseUrl('img/deck/back.jpg');
    const cardFrontUrl = useBaseUrl(`img/deck/${card.code}.jpg`);
    
    // Tạo style riêng cho các lá bài ở mode spread khi flip lên
    const finalStyle = {
      ...style,
      ...(variant === 'spread' && !isBack && card.isReversed ? { transform: 'rotate(180deg)' } : {})
    };
      
    return (
      <div 
        className={`${cardContainerClass} ${
          isSelected ? styles.selectedCardContainer : ''
        }`}
        onClick={onClick}
        style={finalStyle}
      >
        <div className={styles.card}>
          <img 
            src={isBack ? cardBackUrl : cardFrontUrl}
            alt={isBack ? "Card Back" : card.name}
            className={styles.cardImage}
          />
        </div>
      </div>
    );
  }
  
  export default TarotCard;