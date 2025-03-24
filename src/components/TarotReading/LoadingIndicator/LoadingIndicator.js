// src/components/TarotReading/LoadingIndicator/index.js
import React from 'react';
import styles from './LoadingIndicator.module.css';

const LoadingIndicator = ({ 
  message = "Đang tải...",
  size = "medium", // small, medium, large
  type = "spinner", // spinner, dots, shimmer, cards
  showMessage = true,
  className = "",
  overlay = false,
  fullPage = false,
  transparent = false
}) => {
  const getContainerClass = () => {
    let containerClass = styles.container;
    
    if (className) {
      containerClass += ` ${className}`;
    }
    
    if (overlay) {
      containerClass += ` ${styles.overlay}`;
    }
    
    if (fullPage) {
      containerClass += ` ${styles.fullPage}`;
    }
    
    if (transparent) {
      containerClass += ` ${styles.transparent}`;
    }
    
    return containerClass;
  };
  
  const getLoaderClass = () => {
    let loaderClass = styles.loader;
    
    if (size === 'small') {
      loaderClass += ` ${styles.small}`;
    } else if (size === 'large') {
      loaderClass += ` ${styles.large}`;
    }
    
    return loaderClass;
  };
  
  const renderLoader = () => {
    switch (type) {
      case 'dots':
        return (
          <div className={`${getLoaderClass()} ${styles.dots}`}>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
          </div>
        );
        
      case 'shimmer':
        return (
          <div className={`${getLoaderClass()} ${styles.shimmer}`}>
            <div className={styles.shimmerBar}></div>
          </div>
        );
        
      case 'cards':
        return (
          <div className={`${getLoaderClass()} ${styles.cards}`}>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
          </div>
        );
        
      case 'spinner':
      default:
        return <div className={`${getLoaderClass()} ${styles.spinner}`}></div>;
    }
  };
  
  return (
    <div className={getContainerClass()}>
      <div className={styles.content}>
        {renderLoader()}
        
        {showMessage && message && (
          <p className={styles.message}>{message}</p>
        )}
      </div>
    </div>
  );
};

export default LoadingIndicator;