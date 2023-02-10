import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../common/Cards";
import Genres from "../common/Genres";
import SearchBar from "../common/SearchBar";
import { genreSeries } from "../states/series";
import Navbar from "./Navbar";

function Series() {
  const dispatch = useDispatch()
  const seriesPopular = useSelector((state) => state.series.popular);
  const genre = useSelector((state) => state.series.genre);
  const type = "serie"

  useEffect(()=>{
    dispatch(genreSeries())
  }, [dispatch])

  return (
    <>
    <Navbar />
    <div className="serie-container">
      <SearchBar type={type} />
      <Genres genre={genre} />
      <div className="cards-container">
        {seriesPopular.map((serie) => (
          <Cards key={serie.id} movie={serie} />
        ))}
      </div>
    </div>
    </>
  );
}

export default Series;
