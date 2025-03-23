import React from 'react';
import styles from './SpreadSelector.module.css';

const SPREAD_TYPES = {
  SINGLE: {
    name: 'Rút 1 Lá',
    count: 1,
    description: 'Trả lời nhanh cho một câu hỏi đơn giản'
  },
  THREE_CARDS: {
    name: 'Rút 3 Lá',
    count: 3,
    description: 'Quá khứ - Hiện tại - Tương lai'
  },
  FIVE_CARDS: {
    name: 'Rút 5 Lá',
    count: 5,
    description: 'Trải bài chữ thập'
  },
  TEN_CARDS: {
    name: 'Rút 10 Lá',
    count: 10,
    description: 'Trải bài Celtic Cross'
  }
};

function SpreadSelector({ onSelectSpread, selectedSpread }) {
  return (
    <div className={styles.spreadSelector}>
      <h3>Chọn Kiểu Trải Bài</h3>
      <div className={styles.spreadOptions}>
        {Object.entries(SPREAD_TYPES).map(([key, spread]) => (
          <button
            key={key}
            className={`${styles.spreadOption} ${
              selectedSpread?.count === spread.count ? styles.selected : ''
            }`}
            onClick={() => onSelectSpread(spread)}
          >
            <h4>{spread.name}</h4>
            <p>{spread.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default SpreadSelector; 