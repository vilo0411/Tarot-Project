// src/components/TarotReading/InstructionBox/index.js
import React, { useState } from 'react';
import styles from './InstructionBox.module.css';

const InstructionBox = ({
  title = "Hướng Dẫn",
  steps = [],
  expandable = false,
  initiallyExpanded = true,
  icon = "📋",
  className = "",
  variant = "default" // default, compact, detailed
}) => {
  const [isExpanded, setIsExpanded] = useState(initiallyExpanded);

  const toggleExpand = () => {
    if (expandable) {
      setIsExpanded(!isExpanded);
    }
  };

  const getContainerClass = () => {
    let containerClass = styles.container;
    
    if (className) {
      containerClass += ` ${className}`;
    }
    
    if (variant === 'compact') {
      containerClass += ` ${styles.compact}`;
    } else if (variant === 'detailed') {
      containerClass += ` ${styles.detailed}`;
    }
    
    return containerClass;
  };

  return (
    <div className={getContainerClass()}>
      <div 
        className={`${styles.header} ${expandable ? styles.expandable : ''}`}
        onClick={toggleExpand}
      >
        <div className={styles.titleContainer}>
          <span className={styles.icon}>{icon}</span>
          <h3 className={styles.title}>{title}</h3>
        </div>
        
        {expandable && (
          <button 
            className={styles.expandButton}
            aria-expanded={isExpanded}
            aria-label={isExpanded ? "Thu gọn hướng dẫn" : "Mở rộng hướng dẫn"}
          >
            {isExpanded ? '▲' : '▼'}
          </button>
        )}
      </div>
      
      {(!expandable || isExpanded) && (
        <div className={styles.content}>
          {steps.length > 0 && (
            <ol className={styles.stepsList}>
              {steps.map((step, index) => (
                <li key={index} className={styles.step}>
                  {typeof step === 'object' ? (
                    <>
                      <div className={styles.stepTitle}>{step.title}</div>
                      {step.description && (
                        <div className={styles.stepDescription}>{step.description}</div>
                      )}
                    </>
                  ) : (
                    step
                  )}
                </li>
              ))}
            </ol>
          )}
          
          {/* For additional content passed as children */}
          {!steps.length && (
            <div className={styles.customContent}>
              {/* This will be rendered if no steps are provided */}
              <p className={styles.defaultMessage}>
                Hãy làm theo các bước để có trải nghiệm Tarot tốt nhất. Nếu bạn có câu hỏi, vui lòng tham khảo phần FAQ hoặc liên hệ với chúng tôi.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default InstructionBox;