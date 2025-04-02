import express from "express";
import fs from "fs";

const router = express.Router();

router.get("/:id", (req, res) => {
  const movieId = req.params.id;

  fs.readFile("./data/movies.json", "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Error al leer películas" });

    let movies;
    try {
      movies = JSON.parse(data);
    } catch (e) {
      return res.status(500).json({ error: "Error al parsear el JSON" });
    }

    console.log("Películas cargadas:", movies); // Depuración
    console.log("ID buscado:", movieId);

    const movie = movies.find((m) => String(m.id) === movieId); // Comparación segura

    if (!movie) return res.status(404).json({ error: "Película no encontrada" });

    res.json(movie);
  });
});

export default router;
