import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useCart } from '../CartContext/CartContext';

function CartPageItem({ item }) {
  const { decreaseCartItemQuantity, removeItemFromCart } = useCart();

  const handleRemoveOneItem = () => {
    decreaseCartItemQuantity(item.id);
  };

  const handleRemoveItem = () => {
    removeItemFromCart(item.id);
  };

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>Cantidad: {item.quantity}</Card.Text>
        <Card.Text>Precio: ${item.price}</Card.Text>
        <Button variant="danger" onClick={handleRemoveOneItem}>Quitar uno</Button>
        <Button variant="dark" onClick={handleRemoveItem}>Quitar todos</Button>
      </Card.Body>
    </Card>
  );
}

export default CartPageItem;