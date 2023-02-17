import React from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

function Carrusel({ posters, type, url }) {
  return (
    <div className="container-carousel">
      <div className="name-carousel">
        <h3>{type} MEJOR PUNTUADAS</h3>
        <Link to={`${url}`}>
          <button className="btn-carrousel">Ver mas {type}</button>
        </Link>
      </div>
      <div className="list-carousel" id="list-carousel">
        <button className="change button-pre">
          <AiOutlineArrowLeft />
        </button>
        <div className="track-carousel" id="track">
          <div className="carrusel">
            {posters.map((poster) => (
              <Link key={poster?.id} to={`${url}/${poster?.id}`}>
                <img
                  src={`${process.env.REACT_APP_URL_IMG_W300}/${poster?.poster_path}`}
                  alt="poster-img"
                />
              </Link>
            ))}
          </div>
        </div>
        <button className="change button-next">
          <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Carrusel;
