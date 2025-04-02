import { useState, useEffect } from "react";
import NavBar from "../components/general/NavBar";
import NewMovie from "../components/home/NewMovie";
import MovieListNormal from "../components/home/MovieListNormal";
import MovieListReanudar from "../components/home/MovieListReanudar";
import Footer from "../components/general/Footer";
import { getNewMovie } from "/src/services/servicesapi.js";

function Home() {
  const [movie, setMovie] = useState(null);  // Estado para guardar la película
  const [error, setError] = useState(null);  // Estado para manejar errores

  useEffect(() => {
    let isMounted = true;

    const fetchMovie = async () => {
      try {
        const data = await getNewMovie();
        console.log("Película obtenida:", data);

        if (isMounted && data && !data.error) {
          setMovie(data);
        }
      } catch (error) {
        if (isMounted) {
          setError(error.message);
        }
      }
    };

    fetchMovie();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <NavBar />
      {error ? (
        <p style={{ color: "red" }}>Error al cargar la película: {error}</p>
      ) : (
        <NewMovie pelicula={movie} />
      )}
      <MovieListNormal title={"Quizas te guste"}/>
      <MovieListReanudar title={"Peliculas para reanudar"}/>
      <MovieListNormal title={"Quizas te guste"}/>
      <MovieListNormal title={"Quizas te guste"}/>
      <MovieListNormal title={"Quizas te guste"}/>
      <MovieListNormal title={"Quizas te guste"}/>
      <MovieListNormal title={"Quizas te guste"}/>
      <Footer />
    </div>
  );
}

export default Home;
