import React, { useState } from "react";
import { validateRequiredFields, validatePasswordLength } from "../utils/validations";


function Login() {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ message, setMessage ] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        //Validar campos requeridos
        const requiredFieldsError = validateRequiredFields({ email, password });
        if (requiredFieldsError) {
            setMessage(requiredFieldsError);
            return;
        }

        //Validar longitud de contraseña
        const passwordLengthError = validatePasswordLength(password);
        if (passwordLengthError) {
            setMessage(passwordLengthError);
            return;
        }

        //Si todo es correcto
        setMessage('Inicio de sesión exitoso')
    }
  return (
    <>
    <h2 className='my-3'>Login</h2>
    <form onSubmit={handleLogin}>
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

export default Login