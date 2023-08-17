import "./Card.css";

function Card({ datos }) {
  return (
    <div className="card">
      <h4>Hola {datos.nombre}! </h4>
      <h4>Sabemos que tu color favorito es:</h4>
      <h3>{datos.color}</h3>
    </div>
  );
}

export default Card;
