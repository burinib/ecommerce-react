import "./itemCounts.css";

import React, { useState } from "react";

export const ItemCounts = ({ stock = 5 }) => {
  const [counter, setCounter] = useState(1);
  const increment = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };
  const decrement = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="counter">
      <button onClick={() => decrement()}>-</button>
      <span>{counter}</span>
      <button onClick={() => increment()}>+</button>
      <div>
        <button>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemCounts;
