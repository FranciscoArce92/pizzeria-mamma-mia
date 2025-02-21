import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Pizzas = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        if (!response.ok) throw new Error("Error al cargar la pizza");

        const data = await response.json();
        setPizza(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPizza();
  }, [id]);

  if (loading) return <p>Cargando pizza...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!pizza) return <p>No se encontró la pizza.</p>;

  return (
    <div className="card m-auto mt-5" style={{ width: "18rem" }}>
      <img src={pizza.img} className="card-img-top" alt={pizza.name} />
      <div className="card-body">
        <h5 className="card-title">{pizza.name}</h5>
        <p className="card-text">
          <strong>Precio:</strong> ${pizza.price.toLocaleString("es-CL")}
        </p>
        <p className="card-text">
          <strong>Ingredientes:</strong> {pizza.ingredients.join(", ")}
        </p>
        <p className="card-text">{pizza.desc}</p>
        <button
          className="btn btn-primary"
          onClick={() => addToCart( pizza )}
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default Pizzas;
