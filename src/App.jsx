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
      <UserProvider>
        <PizzaProvider>
          <CartProvider>
            <Router>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="prole"
                  element={
                    <ProtectedRoute>
                      <Prole />
                    </ProtectedRoute>
                  }
                />
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

                <Route path="cart" element={<Cart />} />
                <Route path="pizzas/:id" element={<PizzaDetail />} />
                <Route path="404" element={<NotFound />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer />
            </Router>
          </CartProvider>
        </PizzaProvider>
      </UserProvider>
    </>
  );
}

export default App;
