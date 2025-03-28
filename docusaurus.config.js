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
  url: 'https://vilo0411.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Tarot-Project',

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
    defaultLocale: 'en',
    locales: ['en'],
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
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'tarotguideonline',
        logo: {
          alt: 'Torotpedia Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/cards/',
            activeBasePath: '/cards/',
            label: 'Tarot Cards',
            position: 'left',
          },
          {
            to: '/spreads/',
            activeBasePath: '/spreads/',
            label: 'Tarot Spreads',
            position: 'left',
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'dropdown',
            label: 'Tarot Reading',
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
              },
              {
                label: 'Ten Card Tarot',
                to: '/reading/ten-cards-tarot',
              }
            ],
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Tài liệu',
            items: [
              {
                label: 'Các lá bài',
                to: '/cards',
              },
              {
                label: 'Cách trải bài',
                to: '/spreads',
              },
              {
                label: 'Xem bài',
                to: '/tarot-reading',
              },
            ],
          },
          {
            title: 'Cộng đồng',
            items: [
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/your-tarot-community',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/your-tarot-page',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/your-tarot-account',
              },
            ],
          },
          {
            title: 'Thêm',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/your-github-user/tarot-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Tarot Docs. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      }
    }),
};

export default config;
