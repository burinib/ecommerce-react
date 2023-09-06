import React, { useState } from "react";
import { updateDocument } from "../../functions/updateDocument";

import "./itemCounts.css";

export const ItemCounts = ({ stock = 5, onAdd = () => {} }, id) => {
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

  const handleAdd = (id) => {
    onAdd(counter);
    updateDocument(id, counter);
  };

  return (
    <div className="counter">
      <button onClick={() => decrement()}>-</button>
      <span>{counter}</span>
      <button onClick={() => increment()}>+</button>
      <div>
        <button onClick={handleAdd}>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemCounts;
