import React, { useEffect, useState } from "react";
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
  const moviesSearch = useSelector((state) => state.movies.search);
  const [page, setPage] = useState(1);

  const contadorPage = (value, number) => {
    if (value === "siguiente" && number !== 1000) setPage(page + 1);
    if (value === "atras" && number !== 1) setPage(page - 1);
  };

  useEffect(() => {
    dispatch(genreMovies());
    dispatch(popularMovies(page));
  }, [dispatch, page]);

  return (
    <>
      <Navbar />
      {genresMovies.length && moviesPopular.length ? (
        <>
          <div>
            <SearchBar type={"película"} />
            <div className="conteiner-genres">
              <button className="btn-genre">All</button>
              {genresMovies.map((genre) => (
                <Genres key={genre.id} genre={genre} />
              ))}
            </div>
            {moviesSearch.length ? (
              <div className="cards-container">
                {moviesSearch.map((movie) => (
                  <Cards key={movie.id} movie={movie} button={"add"} />
                ))}
              </div>
            ) : (
              <div className="cards-container">
                {moviesPopular.map((movie) => (
                  <Cards key={movie.id} movie={movie} button={"add"} />
                ))}
              </div>
            )}
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

export default Movies;
