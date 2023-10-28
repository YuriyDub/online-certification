import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { checkAuth, resetAuth } from '../../utils/network';

export const refreshAuth = createAsyncThunk('auth/refreshAuth', async () => {
  return await checkAuth();
});

export const logOut = createAsyncThunk('auth/logOut', async () => {
  return await resetAuth();
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    isAuth: false,
    user: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      state.token = null;
    },
    setAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
  extraReducers: {
    [refreshAuth.fulfilled]: (state, action) => {
      if (action.payload) {
        state.token = action.payload.accessToken;
        state.user = action.payload.user;
        state.isAuth = true;
      }
    },
    [logOut.fulfilled]: (state) => {
      state.token = null;
      state.user = null;
      state.isAuth = false;
    },
  },
});

export const { setToken, clearToken, setAuth, setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
