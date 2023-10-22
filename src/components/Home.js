import React, { useEffect, useState } from "react";
import MoviesList from "./MoviesList/MoviesList";
import { useDispatch, useSelector } from "react-redux";
import { updateNumber, updateText } from "../store/actions/textActions";
import movieImage from "../WhatsApp Image 2023-10-18 at 16.21.21_61ca7176.jpg"

export default function Home() {
  const dispatch = useDispatch()
  const text = useSelector((state) =>state.text.text);
  const number = useSelector((state)=>state.text.number);
  const [moviesData, setMoviesData] = useState(null);
  useEffect(() => {
    fetchPopularMovies(3);
  }, []);

  const apiKey = "ec26d47c76d0dbbea152800348da2eaa";
  const baseUrl = "https://api.themoviedb.org/3";
  const popularMoviesUrl = `${baseUrl}/movie/popular?api_key=${apiKey}`;

  async function fetchPopularMovies(pageNumber) {
    try {
      const response=await fetch("https://api.themoviedb.org/3/movie/popular?api_key=ec26d47c76d0dbbea152800348da2eaa&language=en-US")
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setMoviesData(data.results);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }


  return (
    <div>
      <div class="container">
  <div class="row">
    <div class="col-md-12 text-center">
      <h3 class="animate-charcter" style={{paddingTop:"10px",fontSize:"50px",marginLeft:"-840px",marginTop:"-50px",marginBottom:"-40px"}}><b>Movies App</b></h3> 
    </div>
  </div>
</div>
  <div>
      <span><img class="multicolortext" style={{height:"45px",borderRadius:"8px",marginLeft:"-1200px",marginTop:"-70px",marginBottom:"20px"}} src={movieImage} alt="movieImage" /></span>
    </div>
      <section>
  <div class="content">
    <h2 style={{paddingTop:"10px",paddingBottom:"10px",fontSize:"40px",marginTop:"-30px",marginBottom:"10px",marginLeft:"700px"}}>Welcome to our website!</h2>
    <h2 style={{paddingTop:"10px",paddingBottom:"10px",fontSize:"40px",marginTop:"-30px",marginBottom:"10px",marginLeft:"700px"}}>Welcome to our website!</h2>
  </div>
</section>
    {
      moviesData && <MoviesList data={moviesData} />
    }
    </div>
  );
}
