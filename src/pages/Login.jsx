import React, { useState } from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";


function Login() {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ message, setMessage ] = useState('')
    const { login } = useUser();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");

        const success = await login(email, password);
        if (success) {
          setMessage("Inicio de sesión exitoso.");
          setTimeout(() => navigate("/prole"), 1000); 
        } else {
          setMessage("Error: Verifica tu correo y contraseña.");
        }
    }
  return (

    <>
    <h2 className='my-3'>Login</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Correo electrónico</label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Contraseña</label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Iniciar sesión</button>
      {message && (
        <div className={`alert mt-3 ${message === 'Inicio de sesión exitoso.' ? 'alert-success' : 'alert-danger'}`}>
          {message}
        </div>
      )}
    </form>
    </>

  );
}

export default Login;