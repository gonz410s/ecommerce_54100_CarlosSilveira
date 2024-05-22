import React, { useContext, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext';
import CartPageItem from './CartPageItem';
import './CartPage.css';

function CartPage() {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: ''
  });

  const handleConfirm = () => {
    setShowConfirmation(true);
  };

  const handleCancel = () => {
    setShowConfirmation(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckout = () => {

    alert('Compra confirmada! Datos enviados: ' + JSON.stringify(formData));
    clearCart();
    navigate('/');
  };

  return (
    <div className="cart-page">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <Card>
          <Card.Body>
            <Card.Title>No hay productos en el carrito.</Card.Title>
            <Button variant="info" onClick={() => navigate('/category/tools')}>
              Volver a la Tienda
            </Button>
          </Card.Body>
        </Card>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <CartPageItem key={item.id} item={item} />
            ))}
          </div>
          <Card className="total-card">
            <Card.Body>
              <Card.Title>Total a Pagar:</Card.Title>
              <Card.Text>
                ${' '}
                {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
              </Card.Text>
              {!showConfirmation && (
                <Button variant="success" onClick={handleConfirm}>
                  Confirmar Compra
                </Button>
              )}
              {showConfirmation && (
                <>
                  <Form>
                    <Form.Group className="mb-3" controlId="formName">
                      <Form.Label>Nombre Completo</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Ingrese su nombre completo"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Ingrese su email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formAddress">
                      <Form.Label>Dirección de Envío</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Ingrese su dirección de envío"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
                  </Form>
                  <Button variant="primary" onClick={handleCheckout}>
                    Confirmar Compra
                  </Button>
                  <Button variant="secondary" onClick={handleCancel}>
                    Cancelar
                  </Button>
                </>
              )}
            </Card.Body>
          </Card>
        </>
      )}
    </div>
  );
}

export default CartPage;
