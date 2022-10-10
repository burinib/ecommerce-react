import React from "react";
import { Link } from "react-router-dom";

import "./item.css";

export default function Item({ product }) {
  return (
    <div className="item">
      <img className="image__item" src={product.img} alt="" />
      <p>{product.nombre}</p>
      <p>${product.precio}</p>
      <p className="product__title">{product.title}</p>
      <Link className="ver__mas" to={`/detail/${product.id}`}>
        <p>VER MAS</p>
      </Link>
    </div>
  );
}
