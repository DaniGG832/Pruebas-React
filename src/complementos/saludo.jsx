import '../css/saludo.css'


function saludo(props) {
  return (
    
      <h1> {'hola '+props.nombre +' '+props.apellido}</h1>
    
  );
}

export default saludo;
