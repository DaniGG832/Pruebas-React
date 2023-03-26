import React from "react";
import '../css/contador.css';

function contador(props) {
return(
  <div className="contador">

  {props.nClick}

  </div>
)
}

export default contador;