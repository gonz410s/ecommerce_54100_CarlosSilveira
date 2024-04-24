import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductItemCard from '../Card/ProductCard';
import { CartContext } from "../CartContext/CartContext";

function ItemListContainer({ products, filterProducts }) {
  const { addToCart } = useContext(CartContext);
  const [loading, setLoading] = useState(true);
  const noProductsMessage = "No hay productos disponibles";

  const handleFilter = (category) => {
    filterProducts(category);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <div><h1>CARGANDO....</h1></div>;
  }

  if (!products || products.length === 0) {
    return <div>{noProductsMessage}</div>;
  }

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
