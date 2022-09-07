import React from "react";
import { Link } from "react-router-dom";

import "./checkOut.css";

export default function CheckOut() {
  return (
    <div>
      <Link to="/cart">
        <h2 className="checkOut">CHECKOUT</h2>
      </Link>
    </div>
  );
}
