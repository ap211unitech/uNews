import '@/styles/globals.css'
import Layout from '@/components/Layout'
import { Fragment } from 'react'

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  )
}
