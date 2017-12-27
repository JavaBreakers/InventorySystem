import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import  * as ReactBootstrap from 'react-bootstrap';

import {Router, Route, Link, browserHistory} from 'react-router';
import BrowserHistory from 'react-router/lib/browserHistory';

const {
    Navbar,
    Nav,
    NavItem,
    NavDropdown,
    MenuItem,
    Grid, Row, Col, Thumbnail, Button, FormGroup, ControlLabel, FormControl, HelpBlock,
    Carousel
} = ReactBootstrap;

function FieldGroup({id, label, help, ...props}) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}

const Login = () => {
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
                    <NavItem eventKey={2} href="/register">Register</NavItem>
                </Nav>
            </Navbar>
            <Grid>
                <Col md={6} xsOffset={3} className="loginBox">
                    <form>
                        <FieldGroup
                            id="formControlsEmail"
                            type="email"
                            label="Email address"
                            placeholder="Enter Email"
                        />
                        <FieldGroup
                            id="formControlsPassword"
                            label="Password"
                            type="password"
                        />
                        <Button type="submit" bsStyle="primary" href="/productDetail">
                            Submit
                        </Button>
                    </form>
                </Col>
            </Grid>
            <Row>
                <Col md={12} style={{marginTop:'16.5%', background: 'black', textAlign: 'center', color: 'white'}}>
                    <h6>Copy Rights Reserved 2018</h6>
                </Col>
            </Row>
        </Row>
    );
};

const Register = () => {
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
                </Nav>
            </Navbar>
            <Grid>
                <Col md={6} xsOffset={3} className="loginBox" style={{marginTop:'5%'}}>
                    <form>
                        <FieldGroup
                            id="formControlsText"
                            type="text"
                            label="Full Name"
                            placeholder="Enter Name"
                        />
                        <FieldGroup
                            id="formControlsEmail"
                            type="email"
                            label="Email address"
                            placeholder="Enter Email"
                        />
                        <FieldGroup
                            id="formControlsPassword"
                            label="Password"
                            type="password"
                        />
                        <FieldGroup
                            id="formControlsPassword"
                            label="Repeat Password"
                            type="password"
                        />
                        <FormGroup>
                            <ControlLabel>Static text</ControlLabel>
                            <FormControl.Static>
                                email@example.com
                            </FormControl.Static>
                        </FormGroup>

                        <Button type="submit" bsStyle="primary" href="/productDetail">
                            Submit
                        </Button>
                    </form>
                </Col>
            </Grid>
            <Row>
                <Col md={12} style={{marginTop:'8%', background: 'black', textAlign: 'center', color: 'white'}}>
                    <h6>Copy Rights Reserved 2018</h6>
                </Col>
            </Row>
        </Row>
    );
};

