/**
 * Created by Jung Soo-jin on 2018-11-13.
 */
import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/scss/bootstrap.scss';
import bg_login from './images/bg_login.png'
import './scss/index.scss';
import App from "./App";

ReactDOM.render(
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    , document.getElementById('root')
);

module.hot.accept();


