import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../CartWidget/CartWidget";
import { addDoc, getFirestore, collection } from "firebase/firestore";

import "./cart.css";

export default function Cart() {
  const carrito = useCartContext();
  const { removeProduct, cartList, setCartList } = carrito;

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
    setCartList([])
  };

  return (
    <div>
      {carrito.cartList.length ? (
        carrito?.cartList.map((product) => (
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
        ))
      ) : (
        <div>
          <div className="carritoNone">No hay productos en el carrito</div>
        </div>
      )}
      <div>
            <button className="generar__orden" onClick={handleClick}>
              Generar orden
            </button>
        <Link to="/">
          <button className="irCompras">Ir a compras</button>
        </Link>
      </div>
    </div>
  );
}
