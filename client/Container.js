/**
 * Created by Jung Soo-jin on 2018-11-14.
 */
import React from "react";
import { ButtonToolbar, Button } from 'react-bootstrap';

const Container = () => {
    return (
        <div>
            <p className="title">Container</p>
            <p>여긴 내용 들어가여 두껍고 길어여</p>

            <ButtonToolbar>
                <Button>Default</Button>
                <Button bsStyle="primary">Primary</Button>
                <Button bsStyle="warning">Warning</Button>
            </ButtonToolbar>
        </div>
    );
};

export default Container;


