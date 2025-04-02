import { useState, useEffect } from "react";
import MovieList from "./MovieList"; // Importa el componente base MovieList
import { getMoviesCards } from "/src/services/servicesapi.js"; // Importamos la función del servicio
import "/src/styles/MovieList.css";

function MovieListReanudar() {
  const [movies, setMovies] = useState([]);  // Estado para guardar las películas
  const [loading, setLoading] = useState(true); // Estado para mostrar "Cargando..."
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getMoviesCards(); // Llamada a la API desde el servicio
        setMovies(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <p>Cargando películas...</p>;
  if (error) return <p>Error: {error}</p>;

  // Filtra solo las películas con opción de reanudar
  const resumeMovies = movies.filter((movie) => movie.isResumeAvailable);

  return (
    <MovieList
      title="Películas para reanudar"
      movies={resumeMovies}
    />
  );
}

export default MovieListReanudar;
