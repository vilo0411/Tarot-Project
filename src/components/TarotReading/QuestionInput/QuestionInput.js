import React, { useState, useEffect } from 'react';
import styles from './QuestionInput.module.css';

const QuestionInput = ({
  question,
  onChange,
  isDisabled = false,
  placeholder = "Nhập câu hỏi của bạn ở đây...",
  maxLength = 150,
  showCharacterCount = false,
  showHints = false,
  className = "",
  onSubmit = () => {},
}) => {
  // State to track validation and character count
  const [isValid, setIsValid] = useState(true);
  const [validationMessage, setValidationMessage] = useState("");
  const [characterCount, setCharacterCount] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  
  // Minimum number of characters required for a valid question
  const MIN_CHARACTERS = 10;

  // Update character count when question changes
  useEffect(() => {
    setCharacterCount(question.length);
    
    // Validate the question
    if (question.trim().length < MIN_CHARACTERS && question.trim().length > 0) {
      setIsValid(false);
      setValidationMessage(`Câu hỏi cần ít nhất ${MIN_CHARACTERS} ký tự để hiệu quả`);
    } else {
      setIsValid(true);
      setValidationMessage("");
    }
  }, [question]);

  // Handle input change
  const handleInputChange = (e) => {
    const value = e.target.value;
    
    // If maxLength is set, enforce it
    if (maxLength && value.length > maxLength) {
      return;
    }
    
    onChange(e);
  };

  // Handle key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && isValid && question.trim().length >= MIN_CHARACTERS) {
      e.preventDefault();
      onSubmit();
    }
  };

  // Handle submit button click
  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (isValid && question.trim().length >= MIN_CHARACTERS) {
      onSubmit();
    }
  };

  // Calculate character count class based on current length
  const getCharacterCountClass = () => {
    if (characterCount === 0) {
      return styles.neutral;
    } else if (characterCount < MIN_CHARACTERS) {
      return styles.warning;
    } else if (maxLength && characterCount > maxLength * 0.8) {
      return styles.approaching;
    }
    return styles.good;
  };

  // Determine the container class based on validation and focus
  const getContainerClass = () => {
    let containerClass = styles.container;
    
    if (className) {
      containerClass += ` ${className}`;
    }
    
    if (!isValid && question.trim().length > 0) {
      containerClass += ` ${styles.invalid}`;
    }
    
    if (isFocused) {
      containerClass += ` ${styles.focused}`;
    }
    
    return containerClass;
  };

  return (
    <div className={getContainerClass()}>
      <label htmlFor="tarot-question" className={styles.label}>
        Câu hỏi của bạn
        {showCharacterCount && (
          <span className={`${styles.characterCount} ${getCharacterCountClass()}`}>
            {characterCount}{maxLength ? `/${maxLength}` : ""}
          </span>
        )}
      </label>
      
      <div className={styles.inputWrapper}>
        <textarea
          id="tarot-question"
          className={styles.textarea}
          value={question}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
          disabled={isDisabled}
          aria-invalid={!isValid}
          aria-describedby="question-validation-message question-hints"
          maxLength={maxLength || undefined}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        
        <button 
          className={`${styles.submitArrow} ${question.trim().length >= MIN_CHARACTERS ? styles.active : ''}`}
          onClick={handleSubmitClick}
          disabled={!isValid || question.trim().length < MIN_CHARACTERS || isDisabled}
          aria-label="Gửi câu hỏi"
        >
          ↑
        </button>
      </div>
      
      {validationMessage && !isValid && (
        <div 
          id="question-validation-message"
          className={styles.validationMessage}
          role="alert"
        >
          {validationMessage}
        </div>
      )}

    </div>
  );
};

export default QuestionInput;