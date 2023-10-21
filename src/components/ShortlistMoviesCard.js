import React from "react";
import styles from './shortlistmoviescard.module.css';

export default function ShortlistMoviesCard({movie}){
    return(
        <div className={styles.shortlistmovie_card} style={{border:"1px solid black",margin:"10px",borderRadius:"10px"}}>
        <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} alt="movieImage" />
        <h3>{movie.title}</h3>
        <p>
          <strong>Release Date : {movie.release_date}</strong>
        </p>
        </div>
    )
}