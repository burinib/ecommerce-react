import React, {  } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../CartWidget/CartWidget";

import "./cart.css";

export default function Cart() {
  const carrito = useCartContext();
  const { removeProduct } = carrito;

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
        <Link to="/">
          <button className="irCompras">Ir a compras</button>
        </Link>
      </div>
    </div>
  );
}
