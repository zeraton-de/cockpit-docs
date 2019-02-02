const resolve = require('path').resolve

module.exports = {
    title: 'Cockpit CMS Docs',
    host: 'localhost',
    themeConfig: {
      lastUpdated: 'Last Updated',
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/guide/' },
        { text: 'Documentation', link: '/documentation/' },
        { text: 'Community Forum', link: 'https://discourse.getcockpit.com'},
        { text: 'Zeraton', link: 'https://zeraton.de' },
        { text: 'Imprint', link: '/imprint.md' },
        { text: 'Privacy', link: '/privacy.md' },
      ],
      sidebar: {
        '/guide/': [
          {
            title: 'Basics',
            collapsable: false,
            children: [
              '',
              'basics/docker',
              'basics/configuration',
              'basics/concepts',
              'basics/field-types',
              'basics/cli',
            ]
          },
          {
            title: 'API',
            collapsable: false,
            children: [
              'api/authentification',
              'api/credentials',
            ]
          },
          {
            title: 'Add-Ons',
            collapsable: false,
            children: [
              'addons/',
              'addons/layout-components',
            ]
          },
        ],
  
        '/documentation/': [
          '',
          'file-structure',
          'events',
          'services',
          'configuration',
          'modules',
          'helpers',
        ],
  
        // fallback
        '/': []
      }
    },
    markdown: {
      toc: {
        includeLevel: [3]
      }
    },
    configureWebpack: {
      resolve: {
        alias: {
          '@assets': resolve('./assets/')
        }
      }
    },
    dest: 'public',
    base: '/cockpit-docs/'
  }