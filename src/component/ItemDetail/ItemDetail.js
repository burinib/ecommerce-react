import React from "react";
import ItemCounts from "../ItemCounts/ItemCounts";
import { useParams } from "react-router-dom"

import "./itemDetail.css";

export const ItemDetail = ({ data }) => {
  console.log(data)
  const { id } = useParams();
  console.log(id)
  const info = data[id];
  return (
    <div className="container">
      <div className="detail">
        <img className="detail__image" src={info.img} alt="" />
        <div className="content">
          <h1 className="title__image">{info.title}</h1>
          <h2 className="description__image"> {info.description}</h2>
          <h2 className="precio__image">${info.precio}</h2>
          <ItemCounts stock={info.stock}/>
          <h2 className="stock__image"> Stock disponible: {info.stock}</h2>

        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
