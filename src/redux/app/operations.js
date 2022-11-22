import { createAsyncThunk } from '@reduxjs/toolkit';
import { clientAPI } from 'service/axios.config';
import tokenService from 'service/token.service';

const actionRegister = createAsyncThunk(
  'auth/register',
  async (payload, thunkAPI) => {
    try {
      const response = await clientAPI.register(payload);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const actionLogin = createAsyncThunk(
  'auth/signin',
  async (payload, thunkAPI) => {
    try {
      const { data } = await clientAPI.login(payload);
      tokenService.setLocalTokens(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const actionLogout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await clientAPI.logout();
    tokenService.removeLocalTokens();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const actionCurrent = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await clientAPI.current();
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const getUsersAdvice = createAsyncThunk(
  'auth/adviceForLoginUsers',
  async credentials => {
    try {
      const { data } = await clientAPI.adviceForLoginUser(credentials);
      return data.user;
    } catch (error) {
      console.log(error.message);
    }
  },
);

export const actionGetDataAll = createAsyncThunk(
  'auth/getDataAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await clientAPI.getDataALL();
      return data;
    } catch (error) {
      console.log(error.message);
    }
  },
);

export const authOperations = {
  actionRegister,
  actionCurrent,
  actionLogin,
  actionLogout,
  getUsersAdvice,
  actionGetDataAll,
};
