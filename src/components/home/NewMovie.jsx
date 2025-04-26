import "/src/styles/NewMovie.css";

const NewMovie = ({ pelicula }) => {
    if (!pelicula) return <p>Cargando...</p>;

    return (
        <div className="body">
            <img src={pelicula.url_img} alt={pelicula.titulo} className="newMovie"/>
            <img src={pelicula.url_logo} alt="logo" className="logo"/>
            <div className="buttons">
                <button className="buttonplay">
                    <img src="/assets/NewMovie/play-button-arrowhead (1).png" alt="Play" />
                    <p>Reproducir</p>
                </button>
                <button className="masinfo">
                    <img src="/assets/NewMovie/info.png" alt="Info" />
                    <p>Más Información</p>
                </button>
            </div>
        </div>
    );
};

export default NewMovie;
