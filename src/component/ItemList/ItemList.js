import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import desafio from "../../utils/promise";
import { data } from "../../utils/data";
import { Link } from "react-router-dom"

export default function ItemList() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    desafio(data)
      .then((res) => setProductList(res))
      .catch((error) => console.log(error));
  }, []);

  return productList?.map((product) => (
    <Link to={`/detail/${product.id}`}>
      <Item key={product.id} product={product} />{" "}
    </Link>
  ));
}
