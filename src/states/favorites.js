import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: true,
  favorites: [],
};

const urlBaseFavorites = axios.create({ baseURL: `${process.env.REACT_APP_URL_FAVORITES}` });

export const addFavorite = createAsyncThunk("ADD_FAVORITE", async (favorite) => {
  try {
    await urlBaseFavorites.post("/add", favorite);
  } catch (error) {
    return error;
  }
});

export const seeFavorites = createAsyncThunk("SEE_FAVORITE", async (email) => {
  try {
    const favorites = await urlBaseFavorites.post("/see", email);
    return favorites.data;
  } catch (error) {
    return error;
  }
});

export const deleteFavorites = createAsyncThunk("DELETE_FAVORITE", async (id) => {
  try {
    await urlBaseFavorites.delete(`/delete/${id}`);
  } catch (error) {
    return error;
  }
});

const usersFavorites = createReducer(initialState, {
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

export default usersFavorites;