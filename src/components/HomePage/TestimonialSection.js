// src/components/HomePage/TestimonialSection.js
import React from 'react';
import styles from './TestimonialSection.module.css';

const TestimonialCard = ({ text, author, role, rating }) => {
  // Function to generate star rating
  const renderStars = (count) => {
    return Array(count).fill(0).map((_, index) => (
      <span key={index} className={styles.star}>★</span>
    ));
  };

  // Function to highlight key phrases in testimonial text
  const highlightText = (text) => {
    // Find phrases enclosed in [[ ]] and apply highlight class
    if (!text) return '';
    
    // Split the text by [[ and ]] to find highlighted portions
    const parts = text.split(/\[\[|\]\]/);
    
    return parts.map((part, index) => {
      // Odd indices (1, 3, 5...) are the parts that were inside [[ ]]
      if (index % 2 === 1) {
        return <span key={index} className={styles.highlight}>{part}</span>;
      }
      // Even indices (0, 2, 4...) are regular text
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className={styles.testimonialCard}>
      <div className={styles.testimonialContent}>
        <p className={styles.testimonialText}>{highlightText(text)}</p>
      </div>
      <div className={styles.ratingContainer}>
        {renderStars(rating)}
      </div>
      <div className={styles.testimonialAuthor}>
        <div className={styles.authorName}>{author}</div>
        <div className={styles.authorRole}>{role}</div>
      </div>
    </div>
  );
};

export default function TestimonialSection() {
  const testimonials = [
    {
      text: "Tôi thích sử dụng trang web này! [[Các bài đọc luôn đúng trọng tâm]] và giúp tôi có được sự rõ ràng mà tôi cần. ",
      author: "Ngân Trần",
      role: "Leader Content Marketing",
      rating: 5
    },
    {
      text: "Trang web này là một [[nguồn tài nguyên tuyệt vời cho bất kỳ ai quan tâm đến tarot]]. Các bài đọc chi tiết và sâu sắc, và các độc giả rất chính xác.",
      author: "Trinh Nguyễn",
      role: "Business Consultant",
      rating: 5
    },
    {
      text: "Tôi đã từng hoài nghi về việc đọc tarot trực tuyến, nhưng trang web này đã thay đổi suy nghĩ của tôi. Các [[bài đọc rất chính xác và đã giúp tôi hiểu rõ hơn về cuộc sống của mình]]",
      author: "Vuong Tran",
      role: "CEO",
      rating: 4
    }
  ];

  return (
    <div className={styles.testimonialSection}>
      <h2 className={styles.testimonialHeading}>Người dùng nói gì khi trải nghiệm ứng dụng</h2>
      <div className={styles.testimonialContainer}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard 
            key={index} 
            text={testimonial.text} 
            author={testimonial.author} 
            role={testimonial.role} 
            rating={testimonial.rating}
          />
        ))}
      </div>
    </div>
  );
}