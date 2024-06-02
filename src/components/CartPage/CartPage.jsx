import React, { useState } from 'react';
import { Button, Card, Form, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { db } from '../../main';
import { useCart } from '../CartContext/CartContext';
import CartPageItem from './CartPageItem';
import { collection, setDoc, doc } from 'firebase/firestore';
import './CartPage.css';
import generateOrderId from '../GenerateOrderId/GenerateOrderId';

function CartPage() {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

  const handleCheckout = async () => {
    const orderId = generateOrderId();
    const purchaseData = {
      name: formData.name.toLowerCase(),
      email: formData.email.toLowerCase(),
      address: formData.address.toLowerCase(),
      items: cartItems,
      total: cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
      timestamp: new Date()
    };

    setLoading(true);
    setError(null);

    try {
      await setDoc(doc(db, 'purchases', orderId), purchaseData);
      console.log('Compra confirmada con el ID:', orderId);
      clearCart();
      navigate(`/search-result/orderId/${orderId}`); // Redirige a la página de resultados de búsqueda con el ID de la factura
    } catch (error) {
      console.error('Error al confirmar la compra:', error);
      setError('Error al confirmar la compra.');
    } finally {
      setLoading(false);
    }
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
                    {loading ? (
                      <Spinner animation="border" size="sm" />
                    ) : (
                      'Confirmar Compra'
                    )}
                  </Button>
                  <Button variant="secondary" onClick={handleCancel}>
                    Cancelar
                  </Button>
                </>
              )}
              {error && <div className="text-danger mt-2">{error}</div>}
            </Card.Body>
          </Card>
        </>
      )}
    </div>
  );
}

export default CartPage;