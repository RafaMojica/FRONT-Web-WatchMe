import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoHeartCircleOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import appearMenu from "../utils/navbar";
import Logo from "../assets/logoWatchMe.png";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../states/users";

function Navbar() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.users.user);

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
      {user?.id ? (
        <>
          <div className="navbar-login">
            <NavLink to="/favorites"><IoHeartCircleOutline className="scale favorite" /></NavLink>
            <NavLink to="/profile"><div className="scale profile"><FaUserCircle /></div></NavLink>
            <Link to="/" onClick={()=> dispatch(logoutUser())}>Cerrar Sesion</Link>
            <AiOutlineMenu className="icon appear" id="icon-menu" onClick={appearMenu} />
            <AiOutlineClose className="icon" id="icon-close" onClick={appearMenu} />
          </div>
        </>
      ) : (
        <>
          <div className="navbar-login">
            <NavLink to="/login">Ingresar</NavLink>
            <NavLink to="/register">Regístrarse</NavLink>
            <AiOutlineMenu className="icon appear" id="icon-menu" onClick={appearMenu} />
            <AiOutlineClose className="icon" id="icon-close" onClick={appearMenu} />
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar;
