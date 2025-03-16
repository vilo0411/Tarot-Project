import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export function CategoryCard({ title, description, link, icon }) {
  return (
    <Link to={link} className={styles.cardLink}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <span className={styles.cardIcon}>{icon}</span>
          <h3 className={styles.cardTitle}>{title}</h3>
        </div>
        <div className={styles.cardContent}>
          <p className={styles.cardDescription}>{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default function CardLayout({ categories }) {
  return (
    <div className={styles.cardsContainer}>
      {categories.map((category, idx) => (
        <CategoryCard key={idx} {...category} />
      ))}
    </div>
  );
}