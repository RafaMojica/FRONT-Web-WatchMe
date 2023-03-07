import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { seeFavorites } from "../states/favorites";
import Navbar from "./Navbar";
import Cards from "../common/Cards";

function Favorites() {
  const dispatch = useDispatch()
  const favorites = useSelector((state)=> state.favorites.favorites)
  const user = useSelector((state) => state.users.user);

  useEffect(()=>{
    dispatch(seeFavorites(user))
  },[dispatch, user])

  return (
    <>
      <Navbar />
      {favorites.length ? (
        <>
          <div className="favorite-container">
            <h3>TUS FAVORITES</h3>
            <div className="favorite-Card">
              {favorites.map((favorite) => (
                <Cards key={favorite.id} movie={favorite} />
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="word-container">
          <h3>GUARRDA TUS PELICULAS Y SERIES DE TV EN FAVORITOS</h3>
        </div>
      )}
    </>
  );
}

export default Favorites;
