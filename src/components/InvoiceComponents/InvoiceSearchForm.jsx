import React, { useState } from 'react';
import { Button, Form, Card } from 'react-bootstrap';

function InvoiceSearchForm({ onSearch }) {
  const [searchType, setSearchType] = useState('email');
  const [searchValue, setSearchValue] = useState('');

  const handleSearchTypeChange = (e) => {
    setSearchType(e.target.value);
  };

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchType, searchValue);
  };

  return (
    <Card>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="searchType">
            <Form.Label>Buscar por</Form.Label>
            <Form.Control as="select" value={searchType} onChange={handleSearchTypeChange}>
              <option value="email">Correo Electrónico</option>
              <option value="orderId">Número de Factura</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="searchValue">
            <Form.Label>Valor de búsqueda</Form.Label>
            <Form.Control
              type="text"
              placeholder={searchType === 'email' ? 'Ingrese su correo electrónico' : 'Ingrese el número de factura'}
              value={searchValue}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Buscar
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default InvoiceSearchForm;
