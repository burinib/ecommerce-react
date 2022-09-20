import React, { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";

import "./cart.css";

export default function Cart() {
  const carrito = useContext(CartContext);

  return (
    <div>
      <h2 className="cart__container">Cart</h2>
      {carrito.cartList.length ? (
        carrito?.cartList.map((product) => (
          <div key={product.id} className="cart__product">
            <img src={product.img} alt={product.title} />
            <div>{product?.title}</div>
            <div>${product?.precio}</div>
            <div>cantidad: {product?.cant}</div>
            <div>total: ${product?.cant * product?.precio}</div>
          </div>
        ))
      ) : (
        <div>No hay productos en el carrito</div>
      )}
    </div>
  );
}
