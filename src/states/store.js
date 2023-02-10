import { configureStore } from "@reduxjs/toolkit";
import usersFavorites from "./favorites";
import movieReducer from "./movies";
import serieReducer from "./series";
import usersReducer from "./users";

const store = configureStore({
    reducer: {
        movies: movieReducer,
        series: serieReducer,
        users: usersReducer,
        favorites: usersFavorites,
    },
})

export default store