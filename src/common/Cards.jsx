import React from "react";
import { Link } from "react-router-dom";
import {AiFillHeart} from "react-icons/ai"

function Cards({ movie }) {
  return (
    <div className="card">
      <div className="img-card">
          <img src={`https://image.tmdb.org/t/p/w300/${movie?.poster_path}`} alt="img_poster"/>
          <div className="description-card">
            <h5>{movie.title || movie.name}</h5>
            <Link to={`${movie?.id}`}><button>Ver Detalles</button></Link>
            <button className="favorite-card"><AiFillHeart /></button>
          </div>
      </div>
    </div>
  );
}

export default Cards;
