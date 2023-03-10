import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";
import { alertError, alertSuccess } from "../utils/alerts";

const initialState = {
  loading: true,
  user: {},
};

const urlBaseUsers = axios.create({ baseURL: `${process.env.REACT_APP_URL_USERS}` });

export const registerUser = createAsyncThunk("REGISTER_USER", async (user) => {
  try {
    const registro = await urlBaseUsers.post("/register", user);
    return registro.data;
  } catch (error) {
    throw new Error (error.response.data)
  }
});

export const loginUser = createAsyncThunk("LOGIN_USER", async (user) => {
  try {
    const dataUser = await urlBaseUsers.post("/login", user, {withCredentials: true});
    return dataUser.data;
  } catch (error) {
    throw new Error (error.response.data)
  }
});

export const persistenceUser = createAsyncThunk("PERSISTENCE_USER", async () => {
  try {
    const user = await urlBaseUsers.get("/me", {withCredentials: true});
    return user.data;
  } catch (error) {
    throw new Error (error.response.data)
  }
});

export const logoutUser = createAsyncThunk("LOGOUT_USER", async () => {
  try {
    await urlBaseUsers.get("/logout", {withCredentials: true});
    return {}
  } catch (error) {
    throw new Error (error.response.data)
  }
});

export const deleteUser = createAsyncThunk("DELETE_USER", async (email) => {
  try {
    const deleteUser = await urlBaseUsers.delete(`/delete/${email}`);
    return deleteUser.data
  } catch (error) {
    throw new Error (error.response.data)
  }
});

const usersReducer = createReducer(initialState, {
  [registerUser.pending]: (state) => {
    state.loading = true;
  },
  [registerUser.fulfilled]: (state, action) => {
    state.loading = false;
    alertSuccess(action.payload)
  },
  [registerUser.rejected]: (state, action) => {
    state.loading = false;
    alertError(action.error.message)
  },


  [loginUser.pending]: (state) => {
    state.loading = true;
  },
  [loginUser.fulfilled]: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    alertSuccess(`Bienvenido ${action.payload.name}`)
  },
  [loginUser.rejected]: (state, action) => {
    state.loading = false;
    alertError(action.error.message)
  },


  [persistenceUser.pending]: (state) => {
    state.loading = true;
  },
  [persistenceUser.fulfilled]: (state, action) => {
    state.loading = false;
    state.user = action.payload;
  },
  [persistenceUser.rejected]: (state) => {
    state.loading = false;
  },


  [logoutUser.pending]: (state) => {
    state.loading = true;
  },
  [logoutUser.fulfilled]: (state, action) => {
    state.loading = false;
    state.user = action.payload
    alertSuccess(`Cierre de Sesión Exitosa`)
  },
  [logoutUser.rejected]: (state) => {
    state.loading = false;
  },


  [deleteUser.pending]: (state) => {
    state.loading = true;
  },
  [deleteUser.fulfilled]: (state, action) => {
    state.loading = false;
    alertSuccess(action.payload)
  },
  [deleteUser.rejected]: (state, action) => {
    state.loading = false;
    alertError(action.error.message)
  },
});

export default usersReducer;