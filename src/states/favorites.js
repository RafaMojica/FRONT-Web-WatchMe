import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";
import swal from "sweetalert"

const initialState = {
  loading: true,
  favorites: [],
};

const urlBaseFavorites = axios.create({ baseURL: `${process.env.REACT_APP_URL_FAVORITES}` });
const alertError = (error) => swal({ title: error.response.data, text: " ", icon: "error", timer: "2500", button: false })
const alertSuccess = (title) => swal({ title: title, text: " ", icon: "success", timer: "2500", button: false })

export const addFavorite = createAsyncThunk("ADD_FAVORITE", async (favorite) => {
  try {
    const add = await urlBaseFavorites.post("/add", {movie: favorite.movie, email: `${favorite.user.email}`} );
    alertSuccess(add.data)
  } catch (error) {
    alertError(error)
  }
});

export const seeFavorites = createAsyncThunk("SEE_FAVORITE", async (user) => {
  try {
    const favorites = await urlBaseFavorites.post("/see", {email: `${user.email}`});
    return favorites.data;
  } catch (error) {
    alertError(error)
  }
});

export const deleteFavorites = createAsyncThunk("DELETE_FAVORITE", async (id) => {
  try {
    await urlBaseFavorites.delete(`/delete/${id}`);
  } catch (error) {
    return error;
  }
});

const favoritesReducer = createReducer(initialState, {
  [addFavorite.pending]: (state) => {
    state.loading = true;
  },
  [addFavorite.fulfilled]: (state, action) => {
    state.loading = false;
  },
  [addFavorite.rejected]: (state) => {
    state.loading = false;
  },


  [seeFavorites.pending]: (state) => {
    state.loading = true;
  },
  [seeFavorites.fulfilled]: (state, action) => {
    state.loading = false;
    state.favorites = action.payload;
  },
  [seeFavorites.rejected]: (state) => {
    state.loading = false;
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