import React from 'react'
import show from '../utils/showPassword'
import Navbar from './Navbar'

function Register() {
  return (
    <>
    <Navbar />
    <div className="register-container">
      <div className="register-box">
        <h2>Crea tu cuenta en Watch Me</h2>
        <form autoComplete="off">
          <div className="field-register">
            <input type="text" id="nombre" required/>
            <label htmlFor="nombre">Nombre</label>
          </div>
          <div className="field-register">
            <input type="text" id="apellido" required/>
            <label htmlFor="apellido">Apellido</label>
          </div>
          <div className="field-register">
            <input type="text" id="email" required/>
            <label htmlFor="email">Correo electrónico</label>
          </div>
          <div className="field-register">
            <input type="password" id="password" required/>
            <label htmlFor="password">Contraseña</label>
            <span className="show" onClick={show}>Mostrar</span>
          </div>
          <button>Crear</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Register