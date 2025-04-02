import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/general/NavBar";
import NewMovie from "../components/home/NewMovie";
import MovieListNormal from "../components/home/MovieListNormal";
import Footer from "../components/general/Footer";
import { getMovieDetail } from "/src/services/servicesapi.js"; // Importamos el servicio
import "/src/styles/MoviePage.css";

function MoviePage() {
  const { id } = useParams(); // Obtiene el ID de la película desde la URL
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchMovie = async () => {
      try {
        const data = await getMovieDetail(id);
        console.log("Película obtenida:", data);

        if (isMounted) {
          if (!data || data.error) {
            setError("Película no encontrada");
          } else {
            setMovie(data);
          }
        }
      } catch (error) {
        if (isMounted) setError("Error al cargar la película");
      }
    };

    fetchMovie();

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (error) return <div className="error-message">{error}</div>;
  if (!movie) return <div className="loading">Cargando...</div>;

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
          <p className="movie-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum praesentium quibusdam, assumenda animi amet, inventore ex officiis error aperiam, non illo corrupti
            et tempora sed nesciunt fugit velit neque harum!</p>
        </div>
        <MovieListNormal title={"Quizas te guste"}/>
      </div>
      <Footer />
    </div>
  );
}

export default MoviePage;
