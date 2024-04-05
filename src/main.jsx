import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { NextUIProvider } from '@nextui-org/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <style>
      </style>
      <main className='dark text-foreground w-full'>
        <App />
      </main>
    </NextUIProvider>
  </React.StrictMode>
)
