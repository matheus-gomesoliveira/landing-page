import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './pages/Main.js'
import GlobalStyle from './styles/globals.js'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle/>
      <Main />
  </React.StrictMode>,
)
