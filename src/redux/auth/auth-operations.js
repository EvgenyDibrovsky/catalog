// src/redux/auth/auth-operations.js
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk('auth/register', async (userData, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/auth/register', userData);
    token.set(data.token);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const login = createAsyncThunk('auth/login', async (userData, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/auth/login', userData);
    token.set(data.token);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const fetchCurrentUser = createAsyncThunk('auth/refresh', async (_, { rejectWithValue, getState }) => {
  const tokenLS = getState().auth.token;
  if (!tokenLS) {
    return rejectWithValue('No token');
  }
  token.set(tokenLS);
  try {
    const { data } = await axios('/users/current');
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

// New operations:
export const resetPassword = createAsyncThunk('auth/resetPassword', async (email, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/auth/reset-password', { email });
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const refreshToken = createAsyncThunk('auth/refreshToken', async (_, { rejectWithValue, getState }) => {
  const currentToken = getState().auth.token;
  if (!currentToken) {
    return rejectWithValue('No token');
  }
  token.set(currentToken);
  try {
    const { data } = await axios.post('/auth/refresh-token');
    token.set(data.token);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});
