import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    isAuth: false,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      state.isAuth = Boolean(state.token);
    },
    clearToken: (state) => {
      state.token = null;
      state.isAuth = Boolean(state.token);
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;
