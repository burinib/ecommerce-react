import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../CartWidget/CartWidget";
import { addDoc, getFirestore, collection } from "firebase/firestore";
import { Bars } from "react-loader-spinner";

import "./cart.css";

export default function Cart() {
  const carrito = useCartContext();
  const [loading, setLoading] = useState(false);
  const { removeProduct, cartList, setCartList, precioTotal, showProducts } =
    carrito;






  const order = {
    buyer: {
      name: "Leo Messi",
      email: "braianb55@hotmail.com",
      phone: "212122",
      addres: "dsdss",
    },
    items: cartList.map((product) => ({
      id: product.id,
      title: product.title,
      precio: product.precio,
      cant: product.cant,
    })),
    total: 1000,
    /*  total: carrito.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    ), */
  };

  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(({ id }) => console.log(id));
    setCartList([]);
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="contenedor__cartList">
      {carrito.cartList.length ? (
        <div className="cart__container">
          {carrito?.cartList.map((product) => (
            <div key={product.id} className="cart__product">
              <img src={product.img} alt={product.title} />
              <div>{product?.title}</div>
              <div>${product?.precio}</div>
              <div>cantidad: {product?.cant}</div>
              <div>total: ${product?.cant * product?.precio}</div>
              <button
                className="eliminar__prod"
                onClick={() => {
                  removeProduct(product.id);
                }}
              >
                Eliminar producto
              </button>
            </div>
          ))}
          <div className="compra__total">Total: ${precioTotal}</div>
        </div>
      ) : (
        <div className="container__spinner">
          {loading ? (
            <Bars
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          ) : (
            <div className="carritoNone">
              ¡¡¡No hay productos en el carrito!!!
            </div>
          )}
        </div>
      )}

      <div className="cart__onclick">
        {carrito.cartList.length ? (
          <button className="generar__orden" onClick={handleClick}>
            Generar orden
          </button>
        ) : null}
        <Link to="/">
          <button className="ir__Compras">Ir a compras</button>
        </Link>
        {carrito.cartList.length ? (
          <button
            className="vaciar__carrito"
            onClick={() => {
              setCartList([]);
              showProducts();
            }}
          >
            Vaciar carrito
          </button>
        ) : null}
      </div>
    </div>
  );
}
