import React from "react";

function Carrusel({ posters, type }) {
  return (
    <div className="container-carrusel">
      <div className="description-carrusel">
        <h3>{type} MEJOR PUNTUADAS</h3>
        <button>Ver mas {type}</button>
      </div>
      <div className="poster-carrusel">
        {posters.map((poster) => (
          <img src={`https://image.tmdb.org/t/p/w300/${poster?.poster_path}`} alt="poster-img" />
        ))}
      </div>
      <ul className="puntos">
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}

export default Carrusel;
