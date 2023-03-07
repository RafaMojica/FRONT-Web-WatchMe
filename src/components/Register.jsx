import React from 'react'
import show from '../utils/showPassword'
import Navbar from './Navbar'
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { registerUser } from '../states/users';
import validation from "../validations/forms"
import { useNavigate } from 'react-router';

function Register() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { register, handleSubmit, formState: {errors} } = useForm();

  const dataRegister = (data) => {
    dispatch(registerUser(data))
    navigate("/login")
  }

  return (
    <>
    <Navbar />
    <div className="register-container">
      <div className="register-box">
        <h2>Crea tu cuenta en Watch Me</h2>
        <form autoComplete="off" onSubmit={handleSubmit(dataRegister)}>
          <div className="field-register">
            <input type="text" id="name" name='name' required {...register("name", validation.name)}/>
            <label htmlFor="nombre">Nombre</label>
            <div className='erros-register'>
              {errors.name && errors.name.message}
            </div>
          </div>
          <div className="field-register">
            <input type="text" id="apellido" required {...register("lastname", validation.lastname)}/>
            <label htmlFor="apellido">Apellido</label>
            <div className='erros-register'>
              {errors.lastname && errors.lastname.message}
            </div>
          </div>
          <div className="field-register">
            <input type="text" id="email" required {...register("email", validation.email)}/>
            <label htmlFor="email">Correo electrónico</label>
            <div className='erros-register'>
              {errors.email && errors.email.message}
            </div>
          </div>
          <div className="field-register">
            <input type="password" id="password" required {...register("password", validation.password)}/>
            <label htmlFor="password">Contraseña</label>
            <span className="show" onClick={show}>Mostrar</span>
            <div className='erros-register'>
              {errors.password && errors.password.message}
            </div>
          </div>
          <button>Crear</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Register