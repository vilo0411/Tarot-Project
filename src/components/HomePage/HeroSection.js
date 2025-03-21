import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useColorMode } from '@docusaurus/theme-common';

export default function HeroSection() {
  const { colorMode } = useColorMode();
  const isDarkTheme = colorMode === 'dark';

  return (
    <div className={`hero-grid-background ${isDarkTheme ? 'dark' : ''}`}>
      <div className="hero-container">
        <style jsx>{`
          /* Grid background that adapts to dark mode */
          .hero-grid-background {
            position: relative;
            width: 100%;
            background-color: var(--ifm-background-color);
            background-image:
              linear-gradient(rgba(209, 213, 219, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(209, 213, 219, 0.15) 1px, transparent 1px);
            background-size: 60px 60px;
            background-position: -1px -1px;
          }
          
          .hero-grid-background.dark {
            background-image:
              linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px);
          }
          
          .hero-grid-background::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image:
              linear-gradient(rgba(209, 213, 219, 0.05) 2px, transparent 2px),
              linear-gradient(90deg, rgba(209, 213, 219, 0.05) 2px, transparent 2px);
            background-size: 30px 30px;
            pointer-events: none;
          }
          
          .hero-grid-background.dark::before {
            background-image:
              linear-gradient(rgba(255, 255, 255, 0.03) 2px, transparent 2px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.03) 2px, transparent 2px);
          }

          .hero-container {
            padding: 40px 20px;
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          
          .hero-heading {
            font-size: 2.5rem;
            font-weight: bold;
            text-align: center;
            margin-bottom: 20px;
            color: var(--ifm-heading-color);
          }
          
          .hero-description {
            max-width: 800px;
            margin: 0 auto 40px;
            text-align: center;
            color: var(--ifm-color-emphasis-700);
            font-size: 1.1rem;
            line-height: 1.6;
          }
          
          .card-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
            width: 100%;
          }
          
          .card-row {
            display: flex;
            justify-content: center;
            gap: 20px;
            width: 100%;
          }
          
          .card {
            position: relative;
            border-radius: 16px;
            overflow: hidden;
            border: 1px solid var(--ifm-color-emphasis-200);
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
            transition: all 0.3s ease;
            text-decoration: none !important;
            display: flex;
            flex-direction: column;
          }
          
          .card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          }
          
          .standard-card {
            width: 350px;
            max-width: calc(50% - 10px);
          }
          
          .wide-card {
            width: 720px;
            max-width: calc(100% - 40px);
          }
          
          .card-content {
            padding: 24px;
            color: var(--ifm-font-color-base);
          }
          
          .card-title {
            display: flex;
            align-items: center;
            font-size: 1.25rem;
            font-weight: bold;
            color: var(--ifm-heading-color);
            transition: color 0.3s ease;
            margin-bottom: 12px;
            text-decoration: none !important;
          }
          
          .card-icon {
            font-size: 24px;
            margin-right: 12px;
          }
          
          .card-description {
            font-size: 0.95rem;
            color: var(--ifm-color-emphasis-700);
            line-height: 1.5;
            text-decoration: none !important;
          }
          
          .card-image {
            margin-top: 8px;
            width: 100%;
            transition: transform 0.5s ease;
          }
          
          .card:hover .card-image {
            transform: scale(1.05);
          }
          
          /* Remove all link decoration */
          a {
            text-decoration: none !important;
            color: inherit;
          }
          
          /* Card-specific styles adapted for both light/dark modes */
          .card-meanings {
            background: var(--ifm-background-color);
          }
          
          .card-meanings:hover {
            background: linear-gradient(to top right, var(--ifm-background-color), var(--ifm-background-color), rgba(30, 64, 175, 0.1));
            border-color: #1e40af;
          }
          
          .card-meanings:hover .card-title {
            color: #1e40af;
          }
          
          .card-meanings .card-icon {
            color: #1e40af;
          }
          
          .card-spreads {
            background: ${isDarkTheme ? '#1a2536' : '#f0f9ff'};
          }
          
          .card-spreads:hover {
            background: linear-gradient(to top right, ${isDarkTheme ? '#1a2536' : '#f0f9ff'}, ${isDarkTheme ? '#1a2536' : '#f0f9ff'}, rgba(126, 34, 206, 0.1));
            border-color: #7e22ce;
          }
          
          .card-spreads:hover .card-title {
            color: ${isDarkTheme ? '#a78bfa' : '#7e22ce'};
          }
          
          .card-spreads .card-icon {
            color: ${isDarkTheme ? '#a78bfa' : '#7e22ce'};
          }
          
          .card-readings {
            background: ${isDarkTheme ? '#2c271e' : '#fffbeb'};
          }
          
          .card-readings:hover {
            background: linear-gradient(to top right, ${isDarkTheme ? '#2c271e' : '#fffbeb'}, ${isDarkTheme ? '#2c271e' : '#fffbeb'}, rgba(194, 65, 12, 0.1));
            border-color: #c2410c;
          }
          
          .card-readings:hover .card-title {
            color: ${isDarkTheme ? '#f97316' : '#c2410c'};
          }
          
          .card-readings .card-icon {
            color: ${isDarkTheme ? '#f97316' : '#c2410c'};
          }
        `}</style>

        <h2 className="hero-heading">
          Discover Tarot Reading
        </h2>
        <p className="hero-description">
          Explore the mystical world of Tarot with our comprehensive guide. 
          Learn card meanings, spreads, and interpretations to unlock insights 
          into your past, present, and future.
        </p>

        <div className="card-container">
          {/* Row 1: Card Meanings and Spreads */}
          <div className="card-row">
            <Link
              to={TAROT_FEATURES[0].link}
              className={`card standard-card ${TAROT_FEATURES[0].cardClass}`}
            >
              <div className="card-content">
                <h3 className="card-title">
                  <span className="card-icon">{TAROT_FEATURES[0].icon}</span>
                  {TAROT_FEATURES[0].title}
                </h3>
                <p className="card-description">{TAROT_FEATURES[0].text}</p>
              </div>
            </Link>
            
            <Link
              to={TAROT_FEATURES[1].link}
              className={`card standard-card ${TAROT_FEATURES[1].cardClass}`}
            >
              <div className="card-content">
                <h3 className="card-title">
                  <span className="card-icon">{TAROT_FEATURES[1].icon}</span>
                  {TAROT_FEATURES[1].title}
                </h3>
                <p className="card-description">{TAROT_FEATURES[1].text}</p>
              </div>
            </Link>
          </div>
          
          {/* Row 2: Interactive Readings (Wide Card) */}
          <div className="card-row">
            <Link
              to={TAROT_FEATURES[2].link}
              className={`card wide-card ${TAROT_FEATURES[2].cardClass}`}
            >
              <div className="card-content">
                <h3 className="card-title">
                  <span className="card-icon">{TAROT_FEATURES[2].icon}</span>
                  {TAROT_FEATURES[2].title}
                </h3>
                <p className="card-description">{TAROT_FEATURES[2].text}</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Dữ liệu tính năng Tarot với hình ảnh cho cả Light và Dark mode
const TAROT_FEATURES = [
  {
    title: 'Card Meanings',
    link: '/cards',
    icon: '♠️',
    text: 'Explore the detailed meanings of all 78 Tarot cards, including Major and Minor Arcana with upright and reversed interpretations.',
    cardClass: 'card-meanings',
  },
  {
    title: 'Spreads',
    link: '/spreads',
    icon: '🔮',
    text: 'Discover various Tarot spreads for different purposes - from simple three-card spreads to complex Celtic Cross layouts.',
    cardClass: 'card-spreads',
  },
  {
    title: 'Interactive Readings',
    link: '/tarot-reading',
    icon: '✨',
    text: 'Try our interactive Tarot reading tool to gain insights into your questions and situations with personalized interpretations.',
    cardClass: 'card-readings',
  },
];