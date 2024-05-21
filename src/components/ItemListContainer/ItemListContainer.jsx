import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductItemCard from '../Card/ProductItemCard';
import { useParams } from 'react-router-dom';
import { db } from '../../main';
import { collection, query, where, getDocs } from 'firebase/firestore';

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      console.log("Fetching products for category:", idCategory);
      try {
        const productsCollection = collection(db, 'itemList');
        let q;

        if (idCategory && idCategory !== 'tools') {
          q = query(productsCollection, where('idCategory', 'array-contains', idCategory));
        } else {
          q = query(productsCollection); // Recuperar todos los productos
        }

        const querySnapshot = await getDocs(q);
        const productsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        // Eliminar duplicados basándose en el id del producto
        const uniqueProducts = Array.from(new Set(productsList.map(p => p.id)))
          .map(id => productsList.find(p => p.id === id));

        setProducts(uniqueProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [idCategory]);

  return (
    <Container>
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {products.map((product) => (
          <Col key={product.id}>
            <ProductItemCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ItemListContainer;
