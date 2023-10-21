import React from "react";
import { useNavigate } from "react-router-dom";
import MoviesDetail from "./MoviesDetail";
import { useSelector } from "react-redux";
import MovieCard from "./MoviesList/MoviesCard";

export default function MovieDetails({
  title,
  original_language,
  original_title,
  popularity,
  vote_average,
  vote_count,
  release_date,
  movie,
  handleCloseModal,
  poster_path
}) {
  const navigate = useNavigate();

  const onClose = () => {
    handleCloseModal();
    navigate("/");
  };

  const movieDetails = useSelector((state) => state.text.movie_details);

  return (
    <div>
      <h1>Movie Details Page</h1>
      {/* Uncomment this section if you want to display movie details from the Redux state.
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {movieDetails &&
          movieDetails.map((movie) => (
            <div key={movie.id}>
              <MoviesDetail movie={movie} />
            </div>
          ))}
      </div>
      */}
      <div>
        <div>
        { <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie?.poster_path}`} alt="movieImage" /> }
        </div>
        <div style={{ flex: "1" }}>
          <b>
            <h3>{movie?.title}</h3>
          </b>
          <p>
            <strong>Release Date: {release_date}</strong>
          </p>
          <p>
            <strong>Original Language: {original_language}</strong>
          </p>
          <p>
            <strong>Original Title: {original_title}</strong>
          </p>
          <p>
            <strong>Popularity: {popularity}</strong>
          </p>
          <p>
            <strong>Vote Average: {vote_average}</strong>
          </p>
          <p>
            <strong>Vote Count: {vote_count}</strong>
          </p>
          <button onClick={onClose} style={{ padding: "8px" }} className="button2">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}


