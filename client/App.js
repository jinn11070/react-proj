/**
 * Created by Jung Soo-jin on 2018-11-13.
 */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import logo from './images/logo.png'
import favicon from './images/favicon.ico'
import logo_dstreams from './images/logo_dstreams.png'
import ConnectServer from "./ConnectServer";
import Main from "./Main";


class App extends Component {
    render() {

        const App = () => (
            <div>
                <img src={logo}/>
                <Switch>
                    <Route exact path='/' component={ConnectServer}/>
                    <Route path='/main' component={Main}/>
                </Switch>
            </div>
        )

        return (
            <Switch>
                <App/>
            </Switch>
        );
    }
}

export default App;



