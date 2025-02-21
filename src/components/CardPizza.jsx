import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function CardPizza({ name, desc, price, ingredients, img, id }) {
  const { addToCart } = useCart();

  return (
    <div className="card text-center" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt={`Pizza ${name}`} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <hr />
        <p className="card-text">{desc}</p>
        <h6>Ingredientes:</h6>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index} className="d-inline me-2">{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className="card-footer">
        <p className="card-text">Precio: ${price.toLocaleString('es-CL')}</p>
        <div className="d-flex justify-content-between">
          <Link to={`/pizzas/${id}`} className="btn btn-primary">
            Ver más
          </Link>
          <button className="btn btn-secondary" onClick={() => addToCart({ id, name, price, img })}>
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardPizza;