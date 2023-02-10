import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: true,
  users: {},
};

const urlBaseUsers = axios.create({ baseURL: `${process.env.REACT_APP_URL_USERS}` });

export const register = createAsyncThunk("REGISTER_USER", async (user) => {
  try {
    await urlBaseUsers.post("/register", user);
  } catch (error) {
    return error;
  }
});

export const login = createAsyncThunk("LOGIN_USER", async (user) => {
  try {
    const dataUser = await urlBaseUsers.post("/login", user);
    return dataUser.data;
  } catch (error) {
    return error;
  }
});

export const persistence = createAsyncThunk("PERSISTENCE_USER", async () => {
  try {
    const user = await urlBaseUsers.get("/me");
    return user.data;
  } catch (error) {
    return error;
  }
});

export const logout = createAsyncThunk("LOGOUT_USER", async (name) => {
  try {
    await urlBaseUsers.get("/logout");
  } catch (error) {
    return error;
  }
});

export const deleteUser = createAsyncThunk("DELETE_USER", async (email) => {
  try {
    urlBaseUsers.delete(`/delete/${email}`);
  } catch (error) {
    return error;
  }
});

const usersReducer = createReducer(initialState, {
  [register.pending]: (state) => {
    state.loading = true;
  },
  [register.fulfilled]: (state, action) => {
    state.loading = false;
  },
  [register.rejected]: (state) => {
    state.loading = false;
  },


  [login.pending]: (state) => {
    state.loading = true;
  },
  [login.fulfilled]: (state, action) => {
    state.loading = false;
    state.users = action.payload;
  },
  [login.rejected]: (state) => {
    state.loading = false;
  },


  [persistence.pending]: (state) => {
    state.loading = true;
  },
  [persistence.fulfilled]: (state, action) => {
    state.loading = false;
    state.users = action.payload;
  },
  [persistence.rejected]: (state) => {
    state.loading = false;
  },


  [logout.pending]: (state) => {
    state.loading = true;
  },
  [logout.fulfilled]: (state, action) => {
    state.loading = false;
  },
  [logout.rejected]: (state) => {
    state.loading = false;
  },


  [deleteUser.pending]: (state) => {
    state.loading = true;
  },
  [deleteUser.fulfilled]: (state, action) => {
    state.loading = false;
  },
  [deleteUser.rejected]: (state) => {
    state.loading = false;
  },
});

export default usersReducer;