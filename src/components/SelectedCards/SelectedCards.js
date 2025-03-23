import React from 'react';
import TarotCard from '../TarotCard/TarotCard';
import styles from './SelectedCards.module.css';

function SelectedCards({ selectedCards }) {
  const StaticCard = ({ card }) => (
    <div className={styles.cardContainer}>
      <TarotCard 
        card={card}
        isBack={true}
        isSelected={true}
        style={{
          width: '110px',
          height: '170px',
          margin: '0',
          transform: 'none'
        }}
      />
    </div>
  );

  return (
    <div className={styles.selectedCardsWrapper}>
      {selectedCards.length > 0 ? (
        <div className={styles.selectedCardsContainer}>
          {selectedCards.map((card, index) => (
            <div key={card.code} className={styles.selectedCardSlot}>
              <StaticCard card={card} />
              <div className={styles.positionInfo}>
                <div className={styles.positionNumber}>{index + 1}</div>
                {index === 0 && 
                  <div className={styles.positionName}>Quá Khứ</div>}
                {index === 1 && 
                  <div className={styles.positionName}>Hiện Tại</div>}
                {index === 2 && 
                  <div className={styles.positionName}>Tương Lai</div>}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <div className={styles.emptySlots}>
            {[...Array(3)].map((_, index) => (
              <div key={index} className={styles.emptySlot}>
                <div className={styles.positionInfo}>
                  <div className={styles.positionNumber}>{index + 1}</div>
                  <div className={styles.positionName}>
                    {index === 0 && "Quá Khứ"}
                    {index === 1 && "Hiện Tại"}
                    {index === 2 && "Tương Lai"}
                  </div>
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