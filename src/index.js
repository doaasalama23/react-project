import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import style from './components/index.css';
import {BrowserRouter} from 'react-router-dom'
import {Routes} from 'react-router-dom'
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ,
  document.getElementById('root')
);

