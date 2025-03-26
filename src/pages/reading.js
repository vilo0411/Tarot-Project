// src/pages/reading.js
import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import TarotReadingOptions from '../components/TarotReadingOptions';
import styles from './reading.module.css';

function ReadingPage() {
  const { siteConfig } = useDocusaurusContext();
  
  return (
    <Layout 
      title="Bói Bài Tarot" 
      description="Các phương pháp Trải Bài Tarot Trực Tuyến"
    >
      <div className={styles.pageBackground}>
        <div className={styles.container}>
          <div className={styles.headerSection}>
            <h1 className={styles.title}>Khám Phá Bài Tarot</h1>
            <p className={styles.subtitle}>
              Trải nghiệm các phương pháp đọc bài Tarot khác nhau để tìm kiếm câu trả lời cho những câu hỏi của bạn.
              Mỗi phương pháp trải bài sẽ mang đến một góc nhìn độc đáo về tình huống của bạn.
            </p>
          </div>
          
          <TarotReadingOptions />
          
          <div className={styles.infoSection}>
            <h2 className={styles.infoTitle}>Lưu ý khi đọc bài Tarot</h2>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Đặt câu hỏi rõ ràng</h3>
                <p>Câu hỏi càng cụ thể, câu trả lời càng chính xác. Tránh các câu hỏi có/không và tập trung vào các câu hỏi mở.</p>
              </div>
              <div className={styles.infoCard}>
                <h3>Tập trung tâm trí</h3>
                <p>Dành một khoảng thời gian yên tĩnh, thở sâu và tập trung vào câu hỏi của bạn trước khi bắt đầu rút bài.</p>
              </div>
              <div className={styles.infoCard}>
                <h3>Tiếp nhận cởi mở</h3>
                <p>Đón nhận thông điệp từ bài Tarot với tâm trí cởi mở. Đôi khi câu trả lời không phải là điều bạn muốn nghe, nhưng có thể là điều bạn cần biết.</p>
              </div>
              <div className={styles.infoCard}>
                <h3>Lắng nghe trực giác</h3>
                <p>Kết hợp trực giác của bạn với ý nghĩa của các lá bài. Cảm giác đầu tiên của bạn khi nhìn thấy một lá bài thường rất quan trọng.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ReadingPage;