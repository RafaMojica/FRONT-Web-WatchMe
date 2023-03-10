import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import {CgUserlane} from "react-icons/cg";
import { deleteUser, logoutUser } from "../states/users";
import { useNavigate } from "react-router";

function Perfil() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state) => state.users.user);
  
  const deleteButton = () => {
    dispatch(logoutUser())
    dispatch(deleteUser(user.email))
    navigate("/")
  }

  return (
    <div>
      <Navbar />
      <div className="perfil-box">
        <div className="perfil-container">
          <div className="shape">
            <div className="perfil-image"><CgUserlane /></div>
          </div>
          <h3>Nombre</h3>
          <h4>{`${user.name} ${user.lastname}`}</h4>
          <h3>Correo</h3>
          <h4>{user.email}</h4>
          <button onClick={deleteButton}>Eliminar perfil</button>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
