import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favorites";
import movieReducer from "./movies";
import serieReducer from "./series";
import usersReducer from "./users";

const store = configureStore({
    reducer: {
        movies: movieReducer,
        series: serieReducer,
        users: usersReducer,
        favorites: favoritesReducer,
    },
})

export default store