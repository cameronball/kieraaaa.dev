import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
var express = require('express');
var app = express();
var PORT = 80;

app.get('/', function (req, res) {
    const currentUrl = req.get("host");
    console.log(currentUrl)
    ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root'),
    )
    res.end();
});


// res.redirect(301, 'https://kieraaaa.xyz/');
// console.log('no dont includes domain_name in ', hostname);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
