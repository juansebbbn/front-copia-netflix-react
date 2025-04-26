import React from "react";
import { Link } from 'react-router-dom';
import "/src/styles/MovieCard.css";


const MovieCard = ({ movie }) => {
  return (
    <div className="cardnormal_h">
      <Link to={`/movie/${movie.id}`}>

        <div className="cardnohover">
          <div className="image-container">
            <img src={movie.url_img} alt={movie.title} className="peliculacard" />
          </div>
          <img src="/assets/Card/logo netflix N.png" alt="Netflix Logo" className="logocard" />
        </div>


        <div className="hover-info">
          <img src={movie.url_img} alt={movie.title} className="hover-image" />
          <div className="opciones_h">
            <img src="/assets/Card/play.png" alt="Play" className="button_play"/>
            <img src="/assets/Card/plus-18-movie.png" alt="+18" />
            <img src="/assets/Card/like.png" alt="Like" />
          </div>
          <h2>{movie.title}</h2>
        </div>

      </Link>
    </div>
  );
};

export default MovieCard;
