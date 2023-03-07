import React from "react";
import { Link } from "react-router-dom";
import {AiFillHeart} from "react-icons/ai"
import { useDispatch } from "react-redux";
import { addFavorite } from "../states/favorites";

function Cards({ movie, user }) {
  const dispatch = useDispatch()

  return (
    <div className="card">
      <div className="img-card">
          <img src={`https://image.tmdb.org/t/p/w300/${movie?.poster_path}`} alt="img_poster"/>
          <div className="description-card">
            <h5>{movie.title || movie.name}</h5>
            <Link to={`${movie?.id}`}><button>Ver Detalles</button></Link>
            <button className="favorite-card" onClick={()=> dispatch(addFavorite({movie, user}))}><AiFillHeart /></button>
          </div>
      </div>
    </div>
  );
}

export default Cards;
