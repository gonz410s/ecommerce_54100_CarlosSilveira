import React, { useState, useEffect } from 'react';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ProductItemCard.css';
import { useCart } from '../CartContext/CartContext';

function ProductItemCard({ product }) {
  const { addItemToCart, decreaseCartItemQuantity } = useCart();
  const [stock, setStock] = useState(product.stock);

  useEffect(() => {
    setStock(product.stock);
  }, [product.stock]);

  const handleAdd = () => {
    if (stock > 0) {
      addItemToCart(product);
      setStock(stock - 1);
    }
  };

  const handleRemove = () => {
    if (stock < product.stock) {
      decreaseCartItemQuantity(product.id);
      setStock(stock + 1);
    }
  };

  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={product.imgURL} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <ButtonGroup>
          <Button variant="secondary" onClick={handleRemove}>Quitar</Button>
          <span style={{ padding: '25px 20px' }}>{stock}</span>
          <Button variant="secondary" onClick={handleAdd}>Comprar</Button>
        </ButtonGroup>
        <Link to={`/detail/${product.idSingular}`}>
          <Button variant="primary" className="ms-2">Detalles</Button>
        </Link>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Stock: {stock}</small>
      </Card.Footer>
    </Card>
  );
}

export default ProductItemCard;