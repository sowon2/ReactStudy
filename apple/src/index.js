import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Clayful from "clayful/client-js";
import axiox from "axios";
import "./css/auth.css";

Clayful.config({
  client : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjBlYzE2M2E5MzhkNTdiZWMxNjYyZTg4ZjQ0YjRlNzU1OTdmOWNhMDIzODAwOWNjYTJmNjRiOGJmMWY0NmIwYmYiLCJyb2xlIjoiY2xpZW50IiwiaWF0IjoxNjQ0MjEzNjU5LCJzdG9yZSI6IllYSkIzTkhOODlTUi5CU1U0SDhWQkNVMjUiLCJzdWIiOiJUR1U1UlE3UDRMN0MifQ.qEmALrOyjHrSRzifBagzznI1ALIdYHBpg0DnF9DuQ5Q"
})

Clayful.install("request", require("clayful/plugins/request-axios")(axiox));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
