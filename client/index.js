/**
 * Created by Jung Soo-jin on 2018-11-13.
 */
import React, { Component } from 'react';
import { render } from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import App from "./App";

render(
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    , document.getElementById('root')
);

module.hot.accept();


