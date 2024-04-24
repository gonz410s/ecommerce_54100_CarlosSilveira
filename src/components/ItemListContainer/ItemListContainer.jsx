import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductItemCard from '../Card/ProductCard';
import { useParams } from "react-router-dom";
import GetProducts from '../Data/products';

function ItemListContainer({ saludo }) {
  const [products, setProducts] = useState([]);
  const { idCategory } = useParams();

useEffect(() => {
  console.log("idCategory:", idCategory);
  GetProducts
    .then((respuesta) => {
      if (idCategory) {
        const newProducts = respuesta.filter((producto) => {
          console.log("Producto:", producto);
          console.log("Categorías:", producto.category);
          console.log("Coincide:", producto.category.includes(idCategory));
          return producto.category.includes(idCategory);
        });
        console.log("Productos filtrados:", newProducts);
        setProducts(newProducts);
      } else {
        setProducts(respuesta);
      }
    })
    .catch((error) => {
      console.error('Error Obteniendo Productos', error);
    });
}, [idCategory]);

  const addToCart = (productId) => {
  };

  return (
    <Container>
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {products.map((product) => (
          <Col key={product.id}>
            <ProductItemCard product={product} addToCart={addToCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ItemListContainer;