import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useCart } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';
import { db } from '../../main';
import { updateDoc, doc } from 'firebase/firestore';

function ProductItemCard({ product }) {
  const { addToCart, removeFromCart } = useCart();
  const [quantity, setQuantity] = useState(0);

  const handleAddItem = async () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
      addToCart(product);
      await updateStock(product.id, product.stock - 1); 
    }
  };

  const handleRemoveItem = async () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      removeFromCart(product.id);
      await updateStock(product.id, product.stock + 1); 
    }
  };

  const updateStock = async (productId, newStock) => {
    try {
      const productRef = doc(db, 'itemList', productId);
      await updateDoc(productRef, {
        stock: newStock
      });
    } catch (error) {
      console.error('Error updating stock:', error);
    }
  };

  return (
    <Card className="card">
      <Card.Img variant="top" style={{ width: "17rem" }} src={product.imgURL} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Button onClick={handleAddItem}>Agregar al carrito</Button>
        <Button onClick={handleRemoveItem}>Quitar del carrito</Button>
        <Button variant="warning" disabled>{`Stock: ${product.stock - quantity}`}</Button>
        <br />
        <Link to={`/detail/${product.id}`} className="btn btn-primary">Detalles</Link>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Precio: ${product.price}</small>
      </Card.Footer>
    </Card>
  );
}

export default ProductItemCard;
