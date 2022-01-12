import { Navbar, Nav, Container } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import React from 'react';
// import { Link } from 'react-router-dom';

function NavBar () {

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Tienda Fundación Luna</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/Categories">Inicio</Nav.Link>
                    <CartWidget />
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default NavBar;

