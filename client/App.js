/**
 * Created by Jung Soo-jin on 2018-11-13.
 */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

/* images */
import Images from "./Images";

/* pages */
import ConnectServer from "./ConnectServer";
import Main from "./Main";

class App extends Component {
    render() {

        const App = () => (
            <div>
                <img src={Images().logo_login}/>

                <Switch>
                    <Route exact path='/' component={ConnectServer}/>
                    <Route path='/main' component={Main}/>
                </Switch>

                <img src={Images().logo_bottom}/>
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



