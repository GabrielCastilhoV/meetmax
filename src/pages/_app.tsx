import type { AppProps } from 'next/app'
import { AppProvider } from 'providers'

import { globalStyles } from 'styles/global'

const MyApp = ({ Component, pageProps }: AppProps) => {
  globalStyles()

  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