const Products = () => {
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
            <Grid>
                <Row>
                    <Col md={12} style={{borderBottom: '1px solid lightgrey'}}>
                        <h2>Category >> Shoes</h2>
                    </Col>
                </Row>
            </Grid>

            <Grid style={{marginTop:'2%'}}>
                <Row>
                    <Col xs={4} md={3}>
                        <Thumbnail src={process.env.PUBLIC_URL + '/images/shoes.jpg'} alt="242x200">
                            <h3>Blink Light Shoes</h3>
                            <p>These white shoes can light up in 7 different colors! They can be recharged via USB so
                                you'll always stay flashy! Comes in US women's sizes 4.5-11. </p>
                            <p>
                                <Button bsStyle="primary" href="/productDetail" href="/productDetail">View
                                    More</Button>&nbsp;
                            </p>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail src={process.env.PUBLIC_URL + '/images/shoes1.jpg'} alt="242x200">
                            <h3>Blink Light Shoes</h3>
                            <p>These white shoes can light up in 7 different colors! They can be recharged via USB so
                                you'll always stay flashy! Comes in US women's sizes 4.5-11. </p>
                            <p>
                                <Button bsStyle="primary" href="/productDetail">View More</Button>&nbsp;
                            </p>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail src={process.env.PUBLIC_URL + '/images/shoes2.jpg'} alt="242x200">
                            <h3>Blink Light Shoes</h3>
                            <p>These white shoes can light up in 7 different colors! They can be recharged via USB so
                                you'll always stay flashy! Comes in US women's sizes 4.5-11. </p>
                            <p>
                                <Button bsStyle="primary" href="/productDetail">View More</Button>&nbsp;
                            </p>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail src={process.env.PUBLIC_URL + '/images/shoes3.jpg'} alt="242x200">
                            <h3>Blink Light Shoes</h3>
                            <p>These white shoes can light up in 7 different colors! They can be recharged via USB so
                                you'll always stay flashy! Comes in US women's sizes 4.5-11. </p>
                            <p>
                                <Button bsStyle="primary" href="/productDetail">View More</Button>&nbsp;
                            </p>
                        </Thumbnail>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={3}>
                        <Thumbnail src={process.env.PUBLIC_URL + '/images/shoes4.jpg'} alt="242x200">
                            <h3>Blink Light Shoes</h3>
                            <p>These white shoes can light up in 7 different colors! They can be recharged via USB so
                                you'll always stay flashy! Comes in US women's sizes 4.5-11. </p>
                            <p>
                                <Button bsStyle="primary" href="/productDetail">View More</Button>&nbsp;
                            </p>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail src={process.env.PUBLIC_URL + '/images/shoes5.jpg'} alt="242x200">
                            <h3>Blink Light Shoes</h3>
                            <p>These white shoes can light up in 7 different colors! They can be recharged via USB so
                                you'll always stay flashy! Comes in US women's sizes 4.5-11. </p>
                            <p>
                                <Button bsStyle="primary" href="/productDetail">View More</Button>&nbsp;
                            </p>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail src={process.env.PUBLIC_URL + '/images/shoes6.jpg'} alt="242x200">
                            <h3>Blink Light Shoes</h3>
                            <p>These white shoes can light up in 7 different colors! They can be recharged via USB so
                                you'll always stay flashy! Comes in US women's sizes 4.5-11. </p>
                            <p>
                                <Button bsStyle="primary" href="/productDetail">View More</Button>&nbsp;
                            </p>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail src={process.env.PUBLIC_URL + '/images/shoes7.jpg'} alt="242x200">
                            <h3>Blink Light Shoes</h3>
                            <p>These white shoes can light up in 7 different colors! They can be recharged via USB so
                                you'll always stay flashy! Comes in US women's sizes 4.5-11. </p>
                            <p>
                                <Button bsStyle="primary" href="/productDetail">View More</Button>&nbsp;
                            </p>
                        </Thumbnail>
                    </Col>
                </Row>
            </Grid>
            <Row>
                <Col md={12} style={{background: 'black', textAlign: 'center', color: 'white'}}>
                    <h6>Copy Rights Reserved 2018</h6>
                </Col>
            </Row>
        </Row>

    );
};

const Home = () => {
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
            <Row>
                <Col md={12}>
                    <Carousel>
                        <Carousel.Item>
                            <img style={{width:'100%', height:'500px'}} alt="900x500"
                                 src={process.env.PUBLIC_URL + '/images/b1.jpg'}/>
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img style={{width:'100%', height:'500px'}} alt="900x500"
                                 src={process.env.PUBLIC_URL + '/images/b2.jpg'}/>
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img style={{width:'100%', height:'500px'}} alt="900x500"
                                 src={process.env.PUBLIC_URL + '/images/b3.jpg'}/>
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img style={{width:'100%', height:'500px'}} alt="900x500"
                                 src={process.env.PUBLIC_URL + '/images/b4.jpg'}/>
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            <Grid>
                <Row>
                    <Col md={12} style={{borderBottom: '1px solid lightgrey'}}>
                        <h2>Categories</h2>
                    </Col>
                </Row>
            </Grid>

            <Grid style={{marginTop:'2%'}}>
                <Row>
                    <Col xs={4} md={3}>
                        <Thumbnail href="/category" src={process.env.PUBLIC_URL + '/images/c1.png'} alt="242x200">
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail href="/category" src={process.env.PUBLIC_URL + '/images/c2.png'} alt="242x200">
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail href="/category" src={process.env.PUBLIC_URL + '/images/c3.png'} alt="242x200">
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail href="/category" src={process.env.PUBLIC_URL + '/images/c4.png'} alt="242x200">
                        </Thumbnail>
                    </Col>
                </Row>
            </Grid>
            <Row>
                <Col md={12} style={{background: 'black', textAlign: 'center', color: 'white'}}>
                    <h6>Copy Rights Reserved 2018</h6>
                </Col>
            </Row>
        </Row>

    );
};

