import React from "react";
import styles from "./movieslist.module.css";
import MovieCard from "./MoviesCard";

export default function MoviesList({ data }) {
  return (
    <div className={styles.mainContainer}>
      {data.map((movie, ind) => (
        <div key={ind}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
}
