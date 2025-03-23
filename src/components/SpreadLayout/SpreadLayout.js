import React from 'react';
import TarotCard from '../TarotCard/TarotCard';
import styles from './SpreadLayout.module.css';

const SPREAD_LAYOUTS = {
  1: [{ position: 'Câu Trả Lời', description: 'Thông điệp cho câu hỏi của bạn' }],
  3: [
    { position: 'Quá Khứ', description: 'Những ảnh hưởng từ quá khứ' },
    { position: 'Hiện Tại', description: 'Tình huống hiện tại' },
    { position: 'Tương Lai', description: 'Kết quả có thể xảy ra' }
  ],
  5: [
    { position: 'Thử Thách', className: 'top' },
    { position: 'Quá Khứ', className: 'left' },
    { position: 'Hiện Tại', className: 'center' },
    { position: 'Tương Lai', className: 'right' },
    { position: 'Lời Khuyên', className: 'bottom' }
  ],
  10: [
    // Thêm positions cho Celtic Cross spread
    // ... (có thể thêm sau)
  ]
};

function SpreadLayout({ selectedCards, spreadType }) {
  if (!spreadType) {
    return null; // Không hiển thị gì nếu chưa chọn kiểu trải bài
  }

  const layout = SPREAD_LAYOUTS[spreadType.count] || [];

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
                />
                <div className={styles.positionInfo}>
                  <h4>{index + 1}</h4>
                </div>
              </>
            ) : (
              <div className={styles.emptyPosition}>
                <h4>{index + 1}</h4>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpreadLayout; 