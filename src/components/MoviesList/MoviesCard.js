import React, { useState } from "react";
import styles from "./moviescard.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { movieDetails, shortlistMovie } from "../../store/actions/textActions";
import MovieDetails from "../MovieDetails";
import MoviesList from "./MoviesList";

export default function MovieCard({ movie,title,release_date,original_title,original_language,popularity,vote_average,vote_count,poster_path }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const text = useSelector((state) => state.text.text);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOpenModal = () => {
    setIsModalOpen(true);
    navigate("/moviedetails");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {isModalOpen && (
        <MovieDetails
          title={title}
          release_date={release_date}
          original_language={original_language}
          original_title={original_title}
          popularity={popularity}
          vote_average={vote_average}
          vote_count={vote_count}
          handleCloseModal={handleCloseModal}
          movie={movie}
          poster_path={movie.poster_path}
          />
      )}
      <div className={styles.movie_card}>
  <img
    src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
    alt="movieImage"
  />
  <h3 style={{color:"brown",fontSize:"20px"}}>{movie.title}</h3>  
  <div className="button">
    <button
      onClick={() => dispatch(shortlistMovie(movie))}
      style={{
        marginTop: "20px",
        marginRight: "10px",
        cursor: "pointer",
        textAlign: "center",
        borderTop: "1px solid #ccc",
        bottom: "0",
        left: "0",
        right: "0",
        padding: "5px",
        fontSize: "15px",
        marginBottom: "20px",
        backgroundColor: "#0C0908", /* Change the background color */
        color: "white", /* Change the text color */
        borderRadius: "5px", /* Add border radius */
        transition: "background-color 0.3s", /* Add a smooth background color transition */
      }}
    >
      <b>Shortlist</b>
    </button>
    <button
      onClick={handleOpenModal}
      style={{
        cursor: "pointer",
        textAlign: "center",
        borderTop: "1px solid #ccc",
        bottom: "0",
        left: "0",
        right: "0",
        marginTop: "20px",
        padding: "5px",
        fontSize: "15px",
        marginBottom: "20px",
        backgroundColor: "#0C0908", /* Change the background color */
        color: "white", /* Change the text color */
        borderRadius: "5px", /* Add border radius */
        transition: "background-color 0.3s", /* Add a smooth background color transition */
      }}
    >
      <b>View Details</b>
    </button>
  </div>
</div>

    </div>
  );
}
