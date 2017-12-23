/**
 * Created by Faiqa Jahangir on 12/22/2017.
 */


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import  * as ReactBootstrap from 'react-bootstrap';


const {
    Navbar,
    Nav,
    NavItem,
    Grid, Row, Col
} = ReactBootstrap;

class NavbarInstance extends React.Component {
    render() {
        return (
            <Navbar inverse>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">FMWT Inventory</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="#">Login</NavItem>
                    <NavItem eventKey={2} href="#">Register</NavItem>
                </Nav>
            </Navbar>
        );
    }
}

class Footer extends React.Component {
    render() {
        return (
            <Row>
                <Col md={12} style={{background: 'black', textAlign: 'center', color: 'white'}}>
                    <h6>Copy Rights Reserved 2018</h6>
                </Col>
            </Row>
        );
    }
}

class LoginFOrm extends React.Component {
    render() {
        return (
            <Grid style={{marginTop:'2%'}}>
                <Row>

                </Row>
            </Grid>
        );
    }
}

class App extends React.Component {
    render() {
        return ([
            <NavbarInstance></NavbarInstance>,
            <LoginFOrm></LoginFOrm>,
            <Footer></Footer>

        ]);
    }
}

ReactDOM.render(<App />, document.body);