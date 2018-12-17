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
                <header><img src={Images().logo_login} className="img-fluid"/></header>

                <div className="login-form">
                    <Form horizontal>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                        </Col>
                        <Col>
                            <FormControl type="text" placeholder="IP Address"/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                        </Col>
                        <Col>
                            <FormControl type="text" placeholder="Port"/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                        </Col>
                        <Col>
                            <FormControl type="text" placeholder="Username"/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                        </Col>
                        <Col>
                            <FormControl type="password" placeholder="Password"/>
                        </Col>
                    </FormGroup>

                    {/*<FormGroup>*/}
                        {/*<Col smOffset={2} >*/}
                            {/*<Checkbox>Remember me</Checkbox>*/}
                        {/*</Col>*/}
                    {/*</FormGroup>*/}

                    <FormGroup>
                        <Col smOffset={2} >
                            <LinkContainer to="/main">
                                <Button bsStyle="login" bsSize="large">Connect Server</Button>
                            </LinkContainer>
                        </Col>
                    </FormGroup>
                </Form>
                </div>

                <footer><p>Copyright(C) 1999-2019 www.Datastreams.co.kr All Rights Reserved.</p></footer>
            </div>
        );
    }
}

export default Login;
