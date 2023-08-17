import { useState } from "react";
import './Formulario.css';

function Formulario({ mostrarDatos }) {
  const [nombre, setNombre] = useState("");
  const [color, setColor] = useState("");
  const [mensajeError, setMensajeError] = useState("");
  const [nombreIngresado, setNombreIngresado] = useState(false);
  const [colorIngresado, setColorIngresado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.length < 3 || nombre.trim() !== nombre || color.length < 6) {
      setMensajeError("Por favor chequea que la información sea correcta");
      return;
    }

    mostrarDatos(nombre, color);
    setNombre("");
    setColor("");
    setNombreIngresado(true);
    setColorIngresado(true);
    setMensajeError("");
  };
  return (
    <div>
      <h2>Elige un color</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            disabled={nombreIngresado}
          />
        </label>
      <br/>
        
        <label>
          <input
            type="text"
            placeholder="Ingresa tu color favorito"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            disabled={colorIngresado}
          />
        </label>
        <br/>
        
        <button type="submit" disabled={colorIngresado}>
          ENVIAR
        </button>
      </form>
      {mensajeError && <p className="error">{mensajeError}</p>}
    </div>
  );
}

export default Formulario;
