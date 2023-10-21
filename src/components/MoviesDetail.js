// import React from "react";
// import MovieCard from "./MoviesList/MoviesCard";

// export default function MoviesDetail({movie,title,original_language,original_title,popularity,vote_average,vote_count,release_date,handleCloseModal}){
//   const onClose = () => {
//     handleCloseModal();
//   };
//        return(
//         <>
//        <div style={{ border: "1px solid black", margin: "10px", borderRadius: "10px", backgroundColor: "#3EB650", display: "flex" }} className="details">
//   <div style={{ flex: "0 0 auto", marginRight: "10px" }}>
//     <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} alt="movieImage" />
//   </div>
//   <div style={{ flex: "1" }}>
//     <b><h3>{title}</h3></b>
//     <p><strong>Release Date:{release_date}</strong></p>
//     <p><strong>Original Language: {original_language}</strong></p>
//     <p><strong>Original Title: {original_title}</strong></p>
//     <p><strong>Popularity: {popularity}</strong></p>
//     <p><strong>Vote Average: {vote_average}</strong></p>
//     <p><strong>Vote Count: {vote_count}</strong></p>
//     <button onClick={onClose}style={{direction:"top-bottom-left-right",padding:"8px 8px 8px 8px"}}className="button2">Close</button>
//   </div>
// </div>
//         </>
//        )
// }