import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {NextUIProvider} from '@nextui-org/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <style>
        {`
          fondo {
            background-image: radial-gradient(circle, #1c1c1c, #1a1a1a, #171717, #151515, #121212, #121212, #121212, #121212, #151515, #171717, #1a1a1a, #1c1c1c);
          }
        `}
      </style>
      <main className='dark text-foreground fondo w-full'>
        <App />
      </main>
    </NextUIProvider>
  </React.StrictMode>
)
