import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";
import swal from "sweetalert"

const initialState = {
  loading: true,
  user: {},
};

const urlBaseUsers = axios.create({ baseURL: `${process.env.REACT_APP_URL_USERS}` });
const alertError = (error) => swal({ title: error.response.data, text: " ", icon: "error", timer: "2500", button: false })
const alertSuccess = (title) => swal({ title: title, text: " ", icon: "success", timer: "2500", button: false })


export const registerUser = createAsyncThunk("REGISTER_USER", async (user) => {
  try {
    const registro = await urlBaseUsers.post("/register", user);
    alertSuccess(registro.data)
  } catch (error) {
    alertError(error)
  }
});

export const loginUser = createAsyncThunk("LOGIN_USER", async (user) => {
  try {
    const dataUser = await urlBaseUsers.post("/login", user, {withCredentials: true});
    alertSuccess(`Bienvenido ${dataUser.data.name}`)
    return dataUser.data;
  } catch (error) {
    alertError(error)
  }
});

export const persistenceUser = createAsyncThunk("PERSISTENCE_USER", async () => {
  try {
    const user = await urlBaseUsers.get("/me", {withCredentials: true});
    return user.data;
  } catch (error) {
    return error;
  }
});

export const logoutUser = createAsyncThunk("LOGOUT_USER", async () => {
  try {
    await urlBaseUsers.get("/logout", {withCredentials: true});
    alertSuccess(`Cierre de Sesión Exitosa`)
    return {}
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
  [registerUser.pending]: (state) => {
    state.loading = true;
  },
  [registerUser.fulfilled]: (state, action) => {
    state.loading = false;
  },
  [registerUser.rejected]: (state, action) => {
    state.loading = false;
  },


  [loginUser.pending]: (state) => {
    state.loading = true;
  },
  [loginUser.fulfilled]: (state, action) => {
    state.loading = false;
    state.user = action.payload;
  },
  [loginUser.rejected]: (state) => {
    state.loading = false;
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
  },
  [logoutUser.rejected]: (state) => {
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