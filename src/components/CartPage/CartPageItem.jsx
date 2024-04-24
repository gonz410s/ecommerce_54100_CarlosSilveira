import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useCart } from '../CartContext/CartContext';

function CartPageItem({ item }) {
  const { removeFromCart, decreaseCartItemQuantity } = useCart();

  const handleRemoveOneItem = () => {
    decreaseCartItemQuantity(item.id);
  };

  const handleRemoveAllItems = () => {
    removeFromCart(item.id);
  };

  return (
    <Card className="card">
      <Card.Img variant="top" style={{ width: '17rem' }} src={item.imageURL} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>Cantidad: {item.quantity}</Card.Text>
        <Button variant="secondary" onClick={handleRemoveOneItem}>
          Quitar 1 item
        </Button>
        <Button variant="danger" onClick={handleRemoveAllItems}>
          Quitar Todo
        </Button>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Precio: ${item.price * item.quantity}</small>
      </Card.Footer>
    </Card>
  );
}

export default CartPageItem;