import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: true,
  popular: [],
  select: {},
  search: [],
  genre: [],
  topRated: [],
};

const urlBaseMovies = axios.create({ baseURL: `${process.env.REACT_APP_URL_MOVIE}` });

export const popularMovies = createAsyncThunk("POPULAR_MOVIES", async () => {
  try {
    const movies = await urlBaseMovies.get("/popular");
    return movies.data.results;
  } catch (error) {
    return error;
  }
});

export const selectMovie = createAsyncThunk("SELECT_MOVIE", async (id) => {
  try {
    const movie = await urlBaseMovies.get(`/select/${id}`);
    return movie.data;
  } catch (error) {
    return error;
  }
});

export const empySelectMovie = createAsyncThunk("EMPY_SELECT_MOVIE", async () => {})

export const searchMovies = createAsyncThunk("SEARCH_MOVIES", async (name) => {
  try {
    const movies = await urlBaseMovies.get(`/search/${name}`);
    return movies.data.results;
  } catch (error) {
    return error;
  }
});

export const genreMovies = createAsyncThunk("GENRE_MOVIES", async () => {
  try {
    const genre = await urlBaseMovies.get("/genre");
    return genre.data.genres;
  } catch (error) {
    return error;
  }
});

export const topMovies = createAsyncThunk("TOP_MOVIES", async () => {
  try {
    const top = await urlBaseMovies.get("/topRated");
    return top.data.results;
  } catch (error) {
    return error;
  }
});

const movieReducer = createReducer(initialState, {
  [popularMovies.pending]: (state) => {
    state.loading = true;
  },
  [popularMovies.fulfilled]: (state, action) => {
    state.loading = false;
    state.popular = action.payload;
  },
  [popularMovies.rejected]: (state) => {
    state.loading = false;
  },


  [selectMovie.pending]: (state) => {
    state.loading = true;
  },
  [selectMovie.fulfilled]: (state, action) => {
    state.loading = false;
    state.select = action.payload;
  },
  [selectMovie.rejected]: (state) => {
    state.loading = false;
  },


  [searchMovies.pending]: (state) => {
    state.loading = true;
  },
  [searchMovies.fulfilled]: (state, action) => {
    state.loading = false;
    state.search = action.payload;
  },
  [searchMovies.rejected]: (state) => {
    state.loading = false;
  },


  [genreMovies.pending]: (state) => {
    state.loading = true;
  },
  [genreMovies.fulfilled]: (state, action) => {
    state.loading = false;
    state.genre = action.payload;
  },
  [genreMovies.rejected]: (state) => {
    state.loading = false;
  },

  
  [topMovies.pending]: (state) => {
    state.loading = true;
  },
  [topMovies.fulfilled]: (state, action) => {
    state.loading = false;
    state.topRated = action.payload;
  },
  [topMovies.rejected]: (state) => {
    state.loading = false;
  },

  
  [empySelectMovie.pending]: (state) => {
    state.loading = true;
  },
  [empySelectMovie.fulfilled]: (state, action) => {
    state.loading = false;
    state.select = action.payload;
  },
  [empySelectMovie.rejected]: (state) => {
    state.loading = false;
  },
});

export default movieReducer;

