// src/components/HomePage/CTASection.js
import React from 'react';
import Link from '@docusaurus/Link';
import styles from './CTASection.module.css';

export default function CTASection() {
  return (
    <div className={styles.ctaSection}>
      <div className={styles.ctaContainer}>
        <h2 className={styles.ctaTitle}>
          <span className={styles.ctaTitleDark}>Trải nghiệm</span>{' '}
          <span className={styles.ctaTitlePurple}>Đọc bài Tarot</span>{' '}
          <span className={styles.ctaTitleDark}>Miễn Phí</span>
        </h2>
        <p className={styles.ctaDescription}>
          Trải nghiệm hệ thống bói bài tarot trực tuyến mới nhất năm 2025 và các bài kiểm tra bói toán tarot
        </p>
        <div className={styles.ctaButtonContainer}>
          <Link to="/reading" className={styles.ctaButton}>
            Bắt đầu bói
          </Link>
        </div>
      </div>
    </div>
  );
}