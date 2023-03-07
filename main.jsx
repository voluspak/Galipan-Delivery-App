import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './src/App'
import ModalProvider from './src/Context/Modal/ModalProvider'
import './styles.css'

const root = createRoot(document.getElementById('app'))
root.render(
  <ModalProvider>
    <App />
  </ModalProvider>
)
