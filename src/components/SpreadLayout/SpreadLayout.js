import React from 'react';
import TarotCard from '../TarotCard/TarotCard';
import styles from './SpreadLayout.module.css';

const SPREAD_LAYOUTS = {
  1: [{ position: '1' }],
  3: [
    { position: '1', className: 'center' },
    { position: '2', className: 'left' },
    { position: '3', className: 'right' }
  ],
  5: [
    { position: '1', className: 'center' },
    { position: '2', className: 'left' },
    { position: '3', className: 'right' },
    { position: '4', className: 'bottom' },
    { position: '5', className: 'top' }
  ],
  10: [
    { position: '1', className: 'celtic-center' },
    { position: '2', className: 'celtic-crossing' },
    { position: '3', className: 'celtic-below' },
    { position: '4', className: 'celtic-left' },
    { position: '5', className: 'celtic-above' },
    { position: '6', className: 'celtic-right' },
    { position: '7', className: 'celtic-self' },
    { position: '8', className: 'celtic-environment' },
    { position: '9', className: 'celtic-hopes' },
    { position: '10', className: 'celtic-outcome' }
  ]
};

function SpreadLayout({ selectedCards, spreadType }) {
  if (!spreadType) {
    return null; // Không hiển thị gì nếu chưa chọn kiểu trải bài
  }

  const layout = SPREAD_LAYOUTS[spreadType.count] || [];

  // Kiểm tra có phải layout Celtic Cross không
  const isCelticCross = spreadType.count === 10;

  return (
    <div className={styles.spreadLayout}>
      <div className={`${styles.layout} ${styles[`layout${spreadType.count}`]}`}>
        {layout.map((position, index) => (
          <div 
            key={index} 
            className={`${styles.cardPosition} ${styles[position.className] || ''}`}
          >
            {selectedCards[index] ? (
              <>
                <TarotCard
                  card={selectedCards[index]}
                  isBack={true}
                  isSelected={true}
                  variant="spread" // Dùng variant 'spread'
                />
                <div className={styles.positionInfo}>
                </div>
              </>
            ) : (
              <div className={styles.emptyPosition}>
                <div className={styles.positionNumber}>{position.position}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpreadLayout;