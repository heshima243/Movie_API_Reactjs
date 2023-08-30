import React, { useState, useEffect } from "react";
import "./App.css";

import MovieCard from "./components/MovieCard";
import Footer from "./components/Footer";
import Input from "./components/Input";

// 364509f8 364509f8
const API_URL = "https://www.omdbapi.com/?apikey=364509f8";

const Home = () => {
  const [movie, setMovie] = useState([]);
  const [Isloading, setIsloading] = useState(true);
  
  
  const searchMovies = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const data = await res.json();

    setMovie(data.Search);
    setIsloading(false);
  };

  useEffect(() => {
    searchMovies("Superman");
  }, []);

  return (
    <div className="app">
      <h1>MovieJulian</h1>

      <Input searchMovies={searchMovies}></Input>

      {Isloading && (
        <div class="loading-container">
          <div class="loading-text">Loading...</div>
        </div>
      )}

      {movie?.length > 0 ? (
        <div className="container">
          {movie.map((movies) => (
            <MovieCard movies={movies} key={movies.imdbID} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movie found</h2>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Home;
