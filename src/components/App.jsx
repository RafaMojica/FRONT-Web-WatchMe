import React, { useEffect, useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router";
import Home from "./Home";
import Movies from "./Movies";
import Series from "./Series";
import Login from "./Login";
import Register from "./Register";
import Description from "./Description";
import NotFound from "./NotFound";
import Profile from "./Profile";
import Favorites from "./Favorites";
import { useDispatch } from "react-redux";
import { persistenceUser } from "../states/users";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(persistenceUser());
  }, [dispatch]);

  const UpScroll = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };

  return (
    <>
    <UpScroll>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="movies" element={<Movies />}></Route>
        <Route path="series" element={<Series />}></Route>
        <Route path=":type/:id" element={<Description />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="favorites" element={<Favorites />}></Route>
        <Route path="profile" element={<Profile />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </UpScroll>
    </>
  );
}

export default App;
