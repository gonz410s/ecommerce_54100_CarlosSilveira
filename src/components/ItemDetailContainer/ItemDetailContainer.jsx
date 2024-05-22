import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { db } from '../../main';
import { collection, query, where, getDocs } from 'firebase/firestore';
import "./ItemDetailContainer.css"

function ItemDetailContainer() {
  const { idSingular } = useParams(); // Obtener el idSingular de los parámetros de la URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        console.log('Fetching product with idSingular:', idSingular); // Log para verificar el idSingular
        const productsCollection = collection(db, 'itemList');
        const q = query(productsCollection, where('idSingular', '==', idSingular));
        const querySnapshot = await getDocs(q);
  
        if (!querySnapshot.empty) {
          const productData = querySnapshot.docs[0].data();
          console.log('Product found:', productData); // Log para verificar los datos del producto
          setProduct({ id: querySnapshot.docs[0].id, ...productData });
        } else {
          console.log('No such document!'); // Log si no se encuentra el documento
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchProduct();
  }, [idSingular]);

  if (loading) {
    return <div>Cargando producto...</div>;
  }

  if (!product) {
    return <div>No se encontró el producto.</div>;
  }

  return (
    <Card className="card">
      <Card.Img variant="top" style={{ width: '17rem' }} src={product.imgURL} />
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
