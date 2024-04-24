// ProductItemCard.jsx
import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import "../Card/card.css";
import { useCart } from "../CartContext/CartContext";
import ItemCount from "../ItemCount/ItemCount";

function ProductItemCard({ product }) {
  const { addToCart, removeFromCart } = useCart();
  const [quantity, setQuantity] = useState(0);

  const handleAddItem = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
      addToCart(product);
    }
  }

  const handleRemoveItem = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      removeFromCart(product.id);
    }
  }

  return (
    <Card className="card">
      <Card.Img variant="top" style={{ width: "17rem" }} src={product.imageURL} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <ItemCount initial={quantity} max={product.stock} onAdd={handleAddItem} onRemove={handleRemoveItem} />
        <Button variant="warning" disabled>{`Stock: ${product.stock - quantity}`}</Button>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Precio: ${product.price}</small>
      </Card.Footer>
    </Card>
  );
}

export default ProductItemCard;
