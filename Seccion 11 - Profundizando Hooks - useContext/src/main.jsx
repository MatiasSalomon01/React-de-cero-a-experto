import React from 'react'
import ReactDOM from 'react-dom/client'
import MainApp from './MainApp.jsx'
import { BrowserRouter } from "react-router-dom"
import "./index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MainApp />
  </BrowserRouter>
  // <React.StrictMode>
  // </React.StrictMode>,
)
