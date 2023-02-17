import React from "react";
import { Link } from "react-router-dom";
import show from "../utils/showPassword";
import Navbar from "./Navbar";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginUser } from "../states/users";
import validation from "../validations/forms"

function Login() {
  const dispatch = useDispatch()
  const { register, handleSubmit, formState: {errors} } = useForm();

  return (
    <>
    <Navbar />
    <div className="login-container">
      <div className="login-box">
        <h2>Bienvenido de vuelta</h2>
        <p>Inicia sesión</p>
        <form autoComplete="off" onSubmit={handleSubmit((data)=> dispatch(loginUser(data)))}>
          <div className="field-login">
            <input type="text" id="email" required {...register("email", validation.email)}/>
            <label htmlFor="email">Correo electrónico</label>
            <div className='erros-login'>
              {errors.email && errors.email.message}
            </div>
          </div>
          <div className="field-login">
            <input type="password" id="password" required {...register("password", validation.password)}/>
            <label htmlFor="password">Contraseña</label>
            <span className="show" onClick={show}>Mostrar</span>
            <div className='erros-login'>
              {errors.password && errors.password.message}
            </div>
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
