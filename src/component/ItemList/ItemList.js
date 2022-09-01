import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import desafio from "../../utils/promise";
import { data } from "../../utils/data";

export default function ItemList() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    desafio(data)
      .then((res) => setProductList(res))
      .catch((error) => console.log(error));
  }, []);

  return productList?.map((product) => <Item key={product.id} product={product} />);
}
