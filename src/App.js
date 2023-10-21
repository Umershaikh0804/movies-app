import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";
import ShortlistedMovies from "./components/ShortlistedMovies";
import { useState } from "react";
import { MyContext } from "./MyContext";

function App() {
  const [text, setText] = useState("I am from App.js");
  return (
    <div className="App">
      <div>
        <Router>
          <div class="container-fluid">
            <nav class="navbar navbar-inverse">
              <div class="container-fluid">
                <ul class="nav navbar-nav">
                  <li>
                    <Link to="/" id="len1" class="hoverable">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/shortlistedmovies" id="len2" class="hoverable" style={{marginBottom:"20px"}}>
                      Shortlisted Movies
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <MyContext.Provider value={{ text, setText }}>
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
