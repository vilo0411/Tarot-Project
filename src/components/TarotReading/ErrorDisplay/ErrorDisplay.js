// src/components/TarotReading/ErrorDisplay/index.js
import React, { useState } from 'react';
import styles from './ErrorDisplay.module.css';

const ErrorDisplay = ({
  error = null,
  message = null,
  title = "Đã xảy ra lỗi",
  retryAction = null,
  dismissible = true,
  type = "error", // error, warning, info
  className = "",
  showDetails = false,
  icon = null
}) => {
  const [dismissed, setDismissed] = useState(false);
  
  // If explicitly dismissed or no error/message, don't render
  if (dismissed || (!error && !message)) {
    return null;
  }
  
  const getContainerClass = () => {
    let containerClass = styles.container;
    
    if (className) {
      containerClass += ` ${className}`;
    }
    
    switch (type) {
      case 'warning':
        containerClass += ` ${styles.warning}`;
        break;
      case 'info':
        containerClass += ` ${styles.info}`;
        break;
      case 'error':
      default:
        containerClass += ` ${styles.error}`;
        break;
    }
    
    return containerClass;
  };
  
  const getIconDisplay = () => {
    if (icon) {
      return icon;
    }
    
    switch (type) {
      case 'warning':
        return '⚠️';
      case 'info':
        return 'ℹ️';
      case 'error':
      default:
        return '❌';
    }
  };
  
  const handleDismiss = () => {
    setDismissed(true);
  };
  
  const handleRetry = () => {
    if (retryAction && typeof retryAction === 'function') {
      retryAction();
    }
  };
  
  // Extract the message from the error object if not explicitly provided
  const displayMessage = message || (error && (error.message || error.toString())) || 'Không thể xử lý yêu cầu của bạn.';
  
  return (
    <div className={getContainerClass()} role="alert">
      <div className={styles.content}>
        <div className={styles.iconContainer}>
          <span className={styles.icon}>{getIconDisplay()}</span>
        </div>
        
        <div className={styles.messageContainer}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.message}>{displayMessage}</p>
          
          {showDetails && error && error.stack && (
            <details className={styles.details}>
              <summary>Xem chi tiết lỗi</summary>
              <pre className={styles.stackTrace}>{error.stack}</pre>
            </details>
          )}
          
          {(retryAction || dismissible) && (
            <div className={styles.actions}>
              {retryAction && (
                <button 
                  className={styles.retryButton} 
                  onClick={handleRetry}
                  aria-label="Thử lại"
                >
                  Thử lại
                </button>
              )}
              
              {dismissible && (
                <button 
                  className={styles.dismissButton} 
                  onClick={handleDismiss}
                  aria-label="Đóng thông báo lỗi"
                >
                  Đóng
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ErrorDisplay;