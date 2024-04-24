import React, { useContext, useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { Badge } from 'react-bootstrap';
import { CartContext } from '../CartContext/CartContext';

function CartWidget() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    setIsVisible(cartItems.length > 0);

    // Calcula la cantidad total de elementos en el carrito
    let total = 0;
    cartItems.forEach((item) => {
      total += item.quantity;
    });
    setTotalQuantity(total);
  }, [cartItems]);

  const handleVerCarrito = () => {
    navigate('/cart');
  };

  return (
    <>
      {isVisible && (
        <>
          <NavLink to="/cart" className="nav-link">
            <div>
              <FaShoppingCart className="carrito" size="25px" />
              {totalQuantity > 0 && <Badge bg="secondary">{totalQuantity}</Badge>}
              <span className="visually-hidden">items en tu carrito</span>
            </div>
          </NavLink>
          <Button variant="info" onClick={handleVerCarrito}>
            Ver Carrito ({totalQuantity})
          </Button>
        </>
      )}
    </>
  );
}

export default CartWidget;