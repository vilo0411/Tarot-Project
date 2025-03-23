import React from 'react';
import TarotCard from '../TarotCard/TarotCard';
import styles from './TarotResult.module.css';

function TarotResult({ selectedCards = [], onReset }) {
  const positions = ["Quá Khứ", "Hiện Tại", "Tương Lai"];

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
                <div className={styles.position}>{positions[index]}</div>
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