import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../common/Cards";
import Genres from "../common/Genres";
import SearchBar from "../common/SearchBar";
import { genreMovies, popularMovies } from "../states/movies";
import Navbar from "./Navbar";

function Movies() {
  const dispatch = useDispatch();
  const moviesPopular = useSelector((state) => state.movies.popular);
  const genresMovies = useSelector((state) => state.movies.genre);

  useEffect(() => {
    dispatch(genreMovies());
    dispatch(popularMovies());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className="movie-container">
        <SearchBar type={"película"} />
        <div className="conteiner-genres">
          <button className="btn-genre">All</button>
          {genresMovies.map((genre) => (
            <Genres key={genre.id} genre={genre} />
          ))}
        </div>
        <div className="cards-container">
          {moviesPopular.map((movie) => (
            <Cards key={movie.id} movie={movie} />
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

export default Movies;
