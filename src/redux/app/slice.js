import { createSlice } from '@reduxjs/toolkit';
import { authOperations } from './operations';

const initialState = {
  name: null,
  email: null,
  userInfo: null,
  token: null,
  id: null,
  day: null,
  time: null,
  kind_trainee: null,
  date: null,
  isLoggedIn: false,
  isFetchingUser: false,
  isError: false,
  isSuccess: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: 'auth',

  initialState,

  reducers: {
    refreshToken: (state, action) => {
      state.token = action.payload;
    },

    reset: state => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
    },
  },

  extraReducers: {
    // register

    [authOperations.actionRegister.pending](state) {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    },
    [authOperations.actionRegister.fulfilled](state, action) {
      state.name = action.payload.data.name;
      state.isSuccess = true;
      state.isLoading = false;
      state.isError = false;
    },
    [authOperations.actionRegister.rejected](state, _) {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    },

    // login

    [authOperations.actionLogin.pending](state) {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    },
    [authOperations.actionLogin.fulfilled](state, action) {
      state.name = action.payload.name;
      // state.tokens = action.token;
      state.isLoading = false;
      state.isLoggedIn = true;
      state.isSuccess = false;
      state.isError = false;
      // console.log("action.payload.name: ", action.payload.name);
    },
    [authOperations.actionLogin.rejected](state, action) {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
    },

    // current user

    [authOperations.actionCurrent.pending](state) {
      state.isLoading = true;
      state.isFetchingUser = true;

      state.isSuccess = false;
      state.isError = false;
    },
    [authOperations.actionCurrent.fulfilled](state, action) {
      state.isLoading = false;
      state.user = action.payload.user;
      state.isFetchingUser = false;
      state.isLoggedIn = true;

      state.isSuccess = true;
      state.isError = false;
    },
    [authOperations.actionCurrent.rejected](state, _) {
      state.isLoading = false;
      state.isError = true;
      state.isFetchingUser = false;
      state.isSuccess = false;
    },

    // logout
    [authOperations.actionLogout.pending](state) {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    },
    [authOperations.actionLogout.fulfilled](state, _) {
      state.name = null;
      state.email = null;
      state.tokens = null;
      state.isLoading = false;
      state.isLoggedIn = false;
    },
    [authOperations.actionLogout.rejected](state, action) {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
    },
        // getDataAll
    [authOperations.actionGetDataAll.pending](state) {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    },
    [authOperations.actionGetDataAll.fulfilled](state, action) {
      // state.name = action.name;
      // console.log("action: ", action.payload.name);
      state.email = null;
      state.tokens = null;
      state.isLoading = false;
      state.isLoggedIn = false;
    },
    [authOperations.actionGetDataAll.rejected](state, action) {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
    },
  },
});



export const { login, logout, reset, advice, refreshToken } = authSlice.actions;
