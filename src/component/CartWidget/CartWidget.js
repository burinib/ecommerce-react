import React from "react";
import Cart from "../../assets/Cart";

import "./cartWidget.css";

export default function CartWidget() {
  const cantArticles = 4;
  return (
    <div className="cartWidget__container">
      <Cart />
      <p>{cantArticles}</p>
    </div>
  );
}
