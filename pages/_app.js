import 'nextra-theme-docs/style.css'
import './style.css'

const Nextra = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(<Component {...pageProps} />)
}

export default Nextra
