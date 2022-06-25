import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

import mirageFakeServer from './pages/home/api-services/fakeTaskApi'

// Just to get the fakeServer executed
if (mirageFakeServer) {
  console.log('Mirage Fake Server is ready', mirageFakeServer)
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
