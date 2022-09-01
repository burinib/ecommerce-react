import React from "react";

import "./item.css";

export default function Item({product}) {
  return (
    <div className="item">
      <img src={product.img} alt="" />
      <p>{product.nombre}</p>
      <p>${product.precio}</p>
      <button className="item__button" id="0">
        Comprar
      </button>
    </div>
  );
}
