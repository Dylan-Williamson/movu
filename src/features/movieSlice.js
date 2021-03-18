import { createSlice } from '@reduxjs/toolkit';

export const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    value: 0,
    movies: [],
  },
  reducers: {
    setMovies: (state, action) => {
      console.log(action)
      state.movies = action.payload;
    },
  },
});

export const { setMovies } = movieSlice.actions;


export default movieSlice.reducer;
