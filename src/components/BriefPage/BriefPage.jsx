import React from 'react';
import { useCart } from '../CartContext/CartContext';
import { Card, Button } from 'react-bootstrap';

const BriefPage = () => {
  const { cartItems, clearCart } = useCart();

  const handlePurchase = () => {
    alert('Compra realizada con éxito');
    clearCart();
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Resumen del Carrito</h1>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <Card key={item.id} className="card">
            <Card.Img variant="top" style={{ width: '17rem' }} src={item.imageURL} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>Cantidad: {item.quantity}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Precio: ${item.price * item.quantity}</small>
            </Card.Footer>
          </Card>
        ))
      ) : (
        <div>No hay elementos en el carrito</div>
      )}
      <div>
        <h2>Total a pagar: ${total.toFixed(2)}</h2>
        <Button variant="primary" onClick={handlePurchase}>Confirmar Compra</Button>
      </div>
    </div>
  );
};

export default BriefPage;