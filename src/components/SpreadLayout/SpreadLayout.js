import React from 'react';
import TarotCard from '../TarotCard/TarotCard';
import styles from './SpreadLayout.module.css';

const SPREAD_LAYOUTS = {
  1: [{ position: 'Lá Bài Duy Nhất', className: 'singleCard' }],
  3: [
    { position: 'Quá Khứ', className: 'left' },
    { position: 'Hiện Tại', className: 'center' },
    { position: 'Tương Lai', className: 'right' }
  ],
  5: [
    { position: 'Chủ Đề', className: 'center' },
    { position: 'Trên', className: 'top' },
    { position: 'Trái', className: 'left' },
    { position: 'Phải', className: 'right' },
    { position: 'Dưới', className: 'bottom' }
  ],
  10: [
    { position: 'Hiện Tại', className: 'celtic-center' },
    { position: 'Thách Thức', className: 'celtic-crossing' },
    { position: 'Dưới Ý Thức', className: 'celtic-below' },
    { position: 'Quá Khứ Gần', className: 'celtic-left' },
    { position: 'Tương Lai Gần', className: 'celtic-above' },
    { position: 'Kết Quả', className: 'celtic-right' },
    { position: 'Bản Thân', className: 'celtic-self' },
    { position: 'Môi Trường', className: 'celtic-environment' },
    { position: 'Hy Vọng/Nỗi Sợ', className: 'celtic-hopes' },
    { position: 'Kết Quả Cuối', className: 'celtic-outcome' }
  ]
};

function SpreadLayout({ selectedCards, spreadType, isBack = true, showPositions = false }) {
  if (!spreadType) {
    return null;
  }

  const layout = SPREAD_LAYOUTS[spreadType.count] || [];
  
  // Kiểm tra có phải layout Celtic Cross không
  const isCelticCross = spreadType.count === 10;
  
  // Kiểm tra có phải layout một lá hay không
  const isSingleCard = spreadType.count === 1;
  
  // Kiểm tra có phải layout ba lá hay không
  const isThreeCards = spreadType.count === 3;
  
  // Kiểm tra có phải layout năm lá hay không
  const isFiveCards = spreadType.count === 5;

  // Kiểm tra kích thước màn hình hiện tại để quyết định hiển thị tối ưu
  const [isMobile, setIsMobile] = React.useState(false);
  
  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Kiểm tra khi component mount
    checkScreenSize();
    
    // Thêm event listener để theo dõi thay đổi kích thước màn hình
    window.addEventListener('resize', checkScreenSize);
    
    // Cleanup khi unmount
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div 
      className={`
        ${styles.spreadLayout} 
        ${isSingleCard ? styles.singleCardLayout : ''} 
        ${isThreeCards ? styles.threeCardsLayout : ''}
        ${isFiveCards ? styles.fiveCardsLayout : ''}
        ${isCelticCross ? styles.tenCardsLayout : ''}
      `}
    >
      <div className={`${styles.layout} ${styles[`layout${spreadType.count}`]}`}>
        {layout.map((position, index) => (
          <div 
            key={index} 
            className={`${styles.cardPosition} ${styles[position.className] || ''}`}
          >
            {/* Hiển thị nhãn vị trí trên mobile */}
            {isMobile && isCelticCross && (
              <div className={styles.mobilePositionLabel}>
                {position.position}
              </div>
            )}
            
            {selectedCards[index] ? (
              <React.Fragment>
                <TarotCard
                  card={selectedCards[index]}
                  isBack={isBack}
                  isSelected={false}
                  variant="spread"
                />
                {/* Hiển thị nhãn vị trí */}
                {(showPositions || (!isMobile && isCelticCross)) && (
                  <div className={styles.cardPositionLabel}>
                    {position.position}
                  </div>
                )}
              </React.Fragment>
            ) : (
              <div className={styles.emptyPosition}>
                <div className={styles.positionNumber}>{index + 1}</div>
                {/* Hiển thị nhãn vị trí cho ô trống */}
                {(showPositions || (!isMobile && isCelticCross)) && (
                  <div className={styles.emptyPositionLabel}>
                    {position.position}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
        
        {/* Thêm các dấu hiệu kết nối giữa các lá bài cho Celtic Cross */}
        {isCelticCross && !isMobile && (
          <div className={styles.celticConnectors}>
            <div className={styles.verticalConnector}></div>
            <div className={styles.horizontalConnector}></div>
            <div className={styles.staffConnector}></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SpreadLayout;