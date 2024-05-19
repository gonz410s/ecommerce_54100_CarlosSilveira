import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { useCart } from '../CartContext/CartContext';

function CartPage() {
  const { cartItems, removeFromCart, decreaseCartItemQuantity } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    setTotalPrice(totalPrice);
  };

  const handleRemoveOneItem = (productId) => {
    decreaseCartItemQuantity(productId);
    calculateTotalPrice();
  };

  const handleRemoveAllItems = (productId) => {
    removeFromCart(productId);
    calculateTotalPrice();
  };

  const handleCheckout = () => {
    navigate('/brief');
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [cartItems]);

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <Card key={item.id} className="card">
            <Card.Img variant="top" style={{ width: '17rem' }} src={item.imageURL} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>Cantidad: {item.quantity}</Card.Text>
              <Button variant="secondary" onClick={() => handleRemoveOneItem(item.id)}>
                Devuelve 1 item
              </Button>
              <Button variant="danger" onClick={() => handleRemoveAllItems(item.id)}>
                Quitar Todo
              </Button>
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
        <p>Total a pagar: ${totalPrice}</p>
        <Button variant="primary" onClick={handleCheckout}>Comprar</Button>
      </div>
    </div>
  );
}

export default CartPage;
