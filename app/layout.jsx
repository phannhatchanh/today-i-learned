/* eslint-env node */
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { PawPrintIcon } from 'lucide-react'
import 'nextra-theme-docs/style.css'

export const metadata = {
  metadataBase: new URL('https://til.phannhatchanh.com'),
  title: {
    template: '%s - Today I Learned',
  },
  description: "Today I Learned: chanh's knowledge base",
  applicationName: 'T.I.L',
  generator: 'T.I.L',
  appleWebApp: {
    title: 'Today I Learned',
  },
  other: {
    'msapplication-TileImage': '/favicon-32x32.png',
    'msapplication-TileColor': '#fff',
  },
  twitter: {
    site: 'https://til.phannhatchanh.com',
    creator: '@phannhatchanh',
    card: 'summary_large_image',
  },
}

export default async function RootLayout({ children }) {
  const banner = (
    <Banner storageKey="some-key">
      <a href="https://til.phannhatchanh.com/misc/recreate-page-like-this">
        🎉 How to create page like this?. Check it out →
      </a>
    </Banner>
  )
  const navbar = (
    <Navbar
      logo={
        <div className="x:flex x:items-center x:gap-2">
          <div className="x:flex x:items-center x:justify-center x:size-6">
            <PawPrintIcon className="x:size-full" />
          </div>
          <span className="x:font-medium x:text-base x:leading-none">
            Today I Learned
          </span>
        </div>
      }
      chatLink="https://x.com/phannhatchanh"
      chatIcon={
        <svg width="24" height="24" viewBox="0 0 248 204">
          <path
            fill="currentColor"
            d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07 7.57 1.46 15.37 1.16 22.8-.87-23.56-4.76-40.51-25.46-40.51-49.5v-.64c7.02 3.91 14.88 6.08 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71c25.64 31.55 63.47 50.73 104.08 52.76-4.07-17.54 1.49-35.92 14.61-48.25 20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26-3.77 11.69-11.66 21.62-22.2 27.93 10.01-1.18 19.79-3.86 29-7.95-6.78 10.16-15.32 19.01-25.2 26.16z"
          ></path>
        </svg>
      }
      projectLink="https://github.com/phannhatchanh/today-i-learned"
    />
  )
  const footer = (
    <Footer>
      <div>
        2019 - {new Date().getFullYear()}{' '}
        <a
          href="https://phannhatchanh.com"
          className="x:underline x:underline-offset-4"
        >
          phannhatchanh.com
        </a>
        <p className="x:text-sm x:text-gray-500">
          Feel free to let me know if there are some content which are outdated
          / need to be updated{' '}
          <a
            href="mailto:phannhatchanh@gmail.com?subject=til.phannhatchanh.com&amp;body=which-page-url-and-give-some-details-of-your-request-or-question"
            className="x:underline x:underline-offset-4"
          >
            here
          </a>
          .
        </p>
      </div>
    </Footer>
  )

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head
        backgroundColor={{
          dark: 'rgb(15, 15, 15)',
          light: 'rgb(255, 250, 245)',
        }}
        color={{
          hue: { dark: 55, light: 220 },
          saturation: { dark: 100, light: 100 },
        }}
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          search={<Search />}
          editLink="Edit this page on GitHub"
          docsRepositoryBase="https://github.com/phannhatchanh/today-i-learned"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={await getPageMap()}
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
