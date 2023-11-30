import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUser, resetAuth, updateProfile } from '../../utils/network';

export const logOut = createAsyncThunk('auth/logOut', async () => {
  try {
    return await resetAuth();
  } catch (error) {
    alert(error.message);
  }
});

export const getProfile = createAsyncThunk('auth/getProfile', async () => {
  try {
    return await getUser();
  } catch (error) {
    alert(error.message);
  }
});

export const editProfile = createAsyncThunk('auth/editProfile', async (profileData) => {
  try {
    return await updateProfile(profileData);
  } catch (error) {
    alert(error.message);
  }
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
    [logOut.fulfilled]: (state) => {
      state.token = null;
      state.user = null;
      state.isAuth = false;
    },
    [getProfile.fulfilled]: (state, action) => {
      if (action.payload) {
        state.user = action.payload;
      }
    },
    [getProfile.rejected]: (state) => {
      state.user = null;
    },
    [editProfile.fulfilled]: (state, action) => {
      if (action.payload) {
        state.user = action.payload;
      }
    },
  },
});

export const { setToken, clearToken, setAuth, setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
