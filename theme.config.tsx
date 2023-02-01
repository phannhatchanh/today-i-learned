import * as React from 'react'
import { useRouter } from 'next/router'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  project: { link: 'https://github.com/phannhatchanh' },
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
    const router = useRouter()
    const { title } = useConfig()

    const ogImgLink=encodeURI(`https://res.cloudinary.com/phannhatchanh/image/upload/w_1600,h_836,q_100/l_text:Comfortaa_72_bold:${title ?? 'Today I Learned'},co_rgb:ffe4e6,c_fit,w_1400,h_240/fl_layer_apply,g_south_west,x_100,y_180/l_text:Nunito_48:${title ? "Chanh's knowledge base" : 'Personal Knowledge Base'},co_rgb:ffe4e680,c_fit,w_1400/fl_layer_apply,g_south_west,x_100,y_100/l_text:Nunito_30:https%253A%252F%252Ftil.phannhatchanh.com,co_rgb:ffe4e680,c_fit,w_1400/fl_layer_apply,g_south_west,x_100,y_40/l_twitter_name:tv0656m006/c_thumb,g_face,r_max,w_380,h_380,q_100/fl_layer_apply,w_240,g_north_west,x_700,y_100/website/grain-gradient.png`)

    return (
      <>
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="description" content="TIL: chanh's knowledge base" />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImgLink} />
        <meta name="twitter:site:domain" content="til.phannhatchanh.com" />
        <meta name="twitter:url" content="https://til.phannhatchanh.com" />
        <meta name="twitter:creator" content="@tv0656m006" />

        {/* OpenGraph Meta */}
        <meta
          name="og:title"
          content={title ?? "TIL: chanh's knowledge base"}
        />
        <meta name="og:type" content="website" />
        <meta property="og:locale" content="en_IE" />
        <meta property="og:site_name" content="Today I Learned | Chánh" />
        <meta name="og:description" content="TIL: chanh's knowledge base" />
        <meta name="og:image" content={ogImgLink} />
        <meta name="og:url" content={`https://til.phannhatchanh.com${router.asPath}`} />

        <meta name="apple-mobile-web-app-title" content="T.I.L" />
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
  primaryHue: { light: 0, dark: 156 },
  chat: {
    link: 'https://twitter.com/tv0656m006',
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
    defaultMenuCollapseLevel: 0,
  },
  navigation: true,
  toc: {
    float: true,
    extraContent: true,
  },
  logo: (
    <>
      <span className="nx-mr-2 nx-font-extrabold md:nx-inline">T.I.L</span>
      <span className="text-gray-600 font-normal md:inline">phannhatchanh.com</span>
    </>
  ),
  editLink: { text: 'Edit this page →' },
  footer: {
    text: (
      <div>
        2020 - {new Date().getFullYear()} |{' '}
        <a
          href="https://phannhatchanh.com"
          target="_blank"
          rel="noopener noreferrer"
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