import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Prole = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

    return (
      <div className="container text-center p-70">
      <h1>👤 Perfil de Usuario</h1>
      <p>Email: {user}</p>
      <button className="btn btn-danger" onClick={handleLogout}>
        Cerrar Sesión
      </button>
    </div>
    );
  };
  
  export default Prole;