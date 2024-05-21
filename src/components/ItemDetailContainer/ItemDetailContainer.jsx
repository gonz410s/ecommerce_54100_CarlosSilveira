import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { db } from '../../main';
import { doc, getDoc } from 'firebase/firestore';

function ItemDetailContainer() {
  const { idProduct } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRef = doc(db, 'itemList', idProduct);
        const docSnap = await getDoc(productRef);
        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log('No such document!');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
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
      <Card.Img variant="top" style={{ width: "17rem" }} src={product.imgURL} />
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
