import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Pagination } from "swiper/modules";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation"; 
import "/src/styles/MovieList.css";
import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  const swiperRef = useRef(null); 

  return (
    <div className="container-list">

      <button className="swiper-button-prev custom-prev" onClick={() => swiperRef.current?.slidePrev()}>

      </button>
      
      <button className="swiper-button-next custom-next" onClick={() => swiperRef.current?.slideNext()}>

      </button>

      <Swiper
        slidesPerView={'auto'}
        spaceBetween={0}
        freeMode={true}
        breakpoints={{
          320: { slidesPerView: 2.2, spaceBetween: 1 },
          480: { slidesPerView: 3, spaceBetween: 1 },
          768: { slidesPerView: 4.5, spaceBetween: 1 },
          1024: { slidesPerView: 5.4, spaceBetween: 0 },
          1440: { slidesPerView: 6.3, spaceBetween: 1 },
        }}
        modules={[Navigation, FreeMode, Pagination]}
        className="movie-list"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id} className="movie-slide">
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MovieList;
