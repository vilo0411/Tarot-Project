"use client"

import React from 'react';
import TarotCard from '../TarotCard';
import styles from './SelectedCards.module.css';

function SelectedCards({ selectedCards }) {
  const StaticCard = ({ card }) => (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <img 
          src="img/deck/back.jpg"
          alt="Card Back"
          className={styles.cardImage}
        />
      </div>
    </div>
  );

  return (
    <div className={styles.selectedCardsWrapper}>
      {selectedCards.length > 0 ? (
        <div className={styles.selectedCardsContainer}>
          {selectedCards.map((card, index) => (
            <div key={card.code} className={styles.selectedCardSlot}>
              <StaticCard card={card} />
              <div className={styles.positionLabel}>
                {index === 0 && "Quá Khứ"}
                {index === 1 && "Hiện Tại"}
                {index === 2 && "Tương Lai"}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <div className={styles.emptySlots}>
            {[...Array(3)].map((_, index) => (
              <div key={index} className={styles.emptySlot}>
                <div className={styles.positionLabel}>
                  {index === 0 && "Quá Khứ"}
                  {index === 1 && "Hiện Tại"}
                  {index === 2 && "Tương Lai"}
                </div>
              </div>
            ))}
          </div>
          <p>Hãy chọn 3 lá bài từ bộ bài phía trên</p>
        </div>
      )}
    </div>
  );
}

export default SelectedCards; 