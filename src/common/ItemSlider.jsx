import React from "react";

function ItemSlider({data, index}) {
  return (
    <div className="slider-background" style={{ backgroundImage: `url(${process.env.REACT_APP_URL_IMG_ORIGINAL}/${data[index]?.backdrop_path})`}}>
      <div className="slider-description">
        <h2>{data[index]?.title || data[index]?.name}</h2>
        <h3>{`Calificacion: ${data[index]?.vote_average}`}</h3>
        <p>{data[index]?.overview || "Aun no contramos con su descripción"}</p>
        <button>Ver Trailer</button>
      </div>
    </div>
  );
}

export default ItemSlider;
