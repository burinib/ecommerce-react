import React, { useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";
import ItemDetail from "../ItemDetail/ItemDetail";
import { data } from "../../utils/data";



export const ItemDetailContainer = () => {
  const [info, setInfo] = useState(false);

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 500);
    });

    getData.then((res) => setInfo(res));
  }, []);

  return info ? (
    <ItemDetail data={info} />
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
