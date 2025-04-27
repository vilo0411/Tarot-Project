import React, { useState } from 'react';
import Layout from '@theme/Layout';
import { useHistory } from '@docusaurus/router';
import styles from './feedback.module.css';

export default function Feedback() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isFeedbackValid, setIsFeedbackValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const history = useHistory();

  // Validate email format
  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  // Handle name input change
  const handleNameChange = (e) => {
    const inputName = e.target.value;
    setName(inputName);
    setIsNameValid(inputName.trim().length > 0);
  };

  // Handle email input change
  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setIsEmailValid(validateEmail(inputEmail));
  };

  // Handle feedback text change
  const handleFeedbackChange = (e) => {
    const inputFeedback = e.target.value;
    setFeedback(inputFeedback);
    setIsFeedbackValid(inputFeedback.trim().length > 0);
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all inputs
    if (!isNameValid) {
      setErrorMessage('Vui lòng nhập họ và tên của bạn');
      return;
    }
    
    if (!isEmailValid) {
      setErrorMessage('Vui lòng nhập địa chỉ email hợp lệ');
      return;
    }
    
    if (!isFeedbackValid) {
      setErrorMessage('Vui lòng nhập nội dung phản hồi');
      return;
    }
    
    setErrorMessage('');
    setIsSubmitting(true);
    
    try {
      // Prepare data for the webhook
      const formData = {
        name: name,
        email: email,
        feedback: feedback,
        timestamp: new Date().toISOString(),
        source: 'feedback-form'
      };
      
      // Send data to the n8n webhook
      const webhookResponse = await fetch('ttps://n8n.tarotguideonline.com/webhook/tarot-reading', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      if (!webhookResponse.ok) {
        throw new Error(`Webhook request failed with status ${webhookResponse.status}`);
      }
      
      // Show success message briefly
      setSubmitted(true);
      
      // Reset form
      setName('');
      setEmail('');
      setFeedback('');
      setIsNameValid(false);
      setIsEmailValid(false);
      setIsFeedbackValid(false);
      
      // Redirect to home page after a short delay
      setTimeout(() => {
        history.push('/');
      }, 2000);
      
    } catch (error) {
      console.error('Submission error:', error);
      setErrorMessage('Có lỗi xảy ra khi gửi phản hồi. Vui lòng thử lại.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout
      title="Chia Sẻ Phản Hồi"
      description='Trải nghiệm của bạn vói Tarot Guide Online như thế nào? Hãy cho chúng mình feedback để hoàn thiện hơn nhé!'
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
              <p>Đang chuyển hướng về trang chủ...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.feedbackForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Họ và tên</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={handleNameChange}
                  className={`${styles.textInput} ${isNameValid ? styles.validInput : ''}`}
                  placeholder="Nhập họ và tên của bạn"
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email">Địa chỉ email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  className={`${styles.textInput} ${isEmailValid ? styles.validInput : ''}`}
                  placeholder="Nhập địa chỉ email của bạn"
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="feedback">Phản Hồi Của Bạn</label>
                <textarea
                  id="feedback"
                  value={feedback}
                  onChange={handleFeedbackChange}
                  rows="6"
                  className={`${styles.textArea} ${isFeedbackValid ? styles.validInput : ''}`}
                  placeholder="Vui lòng chia sẻ suy nghĩ, đề xuất, hoặc bất kỳ vấn đề nào bạn đã gặp phải..."
                  required
                ></textarea>
              </div>
              
              {errorMessage && (
                <div className={styles.errorMessage}>
                  {errorMessage}
                </div>
              )}
              
              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting || !isNameValid || !isEmailValid || !isFeedbackValid}
              >
                {isSubmitting ? 'Đang gửi...' : 'Gửi Phản Hồi'}
              </button>
            </form>
          )}
          
          <div className={styles.alternativeFeedback}>
            <h3>Các Cách Khác Để Liên Hệ Với Chúng Tôi</h3>
            <p>
              Nếu bạn muốn, bạn cũng có thể gửi phản hồi trực tiếp cho chúng tôi tại{' '}
              <a href="mailto:admin@tarotguideonline.com">feedback@tarotguideonline.com</a> hoặc
              truy cập trang <a href="/contact-us">Liên Hệ</a> của chúng tôi.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}