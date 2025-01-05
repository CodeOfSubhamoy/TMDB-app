import { configureStore } from "@reduxjs/toolkit";
import movieListReducer from "../reducers/movieList.reducer";
import watchListReducer from "../reducers/watchList.reducer";
export const store = configureStore({
  reducer: {
    movies: movieListReducer,
    watchList: watchListReducer,
  },
});
