import React from "react";
import { ImSearch } from "react-icons/im";

function SearchBar({type}) {
  return (
    <div className="container-search">
      <div className="search-box">
        <input type="text" placeholder={`Buscar ${type}`} />
        <button type="submit" className="btn-search">
          <ImSearch />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
