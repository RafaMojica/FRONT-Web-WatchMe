import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../common/Cards";
import Genres from "../common/Genres";
import SearchBar from "../common/SearchBar";
import { genreMovies } from "../states/movies";
import Navbar from "./Navbar";

function Movies() {
  const dispatch = useDispatch()
  const moviesPopular = useSelector((state) => state.movies.popular);
  const genre = useSelector((state) => state.movies.genre);
  const type = "película";

  useEffect(()=>{
    dispatch(genreMovies())
  }, [dispatch])

  return (
    <>
      <Navbar />
      <div className="movie-container">
        <SearchBar type={type} />
        <Genres genre={genre} />
        <div className="cards-container">
          {moviesPopular.map((movie) => (
            <Cards key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Movies;
