import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from 'components/App'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import './i18n'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
