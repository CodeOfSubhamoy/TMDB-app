import React from "react";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addToWatchList } from "../reducers/watchList.reducer";
const Card = ({ movie }) => {
  console.log("Cards called ");
  const watchList = useSelector((state) => state.watchList.originalFavourites);
  const dispatch = useDispatch();

  const isAlreadyInWatchList = watchList.find(
    (watchListMovie) => Number(watchListMovie.id) == movie.id
  );

  const addToWatchListFunc = (e) => {
    dispatch(addToWatchList(movie));
    // we cant just add a movie into watchlist , if already in watchlist then we need to remove otherwise add it
    // updateWatchList((prevWatchList) => {
    //   const alreadyExist = prevWatchList.find(
    //     (watch) => Number(watch.id) == movieId
    //   );
    //   if (alreadyExist) {
    //     const filteredList = prevWatchList.filter(
    //       (watch) => Number(watch.id) != movieId
    //     );
    //     return filteredList;
    //   } else {
    //     const favourites = [...prevWatchList, movie];
    //     return favourites;
    //   }
    // });
  };
  return (
    <div className="card">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        className="cardImage"
      />
      <div className="cardDetails">
        <Link to={`/details/${movie.id}`} className="Link">
          {movie.original_title}
        </Link>
        <button
          className="watchListBtn"
          data-id={movie.id}
          onClick={addToWatchListFunc}
        >
          {isAlreadyInWatchList ? "Remove from WatchList" : "Add to Watchlist"}
        </button>
      </div>
    </div>
  );
};

export default Card;
