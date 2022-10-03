import React from "react";

import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer__Container">
      <ul className="list__redes">
        <li>
          <a href={"https://www.facebook.com/enano.burini"} target="_blank">
            <i className="facebook" />
            face
          </a>
        </li>
        <li>
          <a href={"https://www.instagram.com/"} target="_blank">
            <i className="instagram" />
            insta
          </a>
        </li>
        <li>
          <a href={"https://twitter.com/enanoburini"} target="_blank">
            <i className="twitter" />
            tuitt
          </a>
        </li>
      </ul>
    </footer>
  );
}
