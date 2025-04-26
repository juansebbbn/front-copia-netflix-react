import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetail, getMoviesCards } from "/src/services/servicesapi.js"; 
import NavBar from "../components/general/NavBar";
import NewMovie from "../components/home/NewMovie";
import MovieList from "../components/home/MovieList";
import Footer from "../components/general/Footer";
import "/src/styles/MoviePage.css";

function MoviePage() {
  const { id } = useParams(); // getId from the url
  const [movie, setMovie] = useState(null); // state for the movie details
  const [allMovies, setAllMovies] = useState([]); 

  console.log("MoviePage id:", id); // log the id to check if it's correct

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

  async function fetchMovie() {
    try {
      const data = await getMovieDetail(id); // call the service to get the movie details
      console.log("Movie found:", data);
      setMovie(data); // update the state with the movie details
    } catch (error) {
      console.error("Error while fetching movie:", error);
    }
  }

  useEffect(() => {
    fetchMovie();
  }, []);
  
  return (
    <div className="movie-page">
      <NavBar />
      <div className="movie-banner">
        <NewMovie pelicula= {movie ? movie : "Cargando..."} />
        <div className="movie-info">
          <p className="movie-genre">{movie ? movie.genre : "Cargando..."} {movie ? movie.duration : "Cargando..."} min</p>
          <h1 className="movie-title"> {movie ? movie.title : "Cargando..."}</h1>
          <div className="list-container">
            <img src="/public/assets/card/add (3).png" alt="add" />
            <p>Mi lista</p>
          </div>
          <p className="movie-description">
            {movie ? movie.description : "Cargando..."}
          </p>
        </div>
      </div>
      <MovieList title="Quizas te guste" movies={allMovies} />
      <Footer />
    </div>
  );
}

export default MoviePage;
