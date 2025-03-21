import React, { useEffect } from 'react';
import TarotCard from './TarotCard';
import styles from '../pages/tarot-reading.module.css';

function CardSelector({ 
    shuffledCards = [], 
    selectedCards = [], 
    onCardSelect 
  }) {
    // Ensure we have a safe array to map over
    const cardsToRender = Array.isArray(shuffledCards) ? shuffledCards : [];
  
    // Check if a card is selected
    const isCardSelected = (card) => {
      if (!card || !Array.isArray(selectedCards)) return false;
      return selectedCards.some(selected => selected.code === card.code);
    };
  
    return (
      <div className={styles.cardLayout}>
        {cardsToRender.map((card, index) => {
          // Ensure card is valid
          if (!card || !card.code) return null;
  
          return (
            <TarotCard 
              key={card.code || index}
              card={card}
              isBack={true}
              isSelected={isCardSelected(card)}
              isReversed={false}
              onClick={() => onCardSelect(card)}
            />
          );
        })}
      </div>
    );
  }
  
  export default CardSelector;