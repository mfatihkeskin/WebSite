import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';  // Eğer özel bir stil dosyanız varsa

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);