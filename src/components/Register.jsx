import React, { useState } from "react";
import {
  validateRequiredFields,
  validatePasswordLength,
  validatePasswordMatch,
} from "../utils/validations";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validar campos requeridos
    const requiredFieldsError = validateRequiredFields({
      email,
      password,
      confirmPassword,
    });
    if (requiredFieldsError) {
      setMessage(requiredFieldsError);
      return;
    }

    //Validar longitud de la contraseña
    const passwordLengthError = validatePasswordLength(password);
    if (passwordLengthError) {
        setMessage(passwordLengthError);
        return;
    }

    //Validar coincidencia de contraseñas
    const passwordMatchError = validatePasswordMatch(password, confirmPassword);
    if (passwordMatchError) {
        setMessage(passwordMatchError);
        return;
    }

    //Si todo es correcto
    setMessage('Regitro exitoso')
  };

  return (
    <>
      <h2 className="my-3">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Correo electrónico
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirmar contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Registrarse
        </button>
        {message && (
          <div
            className={`alert mt-3 ${
              message === "Registro exitoso." ? "alert-success" : "alert-danger"
            }`}
          >
            {message}
          </div>
        )}
      </form>
    </>
  );
}

export default Register;
