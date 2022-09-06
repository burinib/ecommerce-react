import React from "react";
import ItemCounts from "../ItemCounts/ItemCounts";

import "./item.css";

export default function Item({product}) {
  return (
    <div className="item">
      <img className="image__item" src={product.img} alt="" />
      <p>{product.nombre}</p>
      <p>${product.precio}</p>
      <ItemCounts />
    </div>
  );
}
