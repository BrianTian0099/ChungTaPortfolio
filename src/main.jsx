import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom"; 
import App from './App';
import './styles/Global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>    {/* ✅ 必須包住 App */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
