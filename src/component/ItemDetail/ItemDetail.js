import React from "react";
import ItemCounts from "../ItemCounts/ItemCounts";

import "./itemDetail.css";

export const ItemDetail = ({ data }) => {
  return (
    <div className="container">
      <div className="detail">
        <img className="detail__image" src={data.image} alt="" />
        <div className="content">
          <h1 className="title__image">{data.title}</h1>
          <h2 className="description__image"> {data.description}</h2>
          <h2 className="precio__image">${data.precio}</h2>
          <ItemCounts stock={data.stock}/>
          <h2 className="stock__image"> Stock disponible: {data.stock}</h2>

        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
