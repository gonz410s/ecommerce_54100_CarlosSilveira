import React, { useState, useEffect } from 'react';
import { Card, ListGroup, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { db } from '../../main';
import { collection, query, where, getDocs } from 'firebase/firestore';

function InvoiceSearchResult() {
  const { searchType, searchValue } = useParams();
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInvoices = async () => {
      setLoading(true);
      setError(null);

      try {
        const invoicesCollection = collection(db, 'purchases');
        let q;

        if (searchType === 'email') {
          q = query(invoicesCollection, where('email', '==', searchValue.toLowerCase()));
        } else if (searchType === 'orderId') {
          q = query(invoicesCollection, where('__name__', '==', searchValue));
        }

        const querySnapshot = await getDocs(q);
        const fetchedInvoices = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));

        setInvoices(fetchedInvoices);
      } catch (error) {
        setError('Error al buscar facturas.');
        console.error('Error fetching invoices:', error);
      } finally {
        setLoading(false);
      }
    };

    if (searchValue) {
      fetchInvoices();
    }
  }, [searchType, searchValue]);

  if (loading) {
    return <Spinner animation="border" />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (invoices.length === 0) {
    return <div>No se encontraron facturas.</div>;
  }

  return (
    <div>
      {invoices.map((invoice) => (
        <Card key={invoice.id} className="mb-3">
          <Card.Body>
            <Card.Title>Factura {invoice.id}</Card.Title>
            <Card.Text>Email: {invoice.email}</Card.Text>
            <Card.Text>Dirección: {invoice.address}</Card.Text>
            <Card.Text>Total: ${invoice.total}</Card.Text>
            <Card.Text>Fecha: {new Date(invoice.timestamp.toDate()).toLocaleString()}</Card.Text>
            <ListGroup>
              {invoice.items.map((item, index) => (
                <ListGroup.Item key={index}>
                  {item.name} - ${item.price} x {item.quantity}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default InvoiceSearchResult;
