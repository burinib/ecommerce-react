import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import { useParams } from "react-router-dom";
import { firestoreFetch } from "../../utils/firebaseConfig"

export default function ItemList() {
  const [productList, setProductList] = useState([]);
  console.log(productList)
  const { id } = useParams();

  useEffect(() => {
    firestoreFetch()
    .then((res) => {
      if (!id) {
        return res;
      } else {
        return res.filter((product) => product.category === id);
      }})
      .then((res) => setProductList(res))
      .catch((error) => console.log(error));
    
  }, [id]);

  return productList?.map((product, index) => (
      <Item key={product.id} product={product} />
    
  ));
}
