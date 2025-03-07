import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";
import { useState } from "react";

const Cart = () => {

   const { cart, increase, decrease, total, clearCart } = useCart();
   const { token } = useUser();
   const [ message, setMessage ] = useState("");
   
   const handleCheckout = async () => {
    if (!token) return;

    try {
      const response = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ items: cart }),
      });

      if (!response.ok) {
        throw new Error("Error en la compra");
      }

      setMessage("¡Compra realizada con éxito!");
      setTimeout(() => {
        clearCart();
        setMessage("")
      }, 2000);
    } catch (error) {
      console.error("Error al procesar la compra:", error);
    }
  };


    return (
      <div className="container p-70">
      <h3>🛒 Carrito de Compras</h3>
      {message && <div className="alert alert-success">{message}</div>}
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <div className="list-group">
            {cart.map((item) => (
              <div key={item.id} className="list-group-item d-flex align-items-center justify-content-between">
                <img src={item.img} alt={item.name} style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "5px" }} />
                <span className="fw-bold">{item.name}</span>
                <span>${item.price.toLocaleString("es-CL")}</span>
                <div className="d-flex align-items-center">
                  <button className="btn btn-sm btn-danger" onClick={() => decrease(item.id)}>-</button>
                  <span className="mx-2">{item.quantity}</span>
                  <button className="btn btn-sm btn-success" onClick={() => increase(item.id)}>+</button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-3 p-3 bg-light rounded">
            <h4>Total: ${total.toLocaleString("es-CL")}</h4>
            <button 
              className="btn btn-primary mt-2"
              disabled={!token}
              onClick={handleCheckout}>
              Pagar
            </button>
          </div>
        </>
      )}
    </div>
    );
}

export default Cart;