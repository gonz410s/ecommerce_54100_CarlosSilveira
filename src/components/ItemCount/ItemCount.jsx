import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

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
    <ButtonGroup>
      <Button variant="secondary" onClick={handleRemove}>-</Button>
      <span style={{ padding: '0 10px' }}>{count}</span>
      <Button variant="secondary" onClick={handleAdd}>+</Button>
    </ButtonGroup>
  );
}

export default ItemCount;