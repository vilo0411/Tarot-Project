import React, { useState, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './ReadingResults.module.css';

// Import SpreadLayout để sử dụng trong kết quả
import SpreadLayout from '../../SpreadLayout/SpreadLayout';

const ReadingResults = ({
  reading = null,
  aiAnalysis = null,
  selectedCards = [],
  timestamp = new Date(),
  onSave = null,
  onReset = null,
  onShare = null,
  showControls = true,
  expandable = true,
  initiallyExpanded = true,
  className = "",
  isLoading = false,
  onEmailSubmit = null // Thêm prop mới để xử lý email
}) => {
  const [expanded, setExpanded] = useState(initiallyExpanded);
  const [activeTab, setActiveTab] = useState('full'); // 'full', 'summary', 'cards', 'ai', 'email'
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const resultRef = useRef(null);

  if (!reading && !isLoading) {
    return null;
  }

  // Quyết định loại trải bài dựa trên số lượng lá bài được chọn
  const getSpreadType = () => {
    if (!selectedCards || selectedCards.length === 0) return null;
    
    switch (selectedCards.length) {
      case 1:
        return { name: 'Rút 1 Lá', count: 1 };
      case 3:
        return { name: 'Rút 3 Lá', count: 3 };
      case 5:
        return { name: 'Rút 5 Lá', count: 5 };
      case 10:
        return { name: 'Rút 10 Lá', count: 10 };
      default:
        return { name: `Rút ${selectedCards.length} Lá`, count: selectedCards.length };
    }
  };

  // Tạo class container
  const getContainerClass = () => {
    let containerClass = styles.container;
    
    if (className) {
      containerClass += ` ${className}`;
    }
    
    if (expanded) {
      containerClass += ` ${styles.expanded}`;
    } else {
      containerClass += ` ${styles.collapsed}`;
    }
    
    return containerClass;
  };

  // Email validation function
  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  // Handle email input change
  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setIsEmailValid(validateEmail(inputEmail));
  };

  // Handle email submission
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    
    if (!isEmailValid) {
      alert('Vui lòng nhập địa chỉ email hợp lệ.');
      return;
    }

    try {
      setIsSubmitting(true);
      
      // Call the email submission handler passed from parent
      if (onEmailSubmit) {
        await onEmailSubmit(email, {
          reading,
          aiAnalysis,
          selectedCards,
          timestamp
        });
      }
      
      // Optional: Show success message
      alert('Chi tiết bói bài sẽ được gửi đến email của bạn.');
    } catch (error) {
      console.error('Email submission error:', error);
      alert('Có lỗi xảy ra. Vui lòng thử lại.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Toggle expanded state
  const toggleExpanded = () => {
    if (expandable) {
      setExpanded(!expanded);
    }
  };

  // Render tabs
  const renderTabs = () => (
    <div className={styles.tabs}>
      <button 
        className={`${styles.tab} ${activeTab === 'full' ? styles.activeTab : ''}`}
        onClick={() => setActiveTab('full')}
      >
        Toàn bộ kết quả
      </button>
      <button 
        className={`${styles.tab} ${activeTab === 'summary' ? styles.activeTab : ''}`}
        onClick={() => setActiveTab('summary')}
      >
        Tóm tắt
      </button>
      <button 
        className={`${styles.tab} ${activeTab === 'cards' ? styles.activeTab : ''}`}
        onClick={() => setActiveTab('cards')}
      >
        Từng lá bài
      </button>
      {aiAnalysis && (
        <button 
          className={`${styles.tab} ${activeTab === 'ai' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('ai')}
        >
          Phân tích AI
        </button>
      )}
      <button 
        className={`${styles.tab} ${activeTab === 'email' ? styles.activeTab : ''}`}
        onClick={() => setActiveTab('email')}
      >
        Nhận Bài Qua Email
      </button>
    </div>
  );

  // Render tab content
  const renderTabContent = () => {
    switch (activeTab) {
      case 'email':
        return (
          <div className={styles.emailTab}>
            <h3>Nhận Chi Tiết Bói Bài Qua Email</h3>
            <form onSubmit={handleEmailSubmit} className={styles.emailForm}>
              <input 
                type="email" 
                placeholder="Nhập địa chỉ email của bạn" 
                value={email}
                onChange={handleEmailChange}
                className={`${styles.emailInput} ${isEmailValid ? styles.validEmail : ''}`}
                required
              />
              <button 
                type="submit" 
                className={styles.emailSubmitButton}
                disabled={!isEmailValid || isSubmitting}
              >
                {isSubmitting ? 'Đang gửi...' : 'Gửi Chi Tiết'}
              </button>
            </form>
            {!isEmailValid && email && (
              <p className={styles.emailError}>
                Vui lòng nhập địa chỉ email hợp lệ
              </p>
            )}
            <p className={styles.emailNote}>
              Chúng tôi sẽ gửi chi tiết bói bài đầy đủ và chuyên sâu đến email của bạn.
            </p>
          </div>
        );
      default:
        // Giữ nguyên logic render các tab khác
        return renderExistingTabContent(activeTab);
    }
  };

  // Render existing tab content (bạn sẽ phải triển khai hàm này)
  const renderExistingTabContent = (tabName) => {
    switch (tabName) {
      case 'full':
        return (
          <div className={styles.fullTab}>
            <ReactMarkdown>{reading?.text || ''}</ReactMarkdown>
          </div>
        );
      case 'summary':
        return (
          <div className={styles.summaryTab}>
            <ReactMarkdown>{reading?.summary || ''}</ReactMarkdown>
          </div>
        );
      case 'cards':
        return (
          <div className={styles.cardsTab}>
            {/* Thêm logic hiển thị chi tiết từng lá bài */}
            <p>Chi tiết từng lá bài</p>
          </div>
        );
      case 'ai':
        return (
          <div className={styles.aiTab}>
            <ReactMarkdown>{aiAnalysis?.text || ''}</ReactMarkdown>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={getContainerClass()} ref={resultRef}>
      <div className={styles.header}>
        <div className={styles.titleSection}>
          <h2 className={styles.title}>Kết Quả Bói Bài</h2>
          <span className={styles.timestamp}>
            {timestamp.toLocaleString()}
          </span>
        </div>
        
        {expandable && (
          <button 
            className={styles.expandButton}
            onClick={toggleExpanded}
            aria-expanded={expanded}
            aria-label={expanded ? "Thu gọn kết quả" : "Mở rộng kết quả"}
          >
            {expanded ? '▼' : '▲'}
          </button>
        )}
      </div>
      
      {expanded && (
        <div className={styles.content}>
          {/* Thêm SpreadLayout */}
          <div className={styles.spreadLayoutContainer}>
            <SpreadLayout
              selectedCards={selectedCards}
              spreadType={getSpreadType()}
              isBack={false}
            />
          </div>
          
          {renderTabs()}
          
          <div className={styles.tabContent}>
            {isLoading ? (
              <div className={styles.loadingMessage}>
                <div className={styles.loadingSpinner}></div>
                <p>Đang phân tích bài Tarot của bạn...</p>
              </div>
            ) : (
              renderTabContent()
            )}
          </div>
          
          {/* Thêm phần điều khiển */}
          {showControls && !isLoading && (
            <div className={styles.controls}>
              {/* Thêm các nút điều khiển */}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ReadingResults;