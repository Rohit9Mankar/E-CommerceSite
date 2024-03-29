import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';


/*
Bootstrap configuration
*/

import '../node_modules/react-bootstrap/dist/react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import NavProvider from './Store/NavProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NavProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </NavProvider>




);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

