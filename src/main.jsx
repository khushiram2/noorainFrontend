import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import ConetxtProvider from "./contextApi/ConetxtProvider.jsx";
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
 <ConetxtProvider>
    <React.StrictMode>
    <App />
  </React.StrictMode>,
    </ConetxtProvider>
  </BrowserRouter>
)
