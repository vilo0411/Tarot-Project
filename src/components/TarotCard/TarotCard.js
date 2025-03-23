import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './TarotCard.module.css';

function TarotCard({ 
    card, 
    isBack = true, 
    isSelected = false, 
    onClick,
    style = {}
  }) {
    return (
      <div 
        className={`${styles.cardContainer} ${
          isSelected ? styles.selectedCardContainer : ''
        }`}
        onClick={onClick}
        style={style}
      >
        <div className={styles.card}>
          <img 
            src={isBack ? 'img/deck/back.jpg' : `img/deck/${card.code}.jpg`}
            alt={isBack ? "Card Back" : card.name}
            className={styles.cardImage}
          />
        </div>
      </div>
    );
  }
  
  export default TarotCard;