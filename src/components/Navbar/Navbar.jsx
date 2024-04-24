import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

function NavbarGonzo() {

  return (
    <div>
      <Navbar className="menu" sticky="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Inicio</Navbar.Brand> 
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/category/all">Tienda</Nav.Link> 
            <Nav.Link as={Link} to="/category/manual">Herramientas Manuales</Nav.Link> 
            <Nav.Link as={Link} to="/category/electrical">Herramientas Eléctricas</Nav.Link> 
            <CartWidget as={Link} to="/cart"/>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarGonzo;