import React, { Suspense,useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './src/App'
import './index.css'
import './src/i18n.js'
import uiComponents from './src/ui-components'
import { WeatherContextProvider } from './src/context/context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback={<div>Loading...</div>}>
    <WeatherContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </WeatherContextProvider>
  </Suspense>
)