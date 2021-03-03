// import '../styles/globals.css'
import '../styles/custom-theme.scss'
import { CounterProvider } from '../components/Counter'

function MyApp({ Component, pageProps }) {
  return (
    <CounterProvider>
      <Component {...pageProps} />
    </CounterProvider>
  )
}

export default MyApp
