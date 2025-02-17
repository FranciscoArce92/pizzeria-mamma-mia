import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { total } = useCart();
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg bg-dark-subtle">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                🍕 Home
              </Link>
            </li>

            {/* Renderización condicional según el estado del token */}
            {token ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/prole">
                    <img
                      src="./src/assets/img/icons8-user-24.png"
                      width="20px"
                      alt="Profile"
                    />{" "}
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/logout">
                    <img
                      src="./src/assets/img/icons8-salida-30.png"
                      width="20px"
                      alt="Logout"
                    />{" "}
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    <img
                      src="./src/assets/img/icons8-accede-redondeado-derecho-24.png"
                      width="20px"
                      alt="Login"
                    />{" "}
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    <img
                      src="./src/assets/img/icons8-añadir-usuario-masculino-30.png"
                      width="20px"
                      alt="Register"
                    />{" "}
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>

          {/* Total del carrito con un enlace al carrito */}
          <span className="navbar-text ms-auto">
            <Link to="/cart" className="text-decoration-none text-dark fw-bold">
              🛒 Total: ${total?.toLocaleString('es-CL') || 0}
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;