import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function ItemCount({ initial, max, onAdd, onRemove }) {
  const [count, setCount] = useState(initial);

  const handleAdd = () => {
    if (count < max) {
      setCount(count + 1);
      onAdd();
    }
  };

  const handleRemove = () => {
    if (count > 0) {
      setCount(count - 1);
      onRemove();
    }
  };

  return (
    <div>
      <Button variant="primary" onClick={handleAdd}>Agregar al carrito</Button>
    </div>
  );
}

export default ItemCount;