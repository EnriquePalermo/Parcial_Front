import Card from "./Components/Card";
import Formulario from "./Components/Formulario";
import { useState } from "react";


import './App.css'

function App() {
  const [datos, setDatos] = useState({ nombre: "", color: "" });
  const [mostrarCard, setMostrarCard] = useState(undefined);

  const mostrarDatos = (nomb, colo) => {
    let nuevoDato = {
      nombre: nomb,
      color: colo,
    };

    setDatos(nuevoDato);

    setMostrarCard(true);

  };

  function renderCard() {
    if (mostrarCard) {
      return <Card datos={datos} />;
    } else {
      return null;
    }
  } 



  return (
    <div>
      <Formulario mostrarDatos={mostrarDatos} />
      {renderCard()}
    </div>
  );
}

export default App;