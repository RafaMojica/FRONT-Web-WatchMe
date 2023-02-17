import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../common/Cards";
import Genres from "../common/Genres";
import SearchBar from "../common/SearchBar";
import { genreSeries, popularSeries } from "../states/series";
import Navbar from "./Navbar";

function Series() {
  const dispatch = useDispatch();
  const seriesPopular = useSelector((state) => state.series.popular);
  const genresSeries = useSelector((state) => state.series.genre);

  useEffect(() => {
    dispatch(genreSeries());
    dispatch(popularSeries());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className="serie-container">
        <SearchBar type={"serie"} />
        <div className="conteiner-genres">
          <button className="btn-genre">All</button>
          {genresSeries.map((genre) => (
            <Genres key={genre.id} genre={genre} />
          ))}
        </div>
        <div className="cards-container">
          {seriesPopular.map((serie) => (
            <Cards key={serie.id} movie={serie} />
          ))}
        </div>
        <div className="btn-container">
          <button className="btn-genre">Atras</button>
          <button className="btn-genre">Siguiente</button>
        </div>
      </div>
    </>
  );
}

export default Series;
