import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterWatchList,
  searchWatchList,
  setSelected,
  sortWatchList,
  removeFromWatchList,
} from "../reducers/watchList.reducer";
let genreids = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Sci-Fi",
  10770: "TV",
  53: "Thriller",
  10752: "War",
  37: "Western",
};
const WatchList = () => {
  console.log("***** WatchList ******");
  const { originalFavourites, filteredFavourites, genres, selectedGenre } =
    useSelector((state) => state.watchList);
  const dispatch = useDispatch();
  let searchref = useRef(null);

  useEffect(() => {
    console.log("--- useEffect2 --- ");
    dispatch(filterWatchList());
  }, [selectedGenre, originalFavourites]);

  const handleGenreClick = (e) => {
    dispatch(setSelected(e.target.dataset.id));
  };

  const handleSearch = () => {
    console.log("--- handleSearch --- ");
    console.log("val ", searchref.current.value);
    dispatch(searchWatchList(searchref.current.value.toLowerCase()));
  };
  const onReset = () => {
    console.log("val reset ", searchref.current.value);
    dispatch(searchWatchList(searchref.current.value));
  };
  const handleSort = (e) => {
    console.log("--- handleSort --- ");
    dispatch(sortWatchList(e.target.dataset.id));
  };
  const handleRemove = (movieId) => () => {
    dispatch(removeFromWatchList(movieId));
  };
  return (
    <div className="WatchList">
      <div className="watchlistHeader">
        <h1>Favourite Movies</h1>
        <span>
          <input
            type="search"
            id="movie-search"
            ref={searchref}
            onChange={onReset}
          />
          <button onClick={handleSearch}>search</button>
        </span>
      </div>
      <div className="favouriteWrapper">
        <div className="leftSection">
          <div className="genreWrapper" onClick={handleGenreClick}>
            <div
              data-id="All"
              className={`genre ${selectedGenre === "All" ? "selected" : ""}`}
            >
              All Genre
            </div>
            {genres.map((genreId) => {
              return (
                <div
                  key={genreId}
                  data-id={genreId}
                  className={`genre ${
                    Number(selectedGenre) === genreId ? "selected" : ""
                  }`}
                >
                  {genreids[genreId]}
                </div>
              );
            })}
          </div>
        </div>
        <div className="rightSection">
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Genre</th>
                <th onClick={handleSort}>
                  Populatiry{" "}
                  <span className="sortIcon" data-id="up">
                    &#8593;
                  </span>
                  <span className="sortIcon" data-id="down">
                    &#8595;
                  </span>
                </th>
                <th>Rating</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredFavourites.map((favourite) => {
                return (
                  <tr key={favourite.id}>
                    <td>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${favourite.backdrop_path}`}
                        style={{ width: "350px", height: "250px" }}
                      />
                    </td>
                    <td>{favourite.title}</td>
                    <td>{genreids[favourite.genre_ids[0]]}</td>
                    <td>{favourite.popularity}</td>
                    <td>{favourite.vote_average}</td>
                    <td>
                      <button onClick={handleRemove(favourite.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WatchList;
