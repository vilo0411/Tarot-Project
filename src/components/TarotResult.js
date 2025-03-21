import React, { useEffect } from 'react';
import TarotCard from './TarotCard';
import styles from '../pages/tarot-reading.module.css';

function TarotResult({ 
    selectedCards = [], 
    onReset 
  }) {
    // Ensure we have a safe array to render
    const cardsToRender = Array.isArray(selectedCards) ? selectedCards : [];
  
    return (
      <div className={styles.readingResult}>
        <div className={styles.selectedCardDisplay}>
          {cardsToRender.map((card, index) => {
            // Ensure card is valid
            if (!card || !card.code) return null;
  
            return (
              <TarotCard 
                key={card.code || index}
                card={card}
                isBack={false}
                isReversed={card.isReversed}
              />
            );
          })}
        </div>
        
        <button 
          className={styles.resetButton}
          onClick={onReset}
        >
          New Reading
        </button>
      </div>
    );
  }
  
  export default TarotResult;