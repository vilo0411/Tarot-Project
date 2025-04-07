import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HeroSection from '@site/src/components/HomePage/HeroSection';
import CTASection from '@site/src/components/HomePage/CTASection';
import FAQSection from '@site/src/components/HomePage/FAQSection';
import TestimonialSection from '@site/src/components/HomePage/TestimonialSection';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title='Tarot Guide Online - Tổng hợp kiến thức về lá bài, trải bài và bói bài online'
      description='Website học ý nghĩa 78 lá bài, các loại trải bài và luận bài online hoàn toàn miễn phí'
    >
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