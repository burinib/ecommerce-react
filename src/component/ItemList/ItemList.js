import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import desafio from "../../utils/promise";
import { data } from "../../utils/data";
import { Link, useParams } from "react-router-dom";

export default function ItemList() {
  const [productList, setProductList] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    desafio(data)
      .then((res) => {
        if (!id) {
          return res;
        } else {
          return res.filter((product) => product.category === id);
        }
      })
      .then((res) => setProductList(res))
      .catch((error) => console.log(error));
  }, [id]);

  return productList?.map((product, index) => (
    <Link to={`/detail/${product.id}`} key={index}>
      <Item key={product.id} product={product} />{" "}
    </Link>
  ));
}
