/**
 * Created by Jung Soo-jin on 2018-11-13.
 */
import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import Header from './Header';
import Container from './Container';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: '',
        };
    }

    componentDidMount(){
        fetch('/header')
            .then(res => res.json())
            // .then(res => res.text())
            .then(result => {
                this.setState({data: result.data})
            })
    }

    shouldComponentUpdate(nextProps, nextState){
        return true;
    }

    render() {
        return (
            <div>
                <h1>{this.state.data}</h1>
                <h2></h2>
                <Header/>
                <Container/>
            </div>
        );
    }
}

export default Main;