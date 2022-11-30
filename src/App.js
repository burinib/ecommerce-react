import "./App.css";
import ItemListContainer from "./component/ItemListContainer/ItemListContainer";
import NavBar from "./component/NavBar";
import ItemDetailContainer from "./component/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./component/Cart/Cart";
import CartContextProvider from "./component/CartContext/CartContext";
import Footer from "./component/footer/Footer";
import Form from "./component/Form/Form";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/react-ecommerce" element={<ItemListContainer />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/form" element={<Form />} />
          
        </Routes>

      </BrowserRouter>
      <Footer />
    </CartContextProvider>
  );
}

export default App;
