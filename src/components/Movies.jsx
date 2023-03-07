import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../common/Cards";
import Genres from "../common/Genres";
import Loading from "../common/Loading";
import SearchBar from "../common/SearchBar";
import { genreMovies, popularMovies } from "../states/movies";
import Navbar from "./Navbar";

function Movies() {
  const dispatch = useDispatch();
  const moviesPopular = useSelector((state) => state.movies.popular);
  const genresMovies = useSelector((state) => state.movies.genre);
  const user = useSelector((state) => state.users.user);

  useEffect(() => {
    dispatch(genreMovies());
    dispatch(popularMovies());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      {genresMovies.length && moviesPopular.length ? (
        <>
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
                <Cards key={movie.id} movie={movie} user={user} />
              ))}
            </div>
            <div className="btn-container">
              <button className="btn-genre">Atras</button>
              <button className="btn-genre">Siguiente</button>
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Movies;
