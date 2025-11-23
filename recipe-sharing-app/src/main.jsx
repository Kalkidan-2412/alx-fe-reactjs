import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css' // if you have tailwind or your styles


createRoot(document.getElementById('root')).render(
<React.StrictMode>
<App />
</React.StrictMode>
)
