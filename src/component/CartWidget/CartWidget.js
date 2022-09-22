import React, { useContext } from "react";
import Cart from "../../assets/Cart";
import { CartContext } from "../CartContext/CartContext";

import "./cartWidget.css";

export const useCartContext = () => useContext(CartContext);

export default function CartWidget() {
  const carrito = useCartContext();
  const { totalProducts } = carrito;

  return (
    <div className="cartWidget__container">
      <Cart />
      <p>{totalProducts || 0}</p>
    </div>
  );
}
