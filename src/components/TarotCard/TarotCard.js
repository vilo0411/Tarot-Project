import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './TarotCard.module.css';


function TarotCard({ 
    card, 
    isBack = true, 
    isSelected = false, 
    onClick,
    style = {},
    variant = 'selector' // Thêm param variant: 'selector' hoặc 'spread'
  }) {
    // Chọn class dựa vào variant
    const cardContainerClass = variant === 'selector' 
      ? styles.selectorCardContainer 
      : styles.spreadCardContainer;

    const cardBackUrl = useBaseUrl('img/deck/back.jpg');
    const cardFrontUrl = useBaseUrl(`img/deck/${card.code}.jpg`);
      
    return (
      <div 
        className={`${cardContainerClass} ${
          isSelected ? styles.selectedCardContainer : ''
        }`}
        onClick={onClick}
        style={style}
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