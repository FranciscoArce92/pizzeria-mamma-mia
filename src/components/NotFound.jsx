import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container text-center p-70">
      <h1>🚨 Error 404: Página no encontrada</h1>
      <p>La página que buscas no existe.</p>
      <Link to="/" className="btn btn-primary">Volver al inicio</Link>
    </div>
  );
};

export default NotFound;