import { useState, useEffect, use } from "react";
import NavBar from "../components/general/NavBar";
import NewMovie from "../components/home/NewMovie";
import MovieList from "../components/home/MovieList";
import Footer from "../components/general/Footer";
import { getNewMovie } from "/src/services/servicesapi.js";
import { getMoviesCards } from "/src/services/servicesapi.js";
import { getStartedMovies } from "/src/services/servicesapi.js";

function Home() {
  const [moviePremiere, setMovie] = useState(null);  
  const [allMovies, setAllMovies] = useState([]); 
  const [startedMovies, setStartedMovies] = useState([]);  
  const byGenre = sortByGenre();

  //the next three functions are used to get the movies from the api

  useEffect(() => {
    const fetchStartedMovies = async () => {
      try {
        const data = await getStartedMovies();
        console.log("(COMPONENT) started movies:", data);

        if (data && !data.error) {
          setStartedMovies(data);
        }
      } catch (error) {
        console.log("(COMPONENT) error fetching started movies:");
      }
    };

    fetchStartedMovies();
  }
  , []); 

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await getNewMovie();
        console.log("(COMPONENT) premier movie:", data);

        if (isMounted && data && !data.error) {
          setMovie(data);
        }
      } catch (error) {
        console.log("(COMPONENT) error fetching movie:");
      }
    };

    fetchMovie();
  }, []); 



  useEffect(() => {
    const fetchAllMovies = async () => {
      try {
        const data = await getMoviesCards();
        console.log("(COMPONENT) all movies:", data);

        if (data && !data.error) {
          setAllMovies(data);
        }
      } catch (error) {
        console.log("(COMPONENT) error fetching all movies:");
      }
    };

    fetchAllMovies();

  }, []); 


  // for eaach movie if the genre is not in the byGenre list, we creat a new array with the genre name and push the movie to that array
  // if the genre is already in the byGenre list, we push the movie to that array
  function sortByGenre() {
    let byGenre = {};
  
    for (let i = 0; i < allMovies.length; i++) {
      const genre = allMovies[i].genre;
  
      if (!(genre in byGenre)) {
        byGenre[genre] = [];
      }
  
      byGenre[genre].push(allMovies[i]);
    }
  
    return byGenre;
  }
  

    return (
      <div>
        <NavBar />
        <NewMovie pelicula={moviePremiere} />

        <h2>Reanudar</h2>
        <MovieList movies={startedMovies} />

        {Object.entries(byGenre).map(([genre, movies]) => ( // Use Object.entries to iterate over key-value pairs
          <div key={genre}>
            <h2>{genre}</h2>
            <MovieList movies={movies} /> {/* Access the movies array directly */}
          </div>
        ))}
        <MovieList movies={allMovies} />

        <Footer />
      </div>
    );
  }

export default Home;
