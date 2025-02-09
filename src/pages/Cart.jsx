import { useState } from "react";
import { pizzaCart } from "../js/pizzas.js"

const Cart = () => {

    const [cart, setCart] = useState(pizzaCart);

    //Función para aumentar la cantidad de una pizza
    const increase = (id) => {
        setCart(cart.map(item =>
            item.id === id ? { ...item, count: item.count + 1 } : item
        ));
    }

    //Función para disminuir la cantidad de una pizza
    const decrease = (id) => {
        setCart(cart
            .map(item => item.id === id ? { ...item, count: item.count - 1 } : item)
            .filter(item => item.count > 0)
        );
    }

    //Calcular total
    const total = cart.reduce((sum, item) => sum + item.price * item.count, 0);

    return (
        <div className="container mt-4">
        <h3>🛒 Carrito de Compras</h3>
        {cart.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <>
            <div className="list-group">
              {cart.map((item) => (
                <div key={item.id} className="list-group-item d-flex align-items-center justify-content-between">
                  <img src={item.img} alt={item.name} style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "5px" }} />
                  <span className="fw-bold">{item.name}</span>
                  <span>${item.price.toLocaleString('es-CL')}</span>
                  <div className="d-flex align-items-center">
                    <button className="btn btn-sm btn-danger" onClick={() => decrease(item.id)}>-</button>
                    <span className="mx-2">{item.count}</span>
                    <button className="btn btn-sm btn-success" onClick={() => increase(item.id)}>+</button>
                  </div>
                </div>
              ))}
            </div>
  
            <div className="mt-3 p-3 bg-light rounded">
              <h4>Total: ${total.toLocaleString('es-CL')}</h4>
              <button className="btn btn-primary mt-2">Pagar</button>
            </div>
          </>
        )}
      </div>
    );
}

export default Cart;