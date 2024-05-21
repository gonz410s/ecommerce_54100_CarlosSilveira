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
    <Card className="cart-item">
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>Cantidad: {item.quantity}</Card.Text>
        <Card.Text>Precio unitario: ${item.price}</Card.Text>
        <Card.Text>Total: ${item.price * item.quantity}</Card.Text>
        <Button variant="secondary" onClick={handleRemoveOneItem}>
          Quitar 1 item
        </Button>
        <Button variant="danger" onClick={handleRemoveAllItems}>
          Quitar Todo
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CartPageItem;
