import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
const https = require('https')

const server = https.createServer(function(req, res) {
  if (req.hostname === 'kieraaaa.xyz') {
    ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root'),
    )
  } else {
    res.redirect(301, 'https://kieraaaa.xyz/')
  }
})
server.listen(80, function () {
  console.log("test");
});
// console.log('no dont includes domain_name in ', hostname);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
