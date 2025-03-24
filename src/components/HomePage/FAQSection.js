// src/components/HomePage/FAQSection.js
import React, { useState } from 'react';
import styles from './FAQSection.module.css';

export default function FAQSection() {
  // State to track which FAQ is expanded
  const [expandedIndex, setExpandedIndex] = useState(null);
  
  // Toggle FAQ expansion
  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className={styles.faqSection}>
      <div className={styles.faqContainer}>
        <h2 className={styles.faqHeading}>Các Câu Hỏi Thường Gặp</h2>
        <p className={styles.faqDescription}>
          Những câu hỏi thường gặp về Tarot và cách sử dụng công cụ bói bài trực tuyến của chúng tôi.
        </p>

        <div className={styles.faqList}>
          {FAQS.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <div 
                className={styles.faqQuestion} 
                onClick={() => toggleFAQ(index)}
              >
                <div className={styles.faqQuestionText}>{faq.question}</div>
                <div className={`${styles.faqIcon} ${expandedIndex === index ? styles.expanded : ''}`}>
                  {expandedIndex === index ? '▲' : '▼'}
                </div>
              </div>
              <div className={`${styles.faqAnswer} ${expandedIndex === index ? styles.expandedAnswer : ''}`}>
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// FAQ data
const FAQS = [
  {
    question: 'Khi nào tôi nên trải bài Tarot?',
    answer: 'Bạn có thể trải bài Tarot bất cứ khi nào bạn cần sự hướng dẫn, cảm hứng hoặc nhìn nhận sâu sắc về một tình huống. Nhiều người thích trải bài vào đầu ngày, trong thời gian thiền định, hoặc khi đối mặt với quyết định quan trọng. Điều quan trọng là trải bài với tâm trí rõ ràng và ý định chân thành.'
  },
  {
    question: 'Làm thế nào để đặt câu hỏi hiệu quả cho bài Tarot?',
    answer: 'Câu hỏi hiệu quả nên cụ thể, tập trung vào bản thân và mở. Thay vì hỏi "Tôi có được thăng chức không?", hãy thử "Tôi cần phát triển kỹ năng gì để tăng cơ hội thăng tiến trong sự nghiệp?" Câu hỏi mở sẽ cung cấp cái nhìn sâu sắc và hữu ích hơn so với câu hỏi đóng (có/không).'
  },
  {
    question: 'Công cụ trải bài trực tuyến có chính xác không?',
    answer: 'Công cụ trải bài trực tuyến của chúng tôi được thiết kế để mô phỏng trải nghiệm trải bài Tarot truyền thống. Thuật toán của chúng tôi đảm bảo việc chọn bài ngẫu nhiên, tương tự như khi bạn xáo bài thực. Tuy nhiên, hiệu quả của bài đọc phụ thuộc nhiều vào ý định, sự tập trung và việc diễn giải cá nhân của bạn.'
  },
  {
    question: 'Tôi có thể lưu kết quả bài đọc của mình không?',
    answer: 'Hiện tại, chúng tôi chưa có chức năng lưu kết quả bài đọc. Chúng tôi khuyến nghị bạn chụp màn hình hoặc ghi chép lại kết quả quan trọng. Chúng tôi đang phát triển tính năng này và sẽ sớm cập nhật trong tương lai.'
  }
];