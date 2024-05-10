import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearch: false,
    movieNames: null,
    movieResults: null,
  },
  reducers: {
    hideGPTSearchView: (state) => {
      state.showGPTSearch = false;
    },
    setGPTSearchView: (state) => {
      state.showGPTSearch = true;
    },
    addGPTMovieSuggestion: (state, action) => {
      state.gptMovieSuggestions = action.payload;
    },
    addGPTMovie: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    removeGPTMovies: (state) => {
      state.movieNames = null;
      state.movieResults = null;
    }
  },
});

export const {
  hideGPTSearchView,
  setGPTSearchView,
  addGPTMovie,
  removeGPTMovies
} = gptSlice.actions;

export default gptSlice.reducer;
