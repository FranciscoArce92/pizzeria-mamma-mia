const Navbar = () => {
    const total = 25000;
    const token = false;

  return (
    <>
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
                <a className="nav-link active" aria-current="page" href="#">
                  <img
                    src="./src/assets/img/pizza.png"
                    className="img-fluid rounded-top"
                    width={"20px"}
                    alt=""
                  />
                  Home
                </a>
              </li>
              
              {/* Renderización condicional según el estado de token */}
              {token ? (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <img
                        src="./src/assets/img/icons8-user-24.png"
                        width={"20px"}
                        alt=""
                      />
                      Profile
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <img
                        src="./src/assets/img/icons8-salida-30.png"
                        width={"20px"}
                        alt=""
                      />
                      Logout
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <img
                        src="./src/assets/img/icons8-accede-redondeado-derecho-24.png"
                        width={"20px"}
                        alt=""
                      />
                      Login
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <img
                        src="./src/assets/img/icons8-añadir-usuario-masculino-30.png"
                        width={"20px"}
                        alt=""
                      />
                      Register
                    </a>
                  </li>
                </>
              )}
            </ul>

              <span className="navbar-text ms-auto">
                <img src="./src/assets/img/icons8-carrito-de-compras-30.png" width={'20px'} alt="Carrito de compras" className="me-2" />
                Total: ${total.toLocaleString()}
              </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
