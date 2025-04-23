import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetail } from "/src/services/servicesapi.js"; 
import NavBar from "../components/general/NavBar";
import NewMovie from "../components/home/NewMovie";
import MovieList from "../components/home/MovieList";
import Footer from "../components/general/Footer";
import "/src/styles/MoviePage.css";

function MoviePage() {
  const { id } = useParams(); // getId from the url
  const [movie, setMovie] = useState(null); // state for the movie details


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
    fetchMovie(); // call the function to fetch the movie details
  }
  , []);


  return (
    <div className="movie-page">
      <NavBar />
      <div className="movie-banner">
        <NewMovie pelicula={movie} />
        <div className="movie-info">
          <p className="movie-genre">{movie.genre} {movie.duration} min</p>
          <h1 className="movie-title">{movie.title}</h1>
          <div className="list-container">
            <img src="/public/assets/card/add (3).png" alt="add" />
            <p>Mi lista</p>
          </div>
          <p className="movie-description">
            {movie.description}
          </p>
        </div>
        <MovieList title={"Quizas te guste"}/>
      </div>
      <Footer />
    </div>
  );
}

export default MoviePage;
