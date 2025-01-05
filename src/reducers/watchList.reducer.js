import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  originalFavourites: [],
  filteredFavourites: [],
  genres: [],
  selectedGenre: "All",
};

export const watchListSlice = createSlice({
  name: "watchList",
  initialState,
  reducers: {
    onWatchListChange: (state, action) => {
      const genre = state.originalFavourites.map((data) => data.genre_ids[0]);
      state.genres = Array.from(new Set(genre));
      state.filteredFavourites = state.originalFavourites;
    },
    addToWatchList: (state, action) => {
      const exist = state.originalFavourites.find((watch) => {
        return Number(watch.id) == Number(action.payload.id);
      });
      console.log(exist);
      // first time the id will not be present in the originalFavourites, dkirectly add that payload
      if (!exist) {
        state.originalFavourites.push(action.payload);
        watchListSlice.caseReducers.onWatchListChange(state, action);
      } else {
        state.originalFavourites = state.originalFavourites.filter((movie) => {
          return movie.id != action.payload.id;
        });
        watchListSlice.caseReducers.onWatchListChange(state, action);
      }
    },
    removeFromWatchList: (state, action) => {
      const movieIdx = state.filteredFavourites.findIndex(
        (fav) => fav.id == action.payload
      );
      const finalFav = [...state.filteredFavourites];
      finalFav.splice(movieIdx, 1);
      state.originalFavourites = finalFav;
      watchListSlice.caseReducers.onWatchListChange(state, action);
    },
    searchWatchList: (state, action) => {
      if (action.payload) {
        state.filteredFavourites = state.originalFavourites.filter((movie) => {
          return movie.title.toLowerCase().includes(action.payload);
        });
      } else {
        state.filteredFavourites = state.originalFavourites;
      }
    },
    filterWatchList: (state, action) => {
      state.filteredFavourites = state.originalFavourites.filter(
        (movie) =>
          state.selectedGenre == "All" ||
          movie.genre_ids[0] == state.selectedGenre
      );
    },
    sortWatchList: (state, action) => {
      if (action.payload == "up") {
        state.filteredFavourites = [...state.originalFavourites].sort(
          (movie1, movie2) => movie2.popularity - movie1.popularity
        );
      } else if (action.payload == "down") {
        state.filteredFavourites = [...state.originalFavourites].sort(
          (movie1, movie2) => movie1.popularity - movie2.popularity
        );
      } else {
        return state.originalFavourites;
      }
    },
    setGenreList: () => {},
    setSelected: (state, action) => {
      state.selectedGenre = action.payload;
    },
  },
});

export const {
  addToWatchList,
  removeFromWatchList,
  searchWatchList,
  filterWatchList,
  sortWatchList,
  setGenreList,
  setSelected,
} = watchListSlice.actions;

export default watchListSlice.reducer;
