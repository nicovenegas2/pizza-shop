import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles/NavBar.css';

function CollapsibleExample() {
  const [cartQuantity, setCartQuantity] = React.useState(0);

  function updateCartQuantity() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if(cart === null) window.localStorage.setItem('cart', JSON.stringify({}));
    let newCartQuantity = 0;
    Object.keys(cart).forEach((key) => {
      if (cart[key] !== undefined) {
        const string = cart[key].split(',');
        const quantity = parseInt(string[1]);
        newCartQuantity += quantity;
      }
    });
    setCartQuantity(newCartQuantity);
  }

  React.useEffect(() => {
    const interval = setInterval(() => {
      updateCartQuantity();
      return () => clearInterval(interval);
    }, 100);
  }, [cartQuantity]);


  return (
    <Navbar collapseOnSelect expand="xl" bg="light" variant="light" sticky='top' id='navBar'>
      <Container>
        <Navbar.Brand href="/"><img src='https://i.postimg.cc/8PJ8tRNT/logo.png' alt='logo' id='nav-logo' /></Navbar.Brand>
        <Navbar.Brand href="/">PIZZA-SHOP</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="CATALOGO" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/menu/#menu-pizzas">PIZZAS</NavDropdown.Item>
              <NavDropdown.Item href="/menu/#menu-bebidas">BEBIDAS</NavDropdown.Item>
              <NavDropdown.Item href="/menu/#menu-variedad">VARIEDAD</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/#prom">PROMOCIONES</Nav.Link>
            <Nav.Link href="#pricing">ARMA TU PIZZA</Nav.Link>
          </Nav>
          <Nav>
            {cartQuantity > 0 ? <div id='nav-cart-quantity'>{cartQuantity}</div> : null}
            <Nav.Link href="/menu/#carrito">CARRITO</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;