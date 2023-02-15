import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import appearMenu from "../utils/navbar"
import Logo from "../assets/logoWatchMe.png";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <NavLink to="/">
          <img src={Logo} alt="logo" />
        </NavLink>
      </div>

      <div className="navbar-menu">
        <ul>
          <li><NavLink to="/">Inicio</NavLink></li>
          <li><NavLink to="/movies"> Peliculas</NavLink></li>
          <li><NavLink to="/series">Series</NavLink></li>
        </ul>
      </div>

      <div className="navbar-login">
        <NavLink to="/login">Ingresar</NavLink>
        <NavLink to="/register">Regístrarse</NavLink>
        <AiOutlineMenu className="icon appear" id="icon-menu" onClick={appearMenu} />
        <AiOutlineClose className="icon" id="icon-close" onClick={appearMenu} />
      </div>
    </div>
  );
}

export default Navbar;
