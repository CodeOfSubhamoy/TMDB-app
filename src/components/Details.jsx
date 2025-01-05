import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
const Details = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const fetchMovieDetails = () => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzJjMGRlZGE3MzdmNjg0ZjVkZGEyZGQwY2NjMWQ3NyIsIm5iZiI6MTcyNTg3NjUxMC42NjQsInN1YiI6IjY2ZGVjOTFlYjE1MjI3YzE3YzRjMmRjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Mjr90TdKbO_U_lcaxHayZPni5qlNhasTF4Ia6jWQ6t4",
      },
    };

    axios
      .request(options)
      .then((res) => {
        console.log("details ", res.data);
        setMovie(res.data);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    fetchMovieDetails();
  }, []);
  return (
    <div className="movie-details">
      <h1 className="movie-title">{movie.title}</h1>
      <h3 className="movie-tagline">{movie.tagline}</h3>
      <img
        className="movie-image"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      />
      <p className="movie-desc">{movie.overview}</p>
    </div>
  );
};

export default Details;
