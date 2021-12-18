import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import React from 'react';

export const NavBar = () => {
    return (
        <>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Tienda Fundación Luna</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Inicio</Nav.Link>
                    <Nav.Link href="#link">Sobre Nosotros</Nav.Link>
                    <Nav.Link href="#link">Contacto</Nav.Link>
                    <NavDropdown title="Categorías" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Perros</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Gatos</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Roedores</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Pájaros</NavDropdown.Item>
                    </NavDropdown>
                    <CartWidget />
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
        </>
    )
}