import { createSlice } from '@reduxjs/toolkit';
import { checkAuth } from '../../utils/network';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    isAuth: false,
    user: {},
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
      state.user = {};
    },
    refreshAuth: () => {
      const response = checkAuth();
      const data = response.data;

      if (data) {
        setToken(data.accessToken);
        setAuth(true);
        setUser(data.user);
      }
    },
  },
});

export const { setToken, clearToken, setAuth, setUser, clearUser, refreshAuth } = authSlice.actions;
export default authSlice.reducer;
