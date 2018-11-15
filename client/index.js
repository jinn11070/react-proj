/**
 * Created by Jung Soo-jin on 2018-11-13.
 */
import React from "react";
import ReactDOM from "react-dom";
import App from './App';
// import * as ajax from './ajax';

require('./scss/index.scss');

ReactDOM.render(
    <App/>, document.getElementById("root")
);

module.hot.accept();


