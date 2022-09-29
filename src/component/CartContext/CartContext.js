import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);

  const addItem = (data, counter) => {
    let nuevoCarrito = cartList;

    const validacion = cartList.find((product) => product.id === data.id);

    if (validacion) {
      const indice = cartList.findIndex((product) => product.id === data.id);
      nuevoCarrito[indice].cant = nuevoCarrito[indice].cant + counter;
    } else {
      let nuevoProducto = { ...data, cant: counter };
      nuevoCarrito.push(nuevoProducto);
    }

    setCartList(nuevoCarrito);
    showProducts();
  };

  const removeProduct = (id) => {
    setCartList(cartList.filter((product) => product.id !== id));
  };

  const showProducts = () =>
    setTotalProducts(
      cartList.reduce(
        (acumulador, productoActual) => acumulador + productoActual.cant,
        0
      )
    );

  return (
    <CartContext.Provider
      value={{ cartList, setCartList, addItem, removeProduct, totalProducts, showProducts }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
