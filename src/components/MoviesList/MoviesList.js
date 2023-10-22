import React, { useState } from "react";
import styles from "./movieslist.module.css";
import MovieCard from "./MoviesCard";

export default function MoviesList({ data }) {
  const [searchData, setSearchData] = useState("");

  const onSearchChange = (event) => {
    setSearchData(event.target.value);
  };

  const filteredMovieList = data?.filter((movie) =>
    movie.title.toLowerCase().includes(searchData.toLowerCase())
  );

  return (
    <div className={styles.mainContainer}>
      <div>
        <div class="searchBox">
<input style={{padding:"5px",width:"300px"}} class="searchInput"type="text" name="" placeholder="Search" onChange={onSearchChange}/>
<button class="searchButton" href="#" style={{padding:"5px",width:"100px"}}>
    <i class="material-icons">
        search
    </i>
</button>

</div>
        <div style={{display:"flex",flexWrap:"wrap",}}>
        {filteredMovieList &&
          filteredMovieList?.map((movie) => (
            <div key={movie.id}>
              <MovieCard 
              movie={movie}
              // title={movie?.title}
              // release_date={movie?.release_date}
              // original_language={movie?.original_language}
              // original_title={movie?.original_title}
              // popularity={movie?.popularity}
              // vote_average={movie?.vote_average}
              // vote_count={movie?.vote_count}
              // poster_path={movie?.poster_path}
               />
            </div>
          ))}
          </div>
      </div>
    </div>
  );
}
