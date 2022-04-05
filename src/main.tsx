import React from 'react'
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App'
import './index.css'
import AppLegacy from "./AppLegacy";

const rootContainer = document.getElementById('root')!;
const root = createRoot(rootContainer);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.render(
  <React.StrictMode>
    <AppLegacy />
  </React.StrictMode>
  ,document.getElementById('root-legacy')
)
