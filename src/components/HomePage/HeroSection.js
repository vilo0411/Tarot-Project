import React from 'react';
import Link from '@docusaurus/Link';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <div className={styles.heroContainer}>
      <h2 className={styles.heroHeading}>
        Discover Tarot Reading
      </h2>
      <p className={styles.heroDescription}>
        Thế giới Tarot là một hệ thống huyền bí đầy sức mạnh, giúp bạn hiểu rõ hơn về quá khứ, hiện tại và tương lai. Hãy cùng tôi khám phá ý nghĩa các lá bài, các dạng trải bài và cách giải đoán để mở khóa những thông điệp sâu sắc.
      </p>
      <div className={styles.cardContainer}>
        {/* Row 1: Card Meanings and Spreads */}
        <div className={styles.cardRow}>
          <Link
            to={TAROT_FEATURES[0].link}
            className={`${styles.card} ${styles.standardCard} ${styles[TAROT_FEATURES[0].cardClass]}`}
          >
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>
                <span className={styles.cardIcon}>{TAROT_FEATURES[0].icon}</span>
                {TAROT_FEATURES[0].title}
              </h3>
              <p className={styles.cardDescription}>{TAROT_FEATURES[0].text}</p>
            </div>
          </Link>
          
          <Link
            to={TAROT_FEATURES[1].link}
            className={`${styles.card} ${styles.standardCard} ${styles[TAROT_FEATURES[1].cardClass]}`}
          >
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>
                <span className={styles.cardIcon}>{TAROT_FEATURES[1].icon}</span>
                {TAROT_FEATURES[1].title}
              </h3>
              <p className={styles.cardDescription}>{TAROT_FEATURES[1].text}</p>
            </div>
          </Link>
        </div>
        
        {/* Row 2: Interactive Readings (Wide Card) */}
        <div className={styles.cardRow}>
          <Link
            to={TAROT_FEATURES[2].link}
            className={`${styles.card} ${styles.wideCard} ${styles[TAROT_FEATURES[2].cardClass]}`}
          >
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>
                <span className={styles.cardIcon}>{TAROT_FEATURES[2].icon}</span>
                {TAROT_FEATURES[2].title}
              </h3>
              <p className={styles.cardDescription}>{TAROT_FEATURES[2].text}</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

// Dữ liệu tính năng Tarot
const TAROT_FEATURES = [
  {
    title: 'Ý nghĩa lá bài',
    link: '/cards',
    icon: '♠️',
    text: 'Khám phá ý nghĩa chi tiết của tất cả 78 lá bài Tarot, bao gồm Bộ Ẩn Chính và Bộ Ẩn Phụ với các diễn giải khi xuất hiện chính ngược và đảo ngược.',
    cardClass: 'cardMeanings',
  },
  {
    title: 'Các loại trải bài',
    link: '/spreads',
    icon: '🔮',
    text: 'Khám phá các dạng trải bài Tarot khác nhau cho nhiều mục đích khác nhau - từ dạng trải đơn giản ba lá bài đến bố cục phức tạp',
    cardClass: 'cardSpreads',
  },
  {
    title: 'Luận bài',
    link: '/reading',
    icon: '✨',
    text: 'Hãy thử công cụ đọc bài Tarot tương tác của chúng tôi để có được những hiểu biết sâu sắc về các câu hỏi và tình huống của bạn với những diễn giải được cá nhân hóa.',
    cardClass: 'cardReadings',
  },
];