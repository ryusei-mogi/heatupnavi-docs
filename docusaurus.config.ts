import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const config: Config = {
  title: 'HeatupNavi',
  tagline: '天気×使用頻度。データで導く、かしこい給湯最適化。',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: isGitHubPages ? 'https://ryusei-mogi.github.io' : 'http://localhost:3000',
  baseUrl: isGitHubPages ? '/heatupnavi-docs/' : '/',

  organizationName: 'ryusei-mogi',
  projectName: 'heatupnavi-docs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  // フォントはOS標準（ヒラギノ等）を優先します。外部Webフォントは読み込みません。

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          // Keep docs under /docs so the LP homepage remains available at /.
          routeBasePath: '/docs',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
      defaultMode: 'dark',
      disableSwitch: false,
    },
    navbar: {
      title: 'HeatupNavi',
      logo: {
        alt: 'HeatupNavi',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'manualSidebar',
          position: 'left',
          label: 'ドキュメント',
        },
        {type: 'doc', docId: 'setup', label: 'セットアップ', position: 'left'},
        {type: 'doc', docId: 'usage', label: '使い方', position: 'left'},
        {type: 'doc', docId: 'settings', label: '設定', position: 'left'},
        {type: 'doc', docId: 'faq', label: 'FAQ', position: 'left'},
        {type: 'doc', docId: 'support', label: 'お問い合わせ', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'マニュアル',
          items: [
            {label: 'はじめに', to: '/docs/intro'},
            {label: '初回セットアップ', to: '/docs/setup'},
            {label: '画面の見方', to: '/docs/screens'},
            {label: '使い方（毎日の流れ）', to: '/docs/usage'},
            {label: '設定の詳細', to: '/docs/settings'},
            {label: '機能ガイド', to: '/docs/features'},
          ],
        },
        {
          title: 'サポート',
          items: [
            {label: 'FAQ', to: '/docs/faq'},
            {label: '権限とデータの扱い', to: '/docs/privacy'},
            {label: 'お問い合わせ', to: '/docs/support'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} HeatupNavi`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
