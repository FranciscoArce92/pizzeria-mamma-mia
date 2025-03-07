import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import PizzaDetail from "./pages/PizzaDetail";
import Prole from "./components/Prole";
import NotFound from "./components/NotFound";
import { PizzaProvider } from "./context/PizzaContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import RedirectIfAuth from "./components/RedirectIfAuth.jsx";

function App() {
  return (
    <>
    <Router>
      <UserProvider>
        <PizzaProvider>
          <CartProvider>
            <Navbar />
            <Routes>
              <Route
                path="login"
                element={
                  <RedirectIfAuth>
                    <Login />
                  </RedirectIfAuth>
                }
              />
              <Route
                path="register"
                element={
                  <RedirectIfAuth>
                    <Register />
                  </RedirectIfAuth>
                }
              />
              <Route path="/" element={<Home />} />
              <Route path="cart" element={<Cart />} />
              <Route path="pizzas/:id" element={<PizzaDetail />} />
              <Route path="prole" element={<ProtectedRoute><Prole /></ProtectedRoute>} />
              <Route path="404" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </CartProvider>
        </PizzaProvider>
      </UserProvider>
    </Router>
    </>
  );
}

export default App;
