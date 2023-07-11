import React from "react";
import ReactDOM  from "react-dom/client";
import { App } from "./HelloWorldApp";
import { FirstApp } from "./FirstApp";
import './styles.css';
import { Tarea } from "./Tarea";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
       
        <Tarea value={10}></Tarea>
    </React.StrictMode>
);