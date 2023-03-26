import logo from "./logo.svg";

import Saludo from "./complementos/saludo";
import Saludo2 from "./complementos/saludo2";
import Boton from "./complementos/boton";
import Contador from "./complementos/contador";
import "./App.css";

import { useState } from 'react';

function App() {


  const [nClick, setNClick] = useState(0);


  function mayuscula(params) {
    return params.toUpperCase();

  }

  const contador = () => {
    
    setNClick(nClick+1);
   
  };

  const reiniciar = () => {
    
    setNClick(0);
   
  };

  /* const reiniciar = function reiniciar() {
    return setNClick(0);
    return console.log("reiniciar");
  }; */

  return (
    <div className="App">
      {/* <Saludo nombre={mayuscula("Dani")} apellido={2 + 4} />
      <Saludo2 nombre="Dani" apellido="González" /> */}

      <div className="logo-contenedor">
        <img src={logo} alt="logo" />
      </div>

      <Contador nClick={nClick} />
      <Boton texto="contador" esClick={true} manejarClick={contador} />
      <Boton texto="reiniciar" esClick={false} manejarClick={reiniciar} />
    </div>
  );
}

export default App;
