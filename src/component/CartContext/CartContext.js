import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

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
  };

  return (
    <CartContext.Provider value={{ cartList, addItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