const Category = () => {
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
            <Grid>
                <Row>
                    <Col md={12} style={{borderBottom: '1px solid lightgrey'}}>
                        <h2>Category >> Sub Categories</h2>
                    </Col>
                </Row>
            </Grid>

            <Grid style={{marginTop:'2%'}}>
                <Row>
                    <Col xs={4} md={3}>
                        <Thumbnail href="/products" src={process.env.PUBLIC_URL + '/images/c1.png'} alt="242x200">
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail href="/products" src={process.env.PUBLIC_URL + '/images/c2.png'} alt="242x200">
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail href="/products" src={process.env.PUBLIC_URL + '/images/c3.png'} alt="242x200">
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail href="/products" src={process.env.PUBLIC_URL + '/images/c4.png'} alt="242x200">
                        </Thumbnail>
                    </Col>
                </Row>
                <Row>
                    <Col xs={4} md={3}>
                        <Thumbnail href="/products" src={process.env.PUBLIC_URL + '/images/c1.png'} alt="242x200">
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail href="/products" src={process.env.PUBLIC_URL + '/images/c2.png'} alt="242x200">
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail href="/products" src={process.env.PUBLIC_URL + '/images/c3.png'} alt="242x200">
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail href="/products" src={process.env.PUBLIC_URL + '/images/c4.png'} alt="242x200">
                        </Thumbnail>
                    </Col>
                </Row>
            </Grid>
            <Row>
                <Col md={12} style={{background: 'black', textAlign: 'center', color: 'white'}}>
                    <h6>Copy Rights Reserved 2018</h6>
                </Col>
            </Row>
        </Row>

    );
};

const ProductDetail = () => {
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
            <Grid>
                <Row>
                    <Col md={12} style={{borderBottom: '1px solid lightgrey'}}>
                        <h2>Category >> Shoes >> Adidas</h2>
                    </Col>
                </Row>
            </Grid>

            <Grid style={{marginTop:'2%'}}>
                <Row>
                    <Col xs={4} md={3}>
                        <Thumbnail src={process.env.PUBLIC_URL + '/images/shoes.jpg'} alt="242x200">
                        </Thumbnail>
                    </Col>
                    <Col md={6}>
                        <h3>Blink Light Shoes</h3>
                        <p>These white shoes can light up in 7 different colors! They can be recharged via USB so
                            you'll always stay flashy! Comes in US women's sizes 4.5-11. </p>
                        <p><strong>In Inventory:</strong> 75</p>
                        <p><strong>Colors:</strong> 5</p>
                        <p><strong>Total:</strong> 100</p>

                        <p>
                            <Button bsStyle="primary" >Mark Product</Button>&nbsp;
                        </p>
                    </Col>
                </Row>
            </Grid>
            <Row>
                <Col md={12} style={{background: 'black', textAlign: 'center', color: 'white'}}>
                    <h6>Copy Rights Reserved 2018</h6>
                </Col>
            </Row>
        </Row>

    );
};


class App extends React.Component {
    render() {
        return ([
            <Router history={BrowserHistory}>
                <Route path="/" component={Home}/>
                <Route path="/products" component={Products}/>
                <Route path="/productDetail" component={ProductDetail}/>
                <Route path="/login" component={Login}/>
                <Route path="/category" component={Category}/>
                <Route path="/register" component={Register}/>
            </Router>

        ]);
    }
}


ReactDOM.render(<App />, document.body);