/** @type {import('nextra-theme-docs').DocsThemeConfig} */
export default {
  project: { link: 'https://github.com/phannhatchanh' },
  docsRepositoryBase: 'https://github.com/phannhatchanh/til',
  branch: 'main',
  navigation: {
    next: true,
    prev: true,
  },
  unstable_flexsearch: true,
  float: true,
  darkMode: true,
  titleSuffix: ' | Today I Learned',
  logo: (
    <>
      <span className="mr-2 font-extrabold md:inline">TIL</span>
      <span className="text-gray-600 font-normal md:inline">phannhatchanh.com</span>
    </>
  ),
  head: ({ title, meta }) => {
    const ogImgLink=`https://res.cloudinary.com/phannhatchanh/image/upload/w_1600,h_836,q_100/l_text:Comfortaa_72_bold:${title ?? 'Today I Learned'},co_rgb:ffe4e6,c_fit,w_1400,h_240/fl_layer_apply,g_south_west,x_100,y_180/l_text:Nunito_48:${title ? "Chanh's knowledge base" : 'Personal Knowledge Base'},co_rgb:ffe4e680,c_fit,w_1400/fl_layer_apply,g_south_west,x_100,y_100/l_text:Nunito_30:https%253A%252F%252Ftil.phannhatchanh.com,co_rgb:ffe4e680,c_fit,w_1400/fl_layer_apply,g_south_west,x_100,y_40/l_twitter_name:tv0656m006/c_thumb,g_face,r_max,w_380,h_380,q_100/fl_layer_apply,w_240,g_north_west,x_700,y_100/website/grain-gradient.png`

    return (
      <>
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="description" content="TIL: chanh's knowledge base" />
        <meta name="og:description" content="TIL: chanh's knowledge base" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImgLink} />
        <meta name="twitter:site:domain" content="til.phannhatchanh.com" />
        <meta name="twitter:url" content="https://til.phannhatchanh.com" />
        <meta name="og:title" content="TIL: chanh's knowledge base" />
        <meta name="og:image" content={ogImgLink} />
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
  editLink: () => 'Edit this page →',
  footer: {
    text: (
      <>
        2019 - {new Date().getFullYear()} |{' '}
        <a href="https://phannhatchanh.com" 
          style={{
            textDecoration: 'underline',
          }}>Phan Nhat Chanh</a>.<br />
        Feel free to let me know if there are some content which are outdated /
        need to be updated{' '}
        <a href="mailto:phannhatchanh@gmail.com?subject=til.phannhatchanh.com&body=which-page-url-and-give-some-details-of-your-request-or-question" 
        style={{
          textDecoration: 'underline',
        }}>
          here</a>.
      </>
    ),
  },
  // i18n: [
  //   { locale: 'en', text: 'English' },
  //   { locale: 'id', text: 'Bahasa Indonesia' },
  // ],
}