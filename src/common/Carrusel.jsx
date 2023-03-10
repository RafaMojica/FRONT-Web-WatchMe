import React from "react";
import { useSnapCarousel } from "react-snap-carousel";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

function Carrusel({ posters, type, url }) {
  const { scrollRef, next, prev } = useSnapCarousel();

  return (
    <>
      <div className="container-carousel">
        <div className="description-carrusel">
          <h3>{type} MEJOR PUNTUADAS</h3>
          <Link to={`${url}`}>
            <button className="btn-description">Ver mas {type}</button>
          </Link>
        </div>
        <div className="carrusel">
          <ul ref={scrollRef} className="list-carousel" >
            {posters.map((poster) => (
              <Link key={poster?.id} to={`${url}/${poster?.id}`}>
                <img src={`${process.env.REACT_APP_URL_IMG_W300}/${poster?.poster_path}`} alt="poster-img" />
              </Link>
            ))}
          </ul>
          <button className="button-pre" onClick={() => prev()}><AiOutlineArrowLeft /></button>
          <button className="button-next" onClick={() => next()}><AiOutlineArrowRight /></button>
        </div>
      </div>
    </>
  );
}

export default Carrusel;
