import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import CartWidget from '../CartWidget';
import React from 'react';
import {NavLink, Link} from 'react-router-dom'
import Category from '../Category';

function NavBar () {

    return (
      <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand as={NavLink} to="/">Tienda Fundación Luna</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={NavLink} to="/">Inicio</Nav.Link>
        <NavDropdown title="Categorías" id="basic-nav-dropdown">
          <Category />
        </NavDropdown>
      </Nav>
      <Link to={`/cart`}>
        {" "}
        <CartWidget /> {" "}
      </Link>
    </Navbar.Collapse>
  </Container>
</Navbar>


    )
}

export default NavBar;
