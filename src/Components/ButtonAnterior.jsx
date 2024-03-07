import React, { useState, useCallback } from 'react';

const ButtonAnterior = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  console.log('função de incremento é recriada');

  return (
    <div>
      <p>Contagem: {count}</p>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
};

export default ButtonAnterior;