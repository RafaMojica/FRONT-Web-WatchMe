import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../common/Cards";
import Genres from "../common/Genres";
import Loading from "../common/Loading";
import SearchBar from "../common/SearchBar";
import { genreSeries, popularSeries } from "../states/series";
import Navbar from "./Navbar";

function Series() {
  const dispatch = useDispatch();
  const seriesPopular = useSelector((state) => state.series.popular);
  const genresSeries = useSelector((state) => state.series.genre);
  const [page, setPage] = useState(1)

  const contadorPage = (value, number) => {
    if (value === "siguiente" && number !== 1000) setPage(page + 1);
    if (value === "atras" && number !== 1) setPage(page - 1);
  };

  useEffect(() => {
    dispatch(genreSeries());
    dispatch(popularSeries(page));
  }, [dispatch, page]);

  return (
    <>
      <Navbar />
      {genresSeries.length && seriesPopular.length ? (
        <>
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
                <Cards key={serie.id} movie={serie} button={"add"} />
              ))}
            </div>
            <div className="btn-container">
              <button className="btn-genre" onClick={() => contadorPage("atras", page)}>Atras</button>
              <button className="btn-genre" onClick={() => contadorPage("siguiente", page)}>Siguiente</button>
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Series;
