import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemSlider from "../common/ItemSlider";
import Carrusel from "../common/Carrusel";
import { popularMovies, topMovies } from "../states/movies";
import { popularSeries, topSeries } from "../states/series";
import Navbar from "./Navbar";
import Loading from "../common/Loading";

function Home() {
  const dispatch = useDispatch();
  const moviesPopular = useSelector((state) => state.movies.popular);
  const seriesPopular = useSelector((state) => state.series.popular);
  const topRatedMovie = useSelector((state) => state.movies.topRated);
  const topRatedSerie = useSelector((state) => state.series.topRated);

  useEffect(() => {
    dispatch(popularMovies());
    dispatch(popularSeries());
    dispatch(topMovies());
    dispatch(topSeries());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      {moviesPopular.length && topRatedMovie.length ? (
        <>
          <div className="slider-container">
            <div className="slider-list">
              <ItemSlider data={moviesPopular} index={0} />
              <ItemSlider data={seriesPopular} index={0} />
              <ItemSlider data={moviesPopular} index={1} />
              <ItemSlider data={seriesPopular} index={1} />
            </div>
          </div>
          <Carrusel posters={topRatedMovie} type={"PELICULAS"} url={"movies"} />
          <Carrusel posters={topRatedSerie} type={"SERIES"} url={"series"} />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Home;
