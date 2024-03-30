import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import { FiShoppingCart } from "react-icons/fi";
import Badge from 'react-bootstrap/Badge';

function NavbarGonzo() {
  return (
    <nav>
      <Navbar className="menu" sticky="top" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Inicio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#tienda">Tienda</Nav.Link>
            <Nav.Link href="#nosotros">Nosotros</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
          
        </Container>
        <Nav.Link><FiShoppingCart className="carrito" size="25px" Href="#carrito" />
            Profile <Badge bg="secondary">9</Badge>
            <span className="visually-hidden">items en tu carrito</span></Nav.Link>
        
      </Navbar>

    
    </nav>
  );
}

export default NavbarGonzo;