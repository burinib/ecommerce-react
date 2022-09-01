import React from "react";

import "./itemListContainer.css"

export default function ItemListContainer(props) {
  return <div className="ItemListContainer">{props.children}</div>;
}
