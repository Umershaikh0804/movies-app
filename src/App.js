import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";
import ShortlistedMovies from "./components/ShortlistedMovies";
import { useState } from "react";
import { MyContext } from "./MyContext";

function App() {
  const [text,setText]=useState("I am from App.js");
  return (
    <div className="App" >
      <div>
        <Router>
          <div
            style={{ display: "flex", gap: "15px", justifyContent: "center" }}
          >
            <Link to="/" style={{color:"white"}}>Home</Link>
            <Link to="/moviedetails" style={{color:"white"}}>Movie Details</Link>
            <Link to="/shortlistedmovies" style={{color:"white"}}>Shortlisted Movies</Link>
          </div>
          <MyContext.Provider value={{text,setText}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/moviedetails" element={<MovieDetails />} />
            <Route path="/shortlistedmovies" element={<ShortlistedMovies />} />
          </Routes>
          </MyContext.Provider>
        </Router>
      </div>
    </div>
  );
}

export default App;
