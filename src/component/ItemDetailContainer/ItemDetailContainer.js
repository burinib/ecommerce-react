import React, { useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";
import { firestoreFetch } from "../../utils/firebaseConfig";
import ItemDetail from "../ItemDetail/ItemDetail";



export const ItemDetailContainer = () => {
  const [info, setInfo] = useState(false);

  useEffect(() => {
    firestoreFetch()
    .then((res) => setInfo(res))
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
