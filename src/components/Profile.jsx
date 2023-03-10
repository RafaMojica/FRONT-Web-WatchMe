import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import {CgUserlane} from "react-icons/cg";

function Perfil() {
  const user = useSelector((state) => state.users.user);
  
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
          <button>Eliminar perfil</button>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
