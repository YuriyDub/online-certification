import { createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    searchLine: '',
    category: 'All',
    page: 1,
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSearch: (state, action) => {
      state.searchLine = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: {},
});

export const { setCategory, setSearch, setPage } = homeSlice.actions;
export default homeSlice.reducer;
