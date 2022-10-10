import React from "react";

import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer__Container">
      <ul className="list__redes">
        <li>
          <a href={"https://www.facebook.com/enano.burini"} target="_blank">
            <i className="footer__icon fa-brands fa-facebook"></i>          </a>
        </li>
        <li>
          <a href={"https://www.instagram.com/"} target="_blank">
            <i className="footer__icon fa-brands fa-instagram"></i>          </a>
        </li>
        <li>
          <a href={"https://twitter.com/enanoburini"} target="_blank">
            <i className="footer__icon fa-brands fa-twitter"></i>          </a>
        </li>
      </ul>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
        integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
    </footer>
  );
}
