import React from "react";
import CartWidget from "../CartWidget/CartWidget";

import "./index.css";

export default function NavBar() {
  return (
    <header className="header__main">
      <nav className="header__nav">
        <div className="header__title">Bahia informal clothing</div>
        <ul className="header__options">
          <li>Nosotros</li>
          <li>Catalogo</li>
          <li>Envios</li>
          <li>Contacto</li>
          <li>
            <CartWidget />
          </li>
        </ul>
      </nav>
    </header>
  );
}