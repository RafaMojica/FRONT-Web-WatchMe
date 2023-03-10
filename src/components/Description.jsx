import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { empySelectMovie, selectMovie } from "../states/movies";
import { empySelectSerie, selectSerie } from "../states/series";

function Description() {
  const { id, type } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movies.select);
  const serie = useSelector((state) => state.series.select);
  let films = {};

  useEffect(() => {
    if (type === "movies") dispatch(selectMovie(id));
    if (type === "series") dispatch(selectSerie(id));
  }, [id, type, dispatch]);

  if (type === "movies") films = movie;
  if (type === "series") films = serie;

  const buttonBack = () => {
    window.history.back();
    if (type === "movies") dispatch(empySelectMovie());
    if (type === "series") dispatch(empySelectSerie());
  };

  return (
    <>
      <div
        key={films?.id}
        className="img-description"
        style={{
          backgroundImage: `url(${process.env.REACT_APP_URL_IMG_ORIGINAL}/${films?.backdrop_path})`,
        }}
      >
        <div className="description-box">
          <div>
            <img
              src={`${process.env.REACT_APP_URL_IMG_W342}/${films?.poster_path}`}
              alt="img_poster"
            />
          </div>
          <div className="description">
            <h2>{films?.title || films?.name}</h2>
            <p>{`Calificación: ${films?.vote_average}`}</p>
            <p>{films?.overview || "Aun no contamos con su descripcion"}</p>
            <button onClick={buttonBack}>Atrás</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Description;
