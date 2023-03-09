import React from "react";
import { ImSearch } from "react-icons/im";
import { useDispatch } from "react-redux";
import { searchMovies } from "../states/movies";
import { searchSeries } from "../states/series";

function SearchBar({type}) {
  const dispatch = useDispatch()

  const search = (e) => {
    if (type === "película") dispatch(searchMovies(e.target.value))
    if (type === "serie") dispatch(searchSeries(e.target.value))
  }

  return (
      <div className="container-search">
        <div className="search-box">
          <input type="text" placeholder={`Buscar ${type}`} onChange={(e) => search(e)} />
          <button type="submit" className="btn-search">
            <ImSearch />
          </button>
        </div>
      </div>
  );
}

export default SearchBar;
