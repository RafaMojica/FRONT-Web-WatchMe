import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import appearMenu from "../utils/navbar"
import Logo from "../assets/logoWatchMe.png";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>

      <div className="navbar-menu">
        <ul>
          <li><Link to="/" className="active">Inicio</Link></li>
          <li><Link to="/movies">Películas</Link></li>
          <li><Link to="/series">Series</Link></li>
        </ul>
      </div>

      <div className="navbar-login">
        <Link to="/login">Ingresar</Link>
        <Link to="/register">Regístrarse</Link>
        <AiOutlineMenu className="icon appear" id="icon-menu" onClick={appearMenu} />
        <AiOutlineClose className="icon" id="icon-close" onClick={appearMenu} />
      </div>
    </div>
  );
}

export default Navbar;
