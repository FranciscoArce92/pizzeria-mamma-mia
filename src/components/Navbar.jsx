import { Link } from 'react-router-dom';
import pizzaIcon from '../assets/img/pizza.png';
import loginIcon from '../assets/img/login.png';
import registerIcon from '../assets/img/register.png';
import cartIcon from '../assets/img/cart.png';
import profileIcon from '../assets/img/icons8-user-24.png';
import logoutIcon from '../assets/img/icons8-salida-30.png'
import { useCart } from '../context/CartContext';
import { useUser } from '../context/UserContext';

const Navbar = () => {
  const { total } = useCart();
  const { token, logout } = useUser();

  return (
    <nav className="navbar navbar-expand-lg bg-dark-subtle fixed-top">
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
                <img src={pizzaIcon} style={{ width: '18px' }} alt="Home" /> Home
              </Link>
            </li>

            {token ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/prole">
                    <img src={profileIcon} width="20px" alt="Profile" /> Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <button className="nav-link" onClick={logout}>
                    <img src={logoutIcon} alt="Logout Icon" width='20px' />
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    <img src={loginIcon} width="20px" alt="Login" /> Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    <img src={registerIcon} width="20px" alt="Register" /> Register
                  </Link>
                </li>
              </>
            )}
          </ul>

          <span className="navbar-text ms-auto">
            <Link to="/cart" className="text-decoration-none text-dark fw-bold">
              <img src={cartIcon} width="20px" alt="Cart" /> Total: ${total?.toLocaleString('es-CL') || 0}
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
