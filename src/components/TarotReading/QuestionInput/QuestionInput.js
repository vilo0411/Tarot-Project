// src/components/TarotReading/QuestionInput/index.js
import React, { useState, useEffect } from 'react';
import styles from './QuestionInput.module.css';

/**
 * QuestionInput component for Tarot reading questions
 * 
 * @param {Object} props
 * @param {string} props.question - Current question value
 * @param {function} props.onChange - Function to handle question changes
 * @param {boolean} props.isDisabled - Whether the input should be disabled
 * @param {string} props.placeholder - Placeholder text for the input
 * @param {number} props.maxLength - Maximum length of the question (optional)
 * @param {boolean} props.showCharacterCount - Whether to show character count (optional)
 * @param {boolean} props.showHints - Whether to show question hints (optional)
 * @param {string} props.className - Additional CSS class (optional)
 */
const QuestionInput = ({
  question,
  onChange,
  isDisabled = false,
  placeholder = "Nhập câu hỏi của bạn ở đây...",
  maxLength = 150,
  showCharacterCount = false,
  showHints = false,
  className = "",
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
      
      <textarea
        id="tarot-question"
        className={styles.textarea}
        value={question}
        onChange={handleInputChange}
        placeholder={placeholder}
        disabled={isDisabled}
        aria-invalid={!isValid}
        aria-describedby="question-validation-message question-hints"
        maxLength={maxLength || undefined}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      
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