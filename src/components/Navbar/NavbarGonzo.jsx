import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './NavbarGonzo.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink, Routes, Route } from 'react-router-dom'; 


function NavbarGonzo() {
  return (
    <div>
      <Navbar className="menu" sticky="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/Tienda">Inicio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/category/tools">Tienda</Nav.Link>
            <Nav.Link as={NavLink} to="/category/manual">Herramientas Manuales</Nav.Link>
            <Nav.Link as={NavLink} to="/category/electrical">Herramientas Eléctricas</Nav.Link>
            <Nav.Link as={NavLink} to="/search-invoices">Buscador de Facturas</Nav.Link>
            <CartWidget />
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarGonzo;
