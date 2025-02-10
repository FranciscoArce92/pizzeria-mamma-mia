import { useState, useEffect } from "react";

const Pizzas = () => {
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas/p003');
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
  }, []);

  if (loading) return <p>Cargando pizza...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!pizza) return <p>No se encontró la pizza.</p>;

  return (
    <div className="card m-3" style={{ width: "18rem" }}>
      <img src={pizza.img} className="card-img-top" alt={pizza.name} />
      <div className="card-body">
        <h5 className="card-title">{pizza.name}</h5>
        <p className="card-text"><strong>Precio:</strong> ${pizza.price.toLocaleString("es-CL")}</p>
        <p className="card-text"><strong>Ingredientes:</strong> {pizza.ingredients.join(", ")}</p>
        <p className="card-text">{pizza.desc}</p>
        <button className="btn btn-primary">Añadir al carrito</button>
      </div>
    </div>
  );
};

export default Pizzas;