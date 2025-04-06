// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tarot Guide Online',
  tagline: 'Hướng dẫn toàn diện về bộ bài Tarot',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://tarotguideonline.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'vilo0411', // Usually your GitHub org/user name.
  projectName: 'Tarot-Project', // Usually your repo name.
  deploymentBranch: 'demo', // Branch sẽ được sử dụng cho GitHub Pages

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        //   sidebarPath: './sidebars.js',
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/vilo0411/Tarot-Project/edit/main/',
        // },
        // blog: false,
        // //   {
        // //   showReadingTime: true,
        // //   feedOptions: {
        // //     type: ['rss', 'atom'],
        // //     xslt: true,
        // //   },
        // //   // Please change this to your repo.
        // //   // Remove this to remove the "edit this page" links.
        // //   editUrl:
        // //     'https://github.com/vilo0411/Tarot-Project/edit/main/',
        // //   // Useful options to enforce blogging best practices
        // //   onInlineTags: 'warn',
        // //   onInlineAuthors: 'warn',
        // //   onUntruncatedBlogPosts: 'warn',
        // // },
        // theme: {
        //   customCss: './src/css/custom.css',
        // },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'cards',
        path: 'cards',
        routeBasePath: 'cards',
        sidebarPath: require.resolve('./sidebars-cards.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'spreads',
        path: 'spreads',
        routeBasePath: 'spreads',
        sidebarPath: require.resolve('./sidebars-spreads.js'),
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/tarot-social-card.jpg',
      navbar: {
        logo: {
          alt: 'Tarot Guide Online Logo',
          src: 'img/logo_tarot.svg',
        },
        items: [
          {
            to: '/cards/',
            activeBasePath: '/cards/',
            label: 'Lá Bài',
            position: 'left',
          },
          {
            to: '/spreads/',
            activeBasePath: '/spreads/',
            label: 'Trải Bài',
            position: 'left',
          },
          {
            type: 'dropdown',
            label: 'Đọc bài',
            to: '/reading',
            className: 'navbar-dropdown-hover',
            items: [
              {
                label: 'One Card Tarot',
                to: '/reading/one-card-tarot',
              },
              {
                label: 'Three Card Tarot',
                to: '/reading/three-cards-tarot',
              },
              {
                label: 'Five Cards Tarot',
                to: '/reading/five-cards-tarot',
              }
            ],
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Site Map',
            items: [
              {
                label: 'Trang chủ',
                to: '/',
              },
              {
                label: 'Các Lá Bài',
                to: '/cards',
              },
              {
                label: 'Trải Bài',
                to: '/spreads',
              }
            ],
          },
          {
            title: ' ',
            items: [
              {
                label: 'Đọc bài',
                to: '/reading',
              },
              {
                label: 'Bói Tarot 1 lá',
                to: '/one-card-tarot',
              },
              {
                label: 'Bói Tarot 3 lá',
                to: '/three-cards-tarot',
              },
              {
                label: 'Bòi Tarot 5 lá',
                to: '/five-cards-tarot',
              },
            ],
          },
          {
            title: 'Thông tin khác',
            items: [
              {
                label: 'Liên Hệ',
                to: '/contact-us',
              },
              {
                label: 'Chính sách',
                to: '/privacy',
              },
              {
                label: 'Phản Hồi',
                to: '/feedback',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Tarot Guide Online. All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      }
    }),
};

export default config;
