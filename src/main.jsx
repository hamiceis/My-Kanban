import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './styles/global.css'
import { BoardProvider } from './components/Context/boardContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BoardProvider>
      <App />
    </BoardProvider>
  </React.StrictMode>
)
