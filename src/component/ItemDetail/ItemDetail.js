import React, { useContext, useState } from "react";
import ItemCounts from "../ItemCounts/ItemCounts";
import { useParams } from "react-router-dom";
import CheckOut from "../CheckOut/CheckOut.js";
import { CartContext } from "../CartContext/CartContext";

import "./itemDetail.css";

export const ItemDetail = ({ data }) => {
  const [goToCart, setGoToCart] = useState(false);
  const { addItem } = useContext(CartContext);

  const { id } = useParams();
  const info = data[id];

  const onAdd = (counter) => {
    addItem(info, counter);
    setGoToCart(true);
  };

  return (
    <div className="container">
      <div className="detail">
        <img className="detail__image" src={info?.img} alt="" />
        <div className="content">
          <h1 className="title__image">{info?.title}</h1>
          <h2 className="description__image"> {info?.description}</h2>
          <h2 className="precio__image">${info?.precio}</h2>
          {goToCart ? (
            <CheckOut />
          ) : (
            <ItemCounts stock={info?.stock} onAdd={onAdd} />
          )}
          <h2 className="stock__image"> Stock disponible: {info?.stock}</h2>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
