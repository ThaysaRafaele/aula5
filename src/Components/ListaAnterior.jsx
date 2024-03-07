import React, { useState, useMemo, useEffect } from 'react';
import ButtonAnterior from './ButtonAnterior';

const Lista = () => {
  const [items, setItems] = useState([]);

  const memoizar = useMemo(() => {
    return items;
  }, [items]);

  useEffect(() => {
    console.log('recalculada:', memoizar);
  }, [memoizar]);

  const addItem = () => {
    setItems(prevItems => [...prevItems, Math.random()]);
  };

  return (
    <div>
      <button onClick={addItem}>Adicionar Item</button>
      <ul>
        {memoizar.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ButtonAnterior />
    </div>
  );
};

export default Lista;
