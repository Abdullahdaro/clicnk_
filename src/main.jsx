import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { LanguageProvider } from './constant/LanguageContext';
import 'tailwindcss/tailwind.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider> 
      <App />
    </LanguageProvider>
  </React.StrictMode>,
)
