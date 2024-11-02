import * as React from 'react'
import { useRouter } from 'next/router'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  project: { 
    link: 'https://github.com/phannhatchanh/til',
    // icon: (
    //   <svg width="24" height="24" viewBox="0 0 256 256">
    //     <path
    //       fill="currentColor"
    //       d="m231.9 169.8l-94.8 65.6a15.7 15.7 0 0 1-18.2 0l-94.8-65.6a16.1 16.1 0 0 1-6.4-17.3L45 50a12 12 0 0 1 22.9-1.1L88.5 104h79l20.6-55.1A12 12 0 0 1 211 50l27.3 102.5a16.1 16.1 0 0 1-6.4 17.3Z"
    //     ></path>
    //   </svg>
    // )
  },
  
  docsRepositoryBase: 'https://github.com/phannhatchanh/til',

  head: function useHead() {
    const { asPath, defaultLocale, locale } = useRouter()
    const config = useConfig()
    const { route } = useRouter()
    
    const url =
    'https://til.phannhatchanh.com' +
    (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
    
    const isDefault = route === '/' || !config.title
    const ogImgLink =
      'https://nextra.site/' +
      (isDefault ? 'og.jpeg' : `/og?title=${config.title}`)
    const description =
    config.frontMatter.description ||
    'Today I Learned: chanh\'s knowledge base'
    const title = config.title + (route === '/' ? '' : ' - Today I Learned')

    return (
      <>
        <title>{title}</title>
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="vi" />
        <meta name="description" content={description || "TIL: chanh's knowledge base"} />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImgLink} />
        <meta name="twitter:site:domain" content={url} />
        <meta name="twitter:url" content={url} />
        <meta name="twitter:creator" content="@phannhatchanh" />

        {/* OpenGraph Meta */}
        <meta
          name="og:title"
          content={title || "TIL: chanh's knowledge base"}
        />
        <meta name="og:url" content={url} />
        <meta name="og:type" content="website" />
        <meta property="og:locale" content="vi_IE" />
        <meta property="og:site_name" content={title || "Today I Learned | Chánh"} />
        <meta name="og:description" content={description || "TIL: chanh's knowledge base"} />
        <meta name="og:image" content={ogImgLink} />

        <meta name="apple-mobile-web-app-title" content={title || "TIL: chanh's knowledge base"} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icon/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/icon/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/icon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icon/favicon-16x16.png"
        />
        <meta
          name="msapplication-TileImage"
          content="/icon/ms-icon-144x144.png"
        />
      </>
    )
  },
  darkMode: true,
  color: {
    hue: {
      dark: 50,
      light: 290
    },
    saturation: 100
  },
  chat: {
    link: 'https://twitter.com/phannhatchanh',
    icon: (
      <svg width="24" height="24" viewBox="0 0 248 204">
        <path
          fill="currentColor"
          d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07 7.57 1.46 15.37 1.16 22.8-.87-23.56-4.76-40.51-25.46-40.51-49.5v-.64c7.02 3.91 14.88 6.08 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71c25.64 31.55 63.47 50.73 104.08 52.76-4.07-17.54 1.49-35.92 14.61-48.25 20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26-3.77 11.69-11.66 21.62-22.2 27.93 10.01-1.18 19.79-3.86 29-7.95-6.78 10.16-15.32 19.01-25.2 26.16z"
        ></path>
      </svg>
    ),
  },
  banner: {
    key: 'how-to-create-page-like-this',
    content: (
      <a href="https://til.phannhatchanh.com/misc/recreate-page-like-this">
        🎉 How to create page like this?. Check it out →
      </a>
    ),
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  navigation: true,
  logo: (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nx-w-5 nx-h-5 nx-mr-2"><circle cx="11" cy="4" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="20" cy="16" r="2"/><path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"/></svg>
      <span className="nx-mr-2 nx-font-extrabold md:nx-inline">T.I.L</span>
      <span className="text-gray-600 font-normal md:inline">phannhatchanh.com</span>
    </>
  ),
  editLink: { content: 'Edit this page →' },
  toc: {
    backToTop: true
  },
  footer: {
    content: (
      <div>
        2019 - {new Date().getFullYear()} |{' '}
        <a
          href="https://phannhatchanh.com"
          className="nx-underline nx-underline-offset-4 nx-font-bold"
        >
          phannhatchanh.com
        </a>
        <p className="nx-text-sm nx-text-gray-500">
          Feel free to let me know if there are some content which are outdated
          / need to be updated{' '}
          <a
            href="mailto:phannhatchanh@gmail.com?subject=til.phannhatchanh.com&body=which-page-url-and-give-some-details-of-your-request-or-question"
            className="nx-underline nx-underline-offset-4"
          >
            here
          </a>
          .
        </p>
      </div>
    ),
  },
  // i18n: [
  //   { locale: 'en', name: 'English' },
  //   { locale: 'vn', name: 'Vietnamese' },
  // ],
}

export default config