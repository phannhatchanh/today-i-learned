const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  unstable_flexsearch: true,
  unstable_staticImage: true,
})

/** @type {import('next').NextConfig} */
module.exports = withNextra({
  // i18n: {
  //   locales: ['en', 'vi'],
  //   defaultLocale: 'en'
  // },
  experimental: {
    optimizeCss: true,
  },
})
