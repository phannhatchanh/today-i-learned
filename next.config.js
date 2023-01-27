const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

/** @type {import('next').NextConfig} */
module.exports = withNextra({
  // i18n: {
  //   locales: ['en', 'vn'],
  //   defaultLocale: 'en'
  // }
  experimental: {
    optimizeCss: true,
  },
})