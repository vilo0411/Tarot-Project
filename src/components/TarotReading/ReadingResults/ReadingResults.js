// src/components/TarotReading/ReadingResults/index.js
import React, { useState, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './ReadingResults.module.css';

const ReadingResults = ({
  reading = null,
  selectedCards = [],
  timestamp = new Date(),
  onSave = null,
  onReset = null,
  onShare = null,
  showControls = true,
  expandable = true,
  initiallyExpanded = true,
  className = "",
  isLoading = false
}) => {
  const [expanded, setExpanded] = useState(initiallyExpanded);
  const resultRef = useRef(null);
  const [activeTab, setActiveTab] = useState('full'); // 'full', 'summary', 'cards'
  
  if (!reading && !isLoading) {
    return null;
  }
  
  const toggleExpanded = () => {
    if (expandable) {
      setExpanded(!expanded);
    }
  };
  
  const handleSave = () => {
    if (onSave && typeof onSave === 'function') {
      onSave(reading, selectedCards);
    } else {
      // Fallback save method if no custom handler provided
      try {
        const blob = new Blob(
          [
            `# Tarot Reading Results\n\n` +
            `Date: ${timestamp.toLocaleString()}\n\n` +
            `Cards: ${selectedCards.map(card => `${card.name} (${card.isReversed ? 'Reversed' : 'Upright'})`).join(', ')}\n\n` +
            (reading?.text || '')
          ],
          { type: 'text/markdown' }
        );
        
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `tarot-reading-${timestamp.toISOString().slice(0, 10)}.md`;
        a.click();
        URL.revokeObjectURL(url);
      } catch (error) {
        console.error('Error saving reading:', error);
      }
    }
  };
  
  const handleShare = () => {
    if (onShare && typeof onShare === 'function') {
      onShare(reading, selectedCards);
    } else {
      // Fallback share method if supported by browser
      if (navigator.share) {
        navigator.share({
          title: 'My Tarot Reading',
          text: `Tarot Reading (${timestamp.toLocaleDateString()}): ${selectedCards.map(card => card.name).join(', ')}`,
          // url: window.location.href // Optional: if you want to share the URL
        }).catch(error => console.error('Error sharing:', error));
      } else {
        // Copy to clipboard fallback
        try {
          navigator.clipboard.writeText(
            `Tarot Reading (${timestamp.toLocaleDateString()})\n` +
            `Cards: ${selectedCards.map(card => `${card.name} (${card.isReversed ? 'Reversed' : 'Upright'})`).join(', ')}\n\n` +
            (reading?.text || '')
          );
          alert('Reading copied to clipboard!');
        } catch (error) {
          console.error('Error copying to clipboard:', error);
        }
      }
    }
  };
  
  const handleReset = () => {
    if (onReset && typeof onReset === 'function') {
      onReset();
    }
  };
  
  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    
    if (!printWindow) {
      alert('Please allow pop-ups to print your reading');
      return;
    }
    
    const formattedDate = timestamp.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    // Generate the cards HTML
    const cardsHtml = selectedCards.map(card => `
      <div class="print-card">
        <h3>${card.name} (${card.isReversed ? 'Reversed' : 'Upright'})</h3>
      </div>
    `).join('');
    
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Tarot Reading - ${formattedDate}</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 800px;
              margin: 0 auto;
              padding: 20px;
            }
            h1 {
              text-align: center;
              border-bottom: 1px solid #ddd;
              padding-bottom: 10px;
              margin-bottom: 20px;
            }
            h2 {
              margin-top: 30px;
              font-size: 1.4rem;
              border-bottom: 1px solid #eee;
              padding-bottom: 8px;
            }
            .print-date {
              text-align: center;
              font-style: italic;
              color: #666;
              margin-bottom: 30px;
            }
            .print-cards {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              gap: 20px;
              margin: 20px 0;
            }
            .print-card {
              border: 1px solid #ddd;
              padding: 15px;
              border-radius: 5px;
              text-align: center;
              flex: 0 0 200px;
            }
            .print-reading {
              margin-top: 40px;
            }
            @media print {
              body {
                font-size: 12pt;
              }
            }
          </style>
        </head>
        <body>
          <h1>Tarot Reading</h1>
          <div class="print-date">${formattedDate}</div>
          
          <h2>Selected Cards</h2>
          <div class="print-cards">
            ${cardsHtml}
          </div>
          
          <div class="print-reading">
            <h2>Reading Interpretation</h2>
            ${reading?.text ? reading.text.replace(/\n/g, '<br>') : 'No interpretation available'}
          </div>
        </body>
      </html>
    `);
    
    printWindow.document.close();
    
    // Give the browser a moment to process the document before printing
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 500);
  };
  
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
  
  // Function to extract a summary from the reading text
  const getSummary = () => {
    if (!reading?.text) return null;
    
    // Try to find a conclusion section
    const conclusionMatch = reading.text.match(/## Kết luận[\s\S]*?(?=##|$)/i) || 
                            reading.text.match(/## Conclusion[\s\S]*?(?=##|$)/i);
    
    if (conclusionMatch) {
      return conclusionMatch[0];
    }
    
    // Otherwise, get the first paragraph or first 200 characters
    const firstParagraph = reading.text.split('\n\n')[0];
    if (firstParagraph && firstParagraph.length > 20) {
      return firstParagraph;
    }
    
    return reading.text.substring(0, 200) + (reading.text.length > 200 ? '...' : '');
  };
  
  // Function to extract card-specific interpretations
  const getCardInterpretations = () => {
    if (!reading?.text) return [];
    
    return selectedCards.map(card => {
      // Try to find a section about this specific card
      const cardPattern = new RegExp(`${card.name}[^#]*?(?=##|$)`, 'i');
      const cardMatch = reading.text.match(cardPattern);
      
      return {
        card,
        interpretation: cardMatch ? cardMatch[0] : null
      };
    });
  };
  
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
    </div>
  );
  
  const renderTabContent = () => {
    switch (activeTab) {
      case 'summary':
        return (
          <div className={styles.summaryTab}>
            <ReactMarkdown>{getSummary()}</ReactMarkdown>
          </div>
        );
      case 'cards':
        return (
          <div className={styles.cardsTab}>
            {getCardInterpretations().map((item, index) => (
              <div key={index} className={styles.cardInterpretation}>
                <h3 className={styles.cardTitle}>
                  {item.card.name} {item.card.isReversed ? '(Ngược)' : '(Thuận)'}
                </h3>
                {item.interpretation ? (
                  <ReactMarkdown>{item.interpretation}</ReactMarkdown>
                ) : (
                  <p className={styles.noInterpretation}>
                    Không tìm thấy phân tích cụ thể cho lá bài này.
                  </p>
                )}
              </div>
            ))}
          </div>
        );
      case 'full':
      default:
        return (
          <div className={styles.fullTab}>
            <ReactMarkdown>{reading?.text || ''}</ReactMarkdown>
          </div>
        );
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
          
          {showControls && !isLoading && (
            <div className={styles.controls}>
              <button 
                className={`${styles.controlButton} ${styles.saveButton}`}
                onClick={handleSave}
                title="Lưu kết quả"
              >
                💾 Lưu
              </button>
              
              <button 
                className={`${styles.controlButton} ${styles.printButton}`}
                onClick={handlePrint}
                title="In kết quả"
              >
                🖨️ In
              </button>
              
              <button 
                className={`${styles.controlButton} ${styles.shareButton}`}
                onClick={handleShare}
                title="Chia sẻ kết quả"
              >
                🔗 Chia sẻ
              </button>
              
              <button 
                className={`${styles.controlButton} ${styles.resetButton}`}
                onClick={handleReset}
                title="Bói lại"
              >
                🔄 Bói lại
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ReadingResults;