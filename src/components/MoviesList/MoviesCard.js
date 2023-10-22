import React, { useState } from "react";
import styles from "./moviescard.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { movieDetails, shortlistMovie } from "../../store/actions/textActions";
import MovieDetails from "../MovieDetails";


export default function MovieCard({ movie }) {
  
  const text = useSelector((state) => state.text.text);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  return <>{
    
    <div>
      <Link to={`/moviedetails/${movie.id}`} >
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
        backgroundColor: "#0C0908",
        color: "white", 
        borderRadius: "5px", 
        transition: "background-color 0.3s", 
      }}
    >
      <b>Shortlist</b>
    </button>
</div>
</div>
</Link>
  </div>
  }
  </>
  
}
