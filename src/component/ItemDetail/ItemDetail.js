import React from "react";
import { data } from "../../utils/data";

import "./itemDetail.css";
import ItemCounts from "../ItemCounts/ItemCounts";

export const ItemDetail = ({ data }) => {
  return (
    <div className="container">
      <div className="detail">
        <img className="detail__image" src={data.image} alt="" />
        <div className="content">
          <h1 className="title__image">{data.title}</h1>
          <h2 className="description__image"> {data.description}</h2>
          <h2 className="precio__image"> {data.precio}</h2>
          <ItemCounts />

        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
