import React from "react";
import ReactDOM  from "react-dom/client";
import { App } from "./HelloWorldApp";
import { FirstApp } from "./FirstApp";
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App></App>
        <FirstApp></FirstApp>
    </React.StrictMode>
);