/**
 * Created by Jung Soo-jin on 2018-11-13.
 */
import React, { Component } from 'react';
import Header from './Header';
import Container from './Container';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            info: '',
        };
    }

    componentDidMount(){
        console.log("-------------componentDidMount-------------:");
        fetch('/list')
            .then(res => res.json())
            // .then(res => res.text())
            .then(data => {
                this.setState({info:data.key})
            })
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("-------------shouldComponentUpdate-------------: " + JSON.stringify(nextProps) + " " + JSON.stringify(nextState));
        return true;
    }

    render() {
        console.log("-------------render-------------")

        return (
            <div>
                <h1>DeltaStreamlkok {this.state.info}</h1>
                <Header/>
                <Container/>
            </div>
        );
    }
}

export default App;



