import { createSlice } from '@reduxjs/toolkit';
import { checkAuth } from '../../utils/network';

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
    refreshAuth: (state) => {
      const response = checkAuth();
      const data = response.data;

      if (data) {
        state.token = data.accessToken;
        state.user = data.user;
        state.isAuth = true;
      }
    },

    clearAuth: (state) => {
      state.token = null;
      state.user = null;
      state.isAuth = false;
    },
  },
});

export const { setToken, clearToken, setAuth, setUser, clearUser, refreshAuth, clearAuth } =
  authSlice.actions;
export default authSlice.reducer;
