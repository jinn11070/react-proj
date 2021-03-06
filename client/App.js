/**
 * Created by Jung Soo-jin on 2018-11-13.
 */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

/* css */
import './scss/index.scss';

/* pages */
import Login from "./Login";
import Main from "./Main";

class App extends Component {
    render() {

        const App = () => (
            <div>
                <Switch>
                    <Route exact path='/' component={Login}/>
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



