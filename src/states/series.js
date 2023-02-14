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

const urlBaseSeries = axios.create({ baseURL: `${process.env.REACT_APP_URL_SERIES}` });

export const popularSeries = createAsyncThunk("POPULAR_SERIES", async () => {
  try {
    const series = await urlBaseSeries.get("/popular");
    return series.data.results;
  } catch (error) {
    return error;
  }
});

export const selectSerie = createAsyncThunk("SELECT_SERIE", async (id) => {
  try {
    const serie = await urlBaseSeries.get(`/select/${id}`);
    return serie.data;
  } catch (error) {
    return error;
  }
});

export const searchSeries = createAsyncThunk("SEARCH_SERIES", async (name) => {
  try {
    const series = await urlBaseSeries.get(`/search/${name}`);
    return series.data.results;
  } catch (error) {
    return error;
  }
});

export const genreSeries = createAsyncThunk("GENRE_SERIES", async () => {
  try {
    const genre = await urlBaseSeries.get("/genre");
    return genre.data.genres;
  } catch (error) {
    return error;
  }
});

export const topSeries = createAsyncThunk("TOP_SERIES", async () => {
  try {
    const top = await urlBaseSeries.get("/topRated");
    return top.data.results;
  } catch (error) {
    return error;
  }
});

const serieReducer = createReducer(initialState, {
  [popularSeries.pending]: (state) => {
    state.loading = true;
  },
  [popularSeries.fulfilled]: (state, action) => {
    state.loading = false;
    state.popular = action.payload;
  },
  [popularSeries.rejected]: (state) => {
    state.loading = false;
  },


  [selectSerie.pending]: (state) => {
    state.loading = true;
  },
  [selectSerie.fulfilled]: (state, action) => {
    state.loading = false;
    state.select = action.payload;
  },
  [selectSerie.rejected]: (state) => {
    state.loading = false;
  },


  [searchSeries.pending]: (state) => {
    state.loading = true;
  },
  [searchSeries.fulfilled]: (state, action) => {
    state.loading = false;
    state.search = action.payload;
  },
  [searchSeries.rejected]: (state) => {
    state.loading = false;
  },


  [genreSeries.pending]: (state) => {
    state.loading = true;
  },
  [genreSeries.fulfilled]: (state, action) => {
    state.loading = false;
    state.genre = action.payload;
  },
  [genreSeries.rejected]: (state) => {
    state.loading = false;
  },

  
  [topSeries.pending]: (state) => {
    state.loading = true;
  },
  [topSeries.fulfilled]: (state, action) => {
    state.loading = false;
    state.topRated = action.payload;
  },
  [topSeries.rejected]: (state) => {
    state.loading = false;
  },
});

export default serieReducer;