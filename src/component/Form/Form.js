import React, { useState } from "react";

import "./form.css";

export default function Form() {
  const [nomnbre, setNombre] = useState("");

  return (
    <div className="container__form">
      <form id="form">
        <fieldset className="border_form">
          <div className="nombre__form">
            <input
              className="imput"
              name="nombre"
              type="text"
              id="nombre"
              placeholder="ingrese su nombre"
              required
            />
            <label for="nombre">{/* Nombre */}</label>
          </div>

          <div className="email__form">
            <input
              className="imput"
              name="mail"
              type="email"
              id="mail"
              placeholder="tunombre@hotmail.com"
              required
            />
            <label for="mail">{/* Email */}</label>
          </div>
          <div>
            <h2> Dejanos tu comentario</h2>
            <h3 className="tu__comentario">↓</h3>
          </div>
          <div className="comentario__form">
            <textarea
              className="imput"
              name="msg"
              id="msg"
              cols="25"
              rows="5"
            ></textarea>
            <label for="msg">{/* Comentario */}</label>
          </div>
        </fieldset>

        <div className="enviar__borrar">
          <input type="submit" id="button" value="Enviar ahora" />
          <input type="reset" value="Borrar todo" />
        </div>
      </form>
    </div>
  );
}
