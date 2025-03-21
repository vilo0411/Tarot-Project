import React, { useEffect } from 'react';
import styles from '../pages/tarot-reading.module.css';

function TarotCard({ 
    card, 
    isBack = true, 
    isSelected = false, 
    isReversed = false, 
    onClick 
  }) {
    // Helper function to get card image
    const getCardImage = (card, isBack) => {
      try {
        if (isBack) {
          return 'img/deck/back.jpg';
        }
        
        return `img/deck/${card.code}.jpg`;
      } catch (error) {
        console.error('Error in getCardImage:', error);
        return 'img/deck/back.jpg'; // Fallback image
      }
    };
  
    return (
      <div 
        className={`${styles.cardContainer} ${
          isSelected ? styles.selectedCardContainer : ''
        }`}
        onClick={onClick}
      >
        <div 
          className={`${styles.card} ${
            isReversed && !isBack ? styles.reversedCard : ''
          }`}
        >
          <img 
            src={getCardImage(card, isBack)} 
            alt={isBack ? "Card Back" : (card?.name || 'Tarot Card')}
            className={styles.cardImage}
            style={{ 
              transform: isReversed && !isBack ? 'rotate(180deg)' : 'none',
            }}
          />
          {!isBack && (
            <div className={styles.cardInfo}>
              <p>{card?.name || 'Unknown Card'}</p>
              {isReversed && <span className={styles.reversedLabel}>(Reversed)</span>}
            </div>
          )}
        </div>
      </div>
    );
  }
  
  export default TarotCard;