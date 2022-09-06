import React, { useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";
import ItemDetail from "../ItemDetail/ItemDetail";

const film = {
  id: 1,
  image:
    "https://cdn.pixabay.com/photo/2017/11/02/14/24/model-2911320_960_720.jpg",
  title: "TRAJE CEREMONIAL ENTALLADO AZUL",
  description:
    "Ambo ceremonial liso de calce entallado. Saco solapa satinada con cuatro botones en manga y dos botones delanteros. Contiene forrería en combinación con vivo a contracolor y tres bolsillos internos y dos aberturas en espalda. Pantalón sin pinzas. dos bolsillos delanteros y dos bolsillos abotonados en la parte posterior.",
  precio: 156000,
  stock: 10,
};

export const ItemDetailContainer = () => {
  const [data, setData] = useState(false);

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(film);
      }, 2000);
    });

    getData.then((res) => setData(res));
  }, []);

  return data ? (
    <ItemDetail data={data} />
  ) : (
    <div className="container__spinner">
    <Bars
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
    </div>
  );
};

export default ItemDetailContainer;
