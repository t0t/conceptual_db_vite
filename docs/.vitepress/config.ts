import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'en-US',
  title: '+0+1234',
  description: 'Comprehensive web development documentation and guides',

  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: '+0+1234' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],

  themeConfig: {
    logo: {
      light: '/logo.svg',
      dark: '/logo.svg'
    },

    siteTitle: '+0+1234',

    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Inicio', link: '/', ariaLabel: 'Home Page' },
      { text: 'Example', link: '/example', ariaLabel: 'Example Page' },
      { text: 'Guía de Imágenes', link: '/image-guide', ariaLabel: 'Image Guide' },
      { text: 'Lenguaje Natural', link: '/lenguaenatural', ariaLabel: 'Lenguaje Natural' },
      { text: 'Prompts', link: '/prompts', ariaLabel: 'Prompts' },
      { text: 'Estilos Markdown', link: '/markdown-styles', ariaLabel: 'Markdown Styles' }
    ],

    sidebar: [
      {
        text: 'Guías',
        items: [
          { text: 'Inicio', link: '/' },
          { text: 'Example', link: '/example' },
          { text: 'Guía de Imágenes', link: '/image-guide' },
          { text: 'Lenguaje Natural', link: '/lenguaenatural' },
          { text: 'Prompts', link: '/prompts' },
          { text: 'Estilos Markdown', link: '/markdown-styles' },
          { text: 'Acerca de', link: '/readme' }
        ],
      },
    ],

    appearance: {
      toggleButton: true
    },
  },

  build: {
    minify: true,
  },

  sitemap: {
    hostname: 'https://your-site.com'
  }
});