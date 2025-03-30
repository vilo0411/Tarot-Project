import React from 'react';
import Head from '@docusaurus/Head';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function HeadComponent(props) {
  const { pathname } = useLocation();
  const { siteConfig } = useDocusaurusContext();
  const { title, description, image, keywords, children } = props;

  // Get default title and description from Docusaurus config
  const defaultTitle = siteConfig.title;
  const defaultDescription = siteConfig.tagline;

  return (
    <>
      {/* Default Docusaurus Head content */}
      <Head>
        <title>{title || defaultTitle}</title>
        <meta name="description" content={description || defaultDescription} />
        {keywords && keywords.length > 0 && (
          <meta name="keywords" content={keywords.join(',')} />
        )}
        {image && <meta property="og:image" content={image} />}
        {children}
      </Head>

      {/* Add Font Awesome for social icons */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" 
        integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" 
        crossOrigin="anonymous" 
        referrerPolicy="no-referrer" 
      />
    </>
  );
}