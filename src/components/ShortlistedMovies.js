import React from "react";
import { useSelector } from "react-redux";
import ShortlistMoviesCard from "./ShortlistMoviesCard";

export default function ShortlistedMovies() {
  const shortlisted_movies = useSelector((state)=>state.text.shortlisted_movies);
  console.log(shortlisted_movies);
  return (
    <div>
      <h1>Shortlisted Movies Page</h1>
      <div style={{display:"flex",flexWrap:"wrap",}}>
        {shortlisted_movies &&
          shortlisted_movies.map((movie) => (
            <div key={movie.id}>
              <ShortlistMoviesCard movie={movie} />
            </div>
          ))}
          </div>
    </div>
  );
}
