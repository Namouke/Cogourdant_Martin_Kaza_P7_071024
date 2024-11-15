import React from "react";
import ReactDOM from "react-dom/client";

import AppRouter from "./AppRouter";
import "./style/main.scss"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <AppRouter />
    </React.StrictMode>
);
