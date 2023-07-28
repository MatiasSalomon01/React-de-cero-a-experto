import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import "./index.css"
import MainApp from './context/pages/MainApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MainApp />
  </BrowserRouter>
  // <React.StrictMode>
  // </React.StrictMode>,
)
