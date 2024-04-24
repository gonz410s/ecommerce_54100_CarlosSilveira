import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import GetProducts from '../Data/products';

function ItemDetailContainer() {
  const { idProduct } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const products = await GetProducts;
        const foundProduct = products.find(product => product.id === parseInt(idProduct));
        setTimeout(() => {
          setProduct(foundProduct);
          setLoading(false);
        }, 1500);
      } catch (error) {
        console.error('Error obteniendo los productos:', error);
      }
    };

    fetchProduct();
  }, [idProduct]);

  if (loading) {
    return <div>Cargando producto...</div>;
  }

  if (!product) {
    return <div>No se encontró el producto.</div>;
  }

  return (
    <Card className="card">
      <Card.Img variant="top" style={{ width: "17rem" }} src={product.imageURL} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>{product.descriptionLong}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Precio: ${product.price}</small>
      </Card.Footer>
    </Card>
  );
}

export default ItemDetailContainer;
