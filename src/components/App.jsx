import React, { useEffect } from "react";
import { Route, Routes } from "react-router";
import Home from "./Home";
import Movies from "./Movies";
import Series from "./Series";
import Login from "./Login";
import Register from "./Register";
import { useDispatch } from "react-redux";
import { popularMovies, topMovies } from "../states/movies";
import { popularSeries, topSeries } from "../states/series";
import Description from "./Description";


function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(popularMovies())
    dispatch(popularSeries())
    dispatch(topMovies())
    dispatch(topSeries())
  }, [dispatch])

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="movies" element={<Movies />}></Route>
        <Route path="series" element={<Series />}></Route>
        <Route path=":type/:id" element={<Description />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
      </Routes>
    </>
  );
}

export default App;
