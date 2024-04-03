import React from 'react'
import ReactDOM from 'react-dom/client'

import { GlobalStyle } from './global.ts'
import { App } from './App.tsx'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './themes/defaut.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
