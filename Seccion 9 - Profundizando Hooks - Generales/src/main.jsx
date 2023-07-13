import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
// import CounterWithCustomHook from './01-useState/CounterWithCustomHook'
// import SimpleForm from './02-useEffect/SimpleForm'
import FormWithCustomHook from './02-useEffect/FormWithCustomHook'
// import CounterApp from './01-useState/CounterApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <FormWithCustomHook/>
  // </React.StrictMode>,
)
