import React from "react";
import { Link } from "react-router-dom";
import {AiFillHeart} from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, deleteFavorites } from "../states/favorites";

function Cards({ movie, button }) {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.users.user);

  const buttonFavorite = () => {
    if (button === "add") dispatch(addFavorite({movie, user}))
    if(button === "delete") dispatch(deleteFavorites(movie.id))
  }

  return (
    <div className="card">
      <div className="img-card">
          <img src={`https://image.tmdb.org/t/p/w300/${movie?.poster_path}`} alt="img_poster"/>
          <div className="description-card">
            <h5>{movie.title || movie.name}</h5>
            <Link to={`${movie?.id}`}><button>Ver Detalles</button></Link>
            <button className="favorite-card" onClick={buttonFavorite}><AiFillHeart /></button>
          </div>
      </div>
    </div>
  );
}

export default Cards;
