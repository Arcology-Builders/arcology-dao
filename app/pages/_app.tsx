import '../styles/globals.css'
import NavBar from '../src/components/NavBar'
import { ThemeProvider } from '@emotion/react'
import { theme } from '../src/themes/theme';
import ContextProvider from '../src/context/ContextProvider';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ContextProvider>
        <ThemeProvider theme={theme}>
          <NavBar />
          <Component {...pageProps} />
        </ThemeProvider>
      </ContextProvider>
    </>
  )
}

export default MyApp