// src/components/HomePage/TestimonialSection.js
import React, { useState, useEffect, useRef } from 'react';
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
    },
    {
      text: "Các lá bài được giải thích cực kỳ chi tiết. [[Bài đọc cá nhân hóa và phù hợp với tình huống của tôi]]. Hoàn toàn khác với những trang tarot khác tôi đã thử.",
      author: "Minh Nguyễn",
      role: "Graphic Designer",
      rating: 5
    },
    {
      text: "Tôi đã dùng nhiều ứng dụng tarot khác nhau, nhưng [[trang web này cung cấp góc nhìn sâu sắc nhất]]. Giao diện đẹp và dễ sử dụng, các kiểu trải bài đa dạng.",
      author: "Hương Lê",
      role: "Marketing Executive",
      rating: 5
    }
  ];

  // State for tracking current index
  const [startIndex, setStartIndex] = useState(0);
  // State for tracking if we're on mobile view
  const [isMobile, setIsMobile] = useState(false);
  // State to track if user is hovering over the carousel
  const [isHovering, setIsHovering] = useState(false);
  // Reference to the carousel container
  const carouselRef = useRef(null);
  
  // Calculate number of visible cards
  const visibleCount = isMobile ? 1 : 3;
  
  // Calculate maximum start index based on testimonials length
  const maxStartIndex = Math.max(0, testimonials.length - visibleCount);
  const totalSlides = testimonials.length - (visibleCount - 1);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Check on initial render
    checkScreenSize();
    
    // Add resize listener
    window.addEventListener('resize', checkScreenSize);
    
    // Clean up
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // When screen size changes, adjust the start index if needed
  useEffect(() => {
    if (startIndex > maxStartIndex) {
      setStartIndex(maxStartIndex);
    }
  }, [isMobile, maxStartIndex, startIndex]);

  // Function to go forward
  const nextSlide = () => {
    setStartIndex(prev => Math.min(prev + 1, maxStartIndex));
  };

  // Function to go backward
  const prevSlide = () => {
    setStartIndex(prev => Math.max(prev - 1, 0));
  };

  // Auto-advance slide every 8 seconds (slower timing)
  useEffect(() => {
    // Skip auto-advance if user is hovering
    if (isHovering) return;
    
    const interval = setInterval(() => {
      if (startIndex < maxStartIndex) {
        nextSlide();
      } else {
        setStartIndex(0); // Loop back to beginning
      }
    }, 8000); // Increased to 8 seconds
    
    return () => clearInterval(interval);
  }, [startIndex, maxStartIndex, isHovering]);

  // Get testimonials for all slides but render them all at once
  // This fixes the mobile view issue by having all testimonials in the DOM
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className={styles.testimonialSection}>
      <h2 className={styles.testimonialHeading}>Người dùng nói gì khi trải nghiệm ứng dụng</h2>
      
      <div 
        className={styles.carouselContainer} 
        ref={carouselRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.testimonialContainer}>
          <div className={styles.carouselTrack} style={{ 
            transform: isMobile 
              ? `translateX(calc(-${startIndex * 100}%))` 
              : `translateX(calc(-${startIndex * 33.333}%))`
          }}>
            {/* Render all testimonials */}
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={styles.testimonialCardWrapper}
                style={{ width: isMobile ? '100%' : '33.333%' }}
              >
                <TestimonialCard
                  text={testimonial.text}
                  author={testimonial.author}
                  role={testimonial.role}
                  rating={testimonial.rating}
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className={styles.carouselControls}>
          <button 
            className={`${styles.carouselButton} ${styles.prevButton} ${startIndex === 0 ? styles.disabledButton : ''}`}
            onClick={prevSlide}
            disabled={startIndex === 0}
            aria-label="Đánh giá trước"
          >
            &#10094;
          </button>
          
          <div className={styles.carouselDots}>
            {Array(totalSlides).fill(0).map((_, index) => (
              <span 
                key={index} 
                className={`${styles.carouselDot} ${startIndex === index ? styles.activeDot : ''}`}
                onClick={() => setStartIndex(index)}
                role="button"
                aria-label={`Đánh giá ${index + 1}`}
                tabIndex="0"
              />
            ))}
          </div>
          
          <button 
            className={`${styles.carouselButton} ${styles.nextButton} ${startIndex === maxStartIndex ? styles.disabledButton : ''}`}
            onClick={nextSlide}
            disabled={startIndex === maxStartIndex}
            aria-label="Đánh giá tiếp theo"
          >
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
}