import React from "react";
import { Link } from "react-router-dom";
import show from "../utils/showPassword";
import Navbar from "./Navbar";

function Login() {
  return (
    <>
    <Navbar />
    <div className="login-container">
      <div className="login-box">
        <h2>Bienvenido de vuelta</h2>
        <p>Inicia sesión</p>
        <form autoComplete="off">
          <div className="field-login">
            <input type="text" id="email" required/>
            <label htmlFor="email">Correo electrónico</label>
          </div>
          <div className="field-login">
            <input type="password" id="password" required/>
            <label htmlFor="password">Contraseña</label>
            <span className="show" onClick={show}>Mostrar</span>
          </div>
          <button>Ingresar</button>
          <div className="forget-login">
            ¿No tienes cuenta? <Link to="/register">Regístrate</Link>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default Login;
