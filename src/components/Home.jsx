import React, { useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../reducers/movieList.reducer";
const Home = () => {
  console.log(" --- Home ---");

  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.list);

  const getMovieData = (pageNo) => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${pageNo}`,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzJjMGRlZGE3MzdmNjg0ZjVkZGEyZGQwY2NjMWQ3NyIsIm5iZiI6MTcyNTg3NjUxMC42NjQsInN1YiI6IjY2ZGVjOTFlYjE1MjI3YzE3YzRjMmRjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Mjr90TdKbO_U_lcaxHayZPni5qlNhasTF4Ia6jWQ6t4",
      },
    };

    axios
      .request(options)
      .then((res) => {
        dispatch(setMovies(res.data.results));
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getMovieData(1);
  }, []);
  return (
    <div>
      <div className="cardContainerHeader">
        <header className="header">Trending Movies ...</header>
        {/* <div className="random">Total Watchlist: ({watchList.length}) </div> */}
      </div>
      <div className="card-container">
        {movies &&
          movies.map((movie) => {
            return <Card movie={movie} key={movie.id} />;
          })}
      </div>
      <Pagination setActivePage={getMovieData} />
    </div>
  );
};

export default Home;
