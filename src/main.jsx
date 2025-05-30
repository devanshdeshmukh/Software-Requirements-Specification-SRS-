// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import App from './App.jsx';
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from 'react-router-dom'; // ✅ Add this

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <BrowserRouter> {/* ✅ Wrap App with BrowserRouter */}
//       <App />
//     </BrowserRouter>
//   </StrictMode>,
// );


// src/main.jsx or src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
