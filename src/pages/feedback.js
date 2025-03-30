import React, { useState } from 'react';
import Layout from '@theme/Layout';
import styles from './feedback.module.css';

export default function Feedback() {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleRatingClick = (value) => {
    setRating(value);
  };

  const handleRatingHover = (value) => {
    setHoveredRating(value);
  };

  const handleRatingLeave = () => {
    setHoveredRating(0);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Đã gửi phản hồi:', { rating, feedback });
    setSubmitted(true);
    // Đặt lại form
    setRating(0);
    setFeedback('');
    // Sau 3 giây, đặt lại trạng thái submitted
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <Layout
      title="Chia Sẻ Phản Hồi"
      description="Chúng tôi trân trọng phản hồi của bạn về dịch vụ đọc bài tarot"
    >
      <div className="container margin-vert--lg">
        <div className={styles.feedbackContainer}>
          <h1 className={styles.title}>Chia Sẻ Phản Hồi</h1>
          
          <p className={styles.introText}>
            Chúng tôi trân trọng ý kiến và đề xuất của bạn về cách chúng tôi có thể cải thiện dịch vụ đọc bài tarot.
            Phản hồi của bạn giúp chúng tôi tạo ra trải nghiệm tốt hơn cho mọi người.
          </p>
          
          {submitted ? (
            <div className={styles.successMessage}>
              <h3>Cảm Ơn Bạn Đã Chia Sẻ Phản Hồi!</h3>
              <p>Chúng tôi rất trân trọng việc bạn dành thời gian để chia sẻ suy nghĩ của mình.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.feedbackForm}>
              <div className={styles.ratingSection}>
                <h3>Bạn đánh giá trải nghiệm của mình như thế nào?</h3>
                
                <div className={styles.starRating}
                  onMouseLeave={handleRatingLeave}
                >
                  {[1, 2, 3, 4, 5].map((value) => (
                    <span
                      key={value}
                      className={`${styles.star} ${
                        (hoveredRating || rating) >= value ? styles.filled : ''
                      }`}
                      onClick={() => handleRatingClick(value)}
                      onMouseEnter={() => handleRatingHover(value)}
                    >
                      ★
                    </span>
                  ))}
                </div>
                
                <div className={styles.ratingLabel}>
                  {rating > 0 ? (
                    <span>Bạn đã chọn {rating} {rating === 1 ? 'sao' : 'sao'}</span>
                  ) : (
                    <span>Nhấp để đánh giá</span>
                  )}
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="feedback">Phản Hồi Của Bạn</label>
                <textarea
                  id="feedback"
                  value={feedback}
                  onChange={handleFeedbackChange}
                  rows="6"
                  placeholder="Vui lòng chia sẻ suy nghĩ, đề xuất, hoặc bất kỳ vấn đề nào bạn đã gặp phải..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className={styles.submitButton}
                disabled={rating === 0}
              >
                Gửi Phản Hồi
              </button>
            </form>
          )}
          
          <div className={styles.alternativeFeedback}>
            <h3>Các Cách Khác Để Liên Hệ Với Chúng Tôi</h3>
            <p>
              Nếu bạn muốn, bạn cũng có thể gửi phản hồi trực tiếp cho chúng tôi tại{' '}
              <a href="mailto:feedback@tarotguideonline.com">feedback@tarotguideonline.com</a> hoặc
              truy cập trang <a href="/contact-us">Liên Hệ</a> của chúng tôi.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}