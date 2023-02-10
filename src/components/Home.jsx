import React from "react";
import { useSelector } from "react-redux";
import ItemSlider from "../common/ItemSlider";
import Navbar from "./Navbar";

function Home() {
  const moviesPopular = useSelector((state) => state.movies.popular);
  const seriesPopular = useSelector((state) => state.series.popular);
  const topRatedMovie = useSelector((state) => state.movies.topRated);
  const topRatedSerie = useSelector((state) => state.series.topRated);

  return (
    <>
      <Navbar />
      <div className="slider-container">
        <div className="slider-list">
          <ItemSlider data={moviesPopular} index={0} />
          <ItemSlider data={seriesPopular} index={0} />
          <ItemSlider data={moviesPopular} index={1} />
          <ItemSlider data={seriesPopular} index={1} />
        </div>
      </div>
    </>
  );
}

export default Home;
