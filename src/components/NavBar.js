import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="xl" bg="light" variant="light" sticky='top'>
      <Container>
        <Navbar.Brand href="/">ALGO-PIZZA</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="CATALOGO" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/menu">PIZZAS</NavDropdown.Item>
              <NavDropdown.Item href="/menu">BEBIDAS</NavDropdown.Item>
              <NavDropdown.Item href="/menu">VARIEDAD</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#features">PROMOCIONES</Nav.Link>
            <Nav.Link href="#pricing">ARMA TU PIZZA</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">CARRITO</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;