const API_URL = "http://localhost:3000"; // URL base del backend

// Obtener todos los usuarios
export const getUsers = async () => {
    try {
        const response = await fetch(`${API_URL}/users`);
        if (!response.ok) throw new Error("Error al obtener usuarios");
        return await response.json();
    } catch (error) {
        console.error("Error en getUsers:", error);
        return null;
    }
};

export const getNewMovie = async () => {
    console.log("Llamando a getNewMovie...");
    try {
        const response = await fetch(`${API_URL}/newMovie`);
        if (!response.ok) {
            throw new Error(`Error al obtener la película. Código de estado: ${response.status}`);
        }

        const data = await response.json();

        // Si la API devuelve un array, tomamos solo el primer elemento
        return Array.isArray(data) && data.length > 0 ? data[0] : data;
    } catch (error) {
        console.error("Error en getNewMovie:", error.message);
        return { error: error.message };
    }
};


// Obtener todas las películas (moviesCards)
export const getMoviesCards = async () => {
    try {
        const response = await fetch(`${API_URL}/moviesCards`);
        if (!response.ok) throw new Error("Error al obtener las películas");
        return await response.json();
    } catch (error) {
        console.error("Error en getMoviesCards:", error);
        return null;
    }
};

// Obtener detalles de una película por ID
export const getMovieDetail = async (id) => {
    try {
        const response = await fetch(`${API_URL}/movie/${id}`);
        if (!response.ok) throw new Error("Película no encontrada");

        const data = await response.json();
        
        // Si la API devuelve un array, tomamos solo el primer elemento
        return Array.isArray(data) && data.length > 0 ? data[0] : data;
    } catch (error) {
        console.error("Error en getMovieDetail:", error);
        return { error: error.message };
    }
};

