import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Pizzas from "./pages/Pizzas";
import Prole from "./components/Prole";
import NotFound from "./components/NotFound";
import { PizzaProvider } from "./context/PizzaContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";

function App() {
  return (
    <>
      <PizzaProvider>
        <CartProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
              <Route path="cart" element={<Cart />} />
              <Route path="pizzas/:id" element={<Pizzas/>} />
              <Route path="prole" element={<Prole />} />
              <Route path="404" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
          <Footer />
        </CartProvider>
      </PizzaProvider>
    </>
  );
}

export default App;
