import express from "express";
import fs from "fs";

const router = express.Router();

router.get("/", (req, res) => {
  fs.readFile("./data/newmovie.json", "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Error al leer películas" });
    res.json(JSON.parse(data));
  });
});

export default router;