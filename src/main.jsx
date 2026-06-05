import { StrictMode } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { createRoot } from 'react-dom/client'
import { Router } from '../routes'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './styles/globalStyles.js'
import { ToastContainer } from 'react-toastify'
import AppProvider from './hooks/index.jsx'
import stripePromise from './config/stripeConfig.js'
import { ThemeProvider } from 'styled-components'
import { standardTheme } from './styles/themes/standard.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={standardTheme}>
      <AppProvider>
        <Elements stripe={stripePromise}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </Elements>
        <GlobalStyle />
        <ToastContainer autoClose={2000} theme='colored' />
      </AppProvider>
    </ThemeProvider>
  </StrictMode>,
)
