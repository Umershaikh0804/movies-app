import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function MovieDetails() {
  const [currentMovieDetail, setMovie] = useState([])
  const { id } = useParams()

  useEffect(() => {
      getData()
      window.scrollTo(0,0)
  }, [])

  const getData = () => {
      fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ec26d47c76d0dbbea152800348da2eaa&language=en-US`)
      .then(res => res.json())
      .then(data => setMovie(data))
  }
  
  const navigate = useNavigate();

  const movieDetails = useSelector((state) => state.text.movie_details);

  return (
   
    <div>
      <h1>Movie Details Page</h1>
      <div>
        <div>
        { <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${currentMovieDetail?.poster_path}`} alt="movieImage" /> }
        </div>
        <div style={{ flex: "1" }}>
          <b>
            <h3>{currentMovieDetail.title}</h3>
          </b>
          <p>
            <strong>Release Date: {currentMovieDetail.release_date}</strong>
          </p>
          <p>
            <strong>Original Language: {currentMovieDetail.original_language}</strong>
          </p>
          <p>
            <strong>Original Title: {currentMovieDetail.original_title}</strong>
          </p>
          <p>
            <strong>Popularity: {currentMovieDetail.popularity}</strong>
          </p>
          <p>
            <strong>Vote Average: {currentMovieDetail.vote_average}</strong>
          </p>
          <p>
            <strong>Vote Count: {currentMovieDetail.vote_count}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}


