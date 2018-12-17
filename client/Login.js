/**
 * Created by Jung Soo-jin on 2018-11-13.
 */
import React, {Component} from 'react';
import {
    Jumbotron,
    Grid,
    Row,
    PageHeader,
    small,
    Button,
    Form,
    FormControl,
    FormGroup,
    Col,
    ControlLabel,
    Checkbox
} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'

/* images */
import Images from "./Images";

class Login extends Component {
    render() {
        return (

            <div className="login">
                <header><img src={Images().logo_login}/></header>

                <Form horizontal>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            Email
                        </Col>
                        <Col sm={10}>
                            <FormControl type="text" placeholder="Ip"/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                            Password
                        </Col>
                        <Col sm={10}>
                            <FormControl type="text" placeholder="Port"/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            Username
                        </Col>
                        <Col sm={10}>
                            <FormControl type="text" placeholder="Username"/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                            Password
                        </Col>
                        <Col sm={10}>
                            <FormControl type="password" placeholder="Password"/>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Checkbox>Remember me</Checkbox>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <LinkContainer to="/main">
                                <Button bsStyle="primary" bsSize="small">Connect Server</Button>
                            </LinkContainer>
                        </Col>
                    </FormGroup>
                </Form>

                <footer><img src={Images().logo_bottom}/></footer>
            </div>
        );
    }
}

export default Login;
