/**
 * Created by Faiqa Jahangir on 1/3/2018.
 */
import React from 'react';
import Component from 'react';
import '../index.css';
import  * as ReactBootstrap from 'react-bootstrap';

const {
    Navbar,
    Nav,
    NavItem,
    NavDropdown,
    MenuItem,Row, Grid
} = ReactBootstrap;

const mainLayout = () => {
        return (
            <Row>
                <Navbar inverse>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">FMWT Inventory</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} href="/login">Login</NavItem>
                        <NavItem eventKey={2} href="register.js">Register</NavItem>
                        <NavDropdown eventKey={3} title="Products" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Category 1</MenuItem>
                            <MenuItem eventKey={3.2}>Category 2</MenuItem>
                            <MenuItem eventKey={3.3}>Category 3</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar>
             
            </Row>
        );
    }

export default mainLayout;