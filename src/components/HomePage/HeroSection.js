import React from 'react';
import Link from '@docusaurus/Link';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <div className={styles.heroContainer}>
      <h2 className={styles.heroHeading}>
        Discover Tarot Reading
      </h2>
      <p className={styles.heroDescription}>
        Explore the mystical world of Tarot with our comprehensive guide. 
        Learn card meanings, spreads, and interpretations to unlock insights 
        into your past, present, and future.
      </p>

      <div className={styles.cardContainer}>
        {/* Row 1: Card Meanings and Spreads */}
        <div className={styles.cardRow}>
          <Link
            to={TAROT_FEATURES[0].link}
            className={`${styles.card} ${styles.standardCard} ${styles[TAROT_FEATURES[0].cardClass]}`}
          >
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>
                <span className={styles.cardIcon}>{TAROT_FEATURES[0].icon}</span>
                {TAROT_FEATURES[0].title}
              </h3>
              <p className={styles.cardDescription}>{TAROT_FEATURES[0].text}</p>
            </div>
          </Link>
          
          <Link
            to={TAROT_FEATURES[1].link}
            className={`${styles.card} ${styles.standardCard} ${styles[TAROT_FEATURES[1].cardClass]}`}
          >
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>
                <span className={styles.cardIcon}>{TAROT_FEATURES[1].icon}</span>
                {TAROT_FEATURES[1].title}
              </h3>
              <p className={styles.cardDescription}>{TAROT_FEATURES[1].text}</p>
            </div>
          </Link>
        </div>
        
        {/* Row 2: Interactive Readings (Wide Card) */}
        <div className={styles.cardRow}>
          <Link
            to={TAROT_FEATURES[2].link}
            className={`${styles.card} ${styles.wideCard} ${styles[TAROT_FEATURES[2].cardClass]}`}
          >
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>
                <span className={styles.cardIcon}>{TAROT_FEATURES[2].icon}</span>
                {TAROT_FEATURES[2].title}
              </h3>
              <p className={styles.cardDescription}>{TAROT_FEATURES[2].text}</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

// Dữ liệu tính năng Tarot
const TAROT_FEATURES = [
  {
    title: 'Card Meanings',
    link: '/cards',
    icon: '♠️',
    text: 'Explore the detailed meanings of all 78 Tarot cards, including Major and Minor Arcana with upright and reversed interpretations.',
    cardClass: 'cardMeanings',
  },
  {
    title: 'Spreads',
    link: '/spreads',
    icon: '🔮',
    text: 'Discover various Tarot spreads for different purposes - from simple three-card spreads to complex Celtic Cross layouts.',
    cardClass: 'cardSpreads',
  },
  {
    title: 'Interactive Readings',
    link: '/tarot-reading',
    icon: '✨',
    text: 'Try our interactive Tarot reading tool to gain insights into your questions and situations with personalized interpretations.',
    cardClass: 'cardReadings',
  },
];