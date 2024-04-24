import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import GetProducts from '../Data/products';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import { Link } from 'react-router-dom'; // Importar Link desde react-router-dom

function NavbarGonzo() {
  let [allProducts] = useState(GetProducts);
  let [filteredProducts, setFilteredProducts] = useState(allProducts);

  let filterProducts = (category) => {
    console.log("Categoría seleccionada:", category);
    if (category === "all") {
      setFilteredProducts(allProducts);
    } else {
      let filtered = allProducts.filter(product => product.category.includes(category));
      console.log("Productos filtrados:", filtered);
      setFilteredProducts(filtered);
    }
  };

  return (
    <div>
      <Navbar className="menu" sticky="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Inicio</Navbar.Brand> 
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/tienda" onClick={() => filterProducts("all")}>Tienda</Nav.Link> 
            <Nav.Link as={Link} to="/h_manuales" onClick={() => filterProducts("manual")}>Herramientas Manuales</Nav.Link> 
            <Nav.Link as={Link} to="/h_electricas" onClick={() => filterProducts("electrical")}>Herramientas Eléctricas</Nav.Link> 
            <CartWidget as={Link} to="/cart"/>
          </Nav>
        </Container>
      </Navbar>
      <ItemListContainer products={filteredProducts} filterProducts={filterProducts} />
    </div>
  );
}

export default NavbarGonzo;