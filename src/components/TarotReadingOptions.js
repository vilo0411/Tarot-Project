// src/components/TarotReadingOptions/index.js
import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './TarotReadingOptions.module.css';

const TarotReadingOptions = () => {
  const readingOptions = [
    {
      title: "Rút 1 Lá",
      description: "Trả lời nhanh cho một câu hỏi đơn giản. Lá bài đơn lẻ sẽ cung cấp thông tin rõ ràng và trực tiếp.",
      link: "/reading/one-card-tarot",
      backgroundColor: "blue"
    },
    {
      title: "Rút 3 Lá",
      description: "Trải bài Quá khứ - Hiện tại - Tương lai. Mỗi lá bài đại diện cho một giai đoạn thời gian, giúp bạn hiểu rõ tình huống của mình dưới dòng chảy thời gian.",
      link: "/reading/three-cards-tarot",
      backgroundColor: "purple"
    },
    {
      title: "Rút 5 Lá",
      description: "Trải bài chữ thập. Phân tích chi tiết hơn cho các tình huống phức tạp, giúp bạn hiểu rõ các khía cạnh khác nhau của vấn đề.",
      link: "/reading/five-cards-tarot",
      backgroundColor: "green"
    }
  ];

  return (
    <div className={styles.optionsContainer}>
      {readingOptions.map((option, index) => (
        <Link 
          key={index}
          to={option.link}
          className={`${styles.optionCard} ${styles[`bgColor${option.backgroundColor}`]}`}
        >
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>{option.title}</h3>
            <p className={styles.cardDescription}>{option.description}</p>
            <div className={styles.cardAction}>
              <span className={styles.actionButton}>
                Bắt đầu bói
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TarotReadingOptions;