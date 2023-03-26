import React from "react";

function boton({ texto, esClick, manejarClick }) {
  return (
    <button
      className={esClick ? "boton-contador" : "boton-reiniciar"}
      onClick={manejarClick}
    >
      {texto}
    </button>
  );
}
export default boton;
