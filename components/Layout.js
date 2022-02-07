import PropTypes from 'prop-types'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

const siteName = 'Next.js Starter'

export default function Layout({ children, title, description }) {
  return (
    <>
      <Head>
        <title>{title ? `${title} — Next.js Starter` : siteName}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
}

Layout.defaultProps = {
  description: 'This is a Next.js + Tailwind starter to kick start development',
}
