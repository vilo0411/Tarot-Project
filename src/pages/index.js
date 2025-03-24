import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HeroSection from '@site/src/components/HomePage/HeroSection';
import CTASection from '@site/src/components/HomePage/CTASection';
import FAQSection from '@site/src/components/HomePage/FAQSection';
import TestimonialSection from '@site/src/components/HomePage/TestimonialSection';
import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <div className={styles.globalGridBackground}>
        <div className={styles.globalGridContent}>
            <HeroSection />
            <TestimonialSection />
            <FAQSection />
            <CTASection />
        </div>
      </div>
    </Layout>
  );
}