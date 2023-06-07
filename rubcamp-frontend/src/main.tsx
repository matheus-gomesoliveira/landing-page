import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home.js'
import GlobalStyle from './styles/globals.js'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle/>
      <Home />
  </React.StrictMode>,
)
