/**
 * Created by Jung Soo-jin on 2018-11-13.
 */
import React, { Component } from 'react';
import Header from './Header';
import Container from './Container';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
        };
    }

    componentDidMount(){
        fetch('/header')
            .then(res => res.json())
            // .then(res => res.text())
            .then(data => {
                this.setState({title: data.title})
            })
    }

    shouldComponentUpdate(nextProps, nextState){
        return true;
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <Header/>
                <Container/>
            </div>
        );
    }
}

export default Main;