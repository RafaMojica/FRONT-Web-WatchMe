import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";
import swal from "sweetalert"

const initialState = {
  loading: true,
  user: {},
};

const urlBaseUsers = axios.create({ baseURL: `${process.env.REACT_APP_URL_USERS}` });

export const registerUser = createAsyncThunk("REGISTER_USER", async (user) => {
  try {
    const registro = await urlBaseUsers.post("/register", user);
    swal({
      title: registro.data,
      text: " ",
      icon: "success",
      timer: "3000",
      button: false
    })
  } catch (error) {
    swal({
      title: error.response.data,
      text: " ",
      icon: "error",
      timer: "3000",
      button: false
    })
  }
});

export const loginUser = createAsyncThunk("LOGIN_USER", async (user) => {
  try {
    const dataUser = await urlBaseUsers.post("/login", user);
    return dataUser.data;
  } catch (error) {
    return error;
  }
});

export const persistenceUser = createAsyncThunk("PERSISTENCE_USER", async () => {
  try {
    const user = await urlBaseUsers.get("/me");
    return user.data;
  } catch (error) {
    return error;
  }
});

export const logoutUser = createAsyncThunk("LOGOUT_USER", async (name) => {
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