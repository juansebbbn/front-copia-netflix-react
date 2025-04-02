import express from "express";
import cors from "cors";
import userRoute from "./lectordedatos/user.js";
import newMovieRoute from "./lectordedatos/movieposter.js";
import moviesCards from "./lectordedatos/moviescards.js";
import moviedetail from "./lectordedatos/moviedetail.js";

const app = express();
app.use(cors());
app.use(cors({ origin: "*", methods: ["GET"] }));


app.use("/users", userRoute);
app.use("/newMovie", newMovieRoute);
app.use("/moviesCards", moviesCards);
app.use("/movie", moviedetail);

app.listen(3000, () => console.log("Servidor en http://localhost:3000"));
