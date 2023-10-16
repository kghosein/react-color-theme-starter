import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ColorThemeContextProvider } from './context/ColorThemeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ColorThemeContextProvider>
      <App />
    </ColorThemeContextProvider>
  </React.StrictMode>,
)
