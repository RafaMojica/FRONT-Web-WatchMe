import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";
import { alertError, alertSuccess } from "../utils/alerts";

const initialState = {
  loading: true,
  favorites: [],
};

const urlBaseFavorites = axios.create({ baseURL: `${process.env.REACT_APP_URL_FAVORITES}` });

export const addFavorite = createAsyncThunk("ADD_FAVORITE", async (favorite) => {
  try {
    const add = await urlBaseFavorites.post("/add", {movie: favorite.movie, email: `${favorite.user.email}`} );
    return add.data
  } catch (error) {
    throw new Error (error.response.data)
  }
});

export const seeFavorites = createAsyncThunk("SEE_FAVORITE", async (user) => {
  try {
    const favorites = await urlBaseFavorites.post("/see", {email: `${user.email}`});
    return favorites.data;
  } catch (error) {
    throw new Error (error.response.data)
  }
});

export const deleteFavorites = createAsyncThunk("DELETE_FAVORITE", async (id) => {
  try {
    await urlBaseFavorites.delete(`/delete/${id}`);
  } catch (error) {
    throw new Error (error.response.data)
  }
});

const favoritesReducer = createReducer(initialState, {
  [addFavorite.pending]: (state) => {
    state.loading = true;
  },
  [addFavorite.fulfilled]: (state, action) => {
    state.loading = false;
    alertSuccess(action.payload)
  },
  [addFavorite.rejected]: (state, action) => {
    state.loading = false;
    alertError(action.error.message)
  },


  [seeFavorites.pending]: (state) => {
    state.loading = true;
  },
  [seeFavorites.fulfilled]: (state, action) => {
    state.loading = false;
    state.favorites = action.payload;
  },
  [seeFavorites.rejected]: (state, action) => {
    state.loading = false;
    alertError(action.error.message)
  },


  [deleteFavorites.pending]: (state) => {
    state.loading = true;
  },
  [deleteFavorites.fulfilled]: (state, action) => {
    state.loading = false;
  },
  [deleteFavorites.rejected]: (state) => {
    state.loading = false;
  },
});

export default favoritesReducer;