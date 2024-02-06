import * as React from 'react'
import { useRouter } from 'next/router'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  project: { 
    link: 'https://github.com/phannhatchanh',
    // icon: (
    //   <svg width="24" height="24" viewBox="0 0 256 256">
    //     <path
    //       fill="currentColor"
    //       d="m231.9 169.8l-94.8 65.6a15.7 15.7 0 0 1-18.2 0l-94.8-65.6a16.1 16.1 0 0 1-6.4-17.3L45 50a12 12 0 0 1 22.9-1.1L88.5 104h79l20.6-55.1A12 12 0 0 1 211 50l27.3 102.5a16.1 16.1 0 0 1-6.4 17.3Z"
    //     ></path>
    //   </svg>
    // )
  },
  
  docsRepositoryBase: 'https://github.com/phannhatchanh/today-i-learned',
  useNextSeoProps: () => {
    const { frontMatter } = useConfig()

    const defaultTitle =
      frontMatter.overrideTitle || "| Today I Learned"

    return {
      description: frontMatter.description,
      defaultTitle,
      titleTemplate: `%s | Today I Learned`,
    }
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
    'https://til.phannhatchanh.com' +
    (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
    
    const ogImgLink=encodeURI(`https://res.cloudinary.com/phannhatchanh/image/upload/w_1600,h_836,q_100/l_text:Comfortaa_72_bold:${frontMatter.title ?? 'Today I Learned'},co_rgb:ffe4e6,c_fit,w_1400,h_240/fl_layer_apply,g_south_west,x_100,y_180/l_text:Nunito_48:${frontMatter.title ? "Chanh's knowledge base" : 'Personal Knowledge Base'},co_rgb:ffe4e680,c_fit,w_1400/fl_layer_apply,g_south_west,x_100,y_100/l_text:Nunito_30:https%253A%252F%252Ftil.phannhatchanh.com,co_rgb:ffe4e680,c_fit,w_1400/fl_layer_apply,g_south_west,x_100,y_40/l_twitter_name:phannhatchanh/c_thumb,g_face,r_max,w_380,h_380,q_100/fl_layer_apply,w_240,g_north_west,x_700,y_100/website/grain-gradient.png`)

    return (
      <>
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="vi" />
        <meta name="description" content={frontMatter.description || "TIL: chanh's knowledge base"} />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImgLink} />
        <meta name="twitter:site:domain" content={url} />
        <meta name="twitter:url" content={url} />
        <meta name="twitter:creator" content="@phannhatchanh" />

        {/* OpenGraph Meta */}
        <meta
          name="og:title"
          content={frontMatter.title || "TIL: chanh's knowledge base"}
        />
        <meta name="og:url" content={url} />
        <meta name="og:type" content="website" />
        <meta property="og:locale" content="vi_IE" />
        <meta property="og:site_name" content={frontMatter.title ||"Today I Learned | Chánh"} />
        <meta name="og:description" content={frontMatter.description || "TIL: chanh's knowledge base"} />
        <meta name="og:image" content={ogImgLink} />

        <meta name="apple-mobile-web-app-title" content={frontMatter.title || "TIL: chanh's knowledge base"} />
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
  primaryHue: { light: 290, dark: 50 },
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
    text: (
      <a href="https://til.phannhatchanh.com/misc/recreate-page-like-this">
        🎉 How to create page like this?. Check it out →
      </a>
    ),
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  navigation: true,
  logo: (
    <>
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="nx-w-5 nx-h-5 nx-mr-2" xmlns="http://www.w3.org/2000/svg"><path d="M490.39 182.75c-5.55-13.19-14.77-22.7-26.67-27.49l-.16-.06a46.46 46.46 0 0 0-17-3.2h-.64c-27.24.41-55.05 23.56-69.19 57.61-10.37 24.9-11.56 51.68-3.18 71.64 5.54 13.2 14.78 22.71 26.73 27.5l.13.05a46.53 46.53 0 0 0 17 3.2c27.5 0 55.6-23.15 70-57.65 10.24-24.87 11.37-51.63 2.98-71.6zM381.55 329.61c-15.71-9.44-30.56-18.37-40.26-34.41C314.53 250.8 298.37 224 256 224s-58.57 26.8-85.39 71.2c-9.72 16.06-24.6 25-40.36 34.48-18.07 10.86-36.74 22.08-44.8 44.16a66.93 66.93 0 0 0-4.65 25c0 35.95 28 65.2 62.4 65.2 17.75 0 36.64-6.15 56.63-12.66 19.22-6.26 39.09-12.73 56.27-12.73s37 6.47 56.15 12.73C332.2 457.85 351 464 368.8 464c34.35 0 62.3-29.25 62.3-65.2a67 67 0 0 0-4.75-25c-8.06-22.1-26.74-33.33-44.8-44.19zM150 188.85c11.9 14.93 27 23.15 42.52 23.15a42.88 42.88 0 0 0 6.33-.47c32.37-4.76 52.54-44.26 45.92-90C242 102.3 234.6 84.39 224 71.11 212.12 56.21 197 48 181.49 48a42.88 42.88 0 0 0-6.33.47c-32.37 4.76-52.54 44.26-45.92 90 2.76 19.2 10.16 37.09 20.76 50.38zm163.16 22.68a42.88 42.88 0 0 0 6.33.47c15.53 0 30.62-8.22 42.52-23.15 10.59-13.29 17.95-31.18 20.75-50.4 6.62-45.72-13.55-85.22-45.92-90a42.88 42.88 0 0 0-6.33-.47C315 48 299.88 56.21 288 71.11c-10.6 13.28-18 31.19-20.76 50.44-6.62 45.72 13.55 85.22 45.92 89.98zM111.59 308.8l.14-.05c11.93-4.79 21.16-14.29 26.69-27.48 8.38-20 7.2-46.75-3.15-71.65C120.94 175.16 92.85 152 65.38 152a46.4 46.4 0 0 0-17 3.2l-.14.05c-11.9 4.75-21.13 14.29-26.66 27.48-8.38 20-7.2 46.75 3.15 71.65C39.06 288.84 67.15 312 94.62 312a46.4 46.4 0 0 0 16.97-3.2z"></path></svg>
      <span className="nx-mr-2 nx-font-extrabold md:nx-inline">T.I.L</span>
      <span className="text-gray-600 font-normal md:inline">phannhatchanh.com</span>
    </>
  ),
  editLink: { text: 'Edit this page →' },
  toc: {
    backToTop: true
  },
  footer: {
    text: (
      <div>
        2020 - {new Date().getFullYear()} |{' '}
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
  //   { locale: 'en', text: 'English' },
  //   { locale: 'vn', text: 'Vietnamese' },
  // ],
}

export default config