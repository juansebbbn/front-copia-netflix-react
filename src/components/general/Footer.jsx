import "/src/styles/Footer.css";

function Footer() {
    return (
        <footer className="themedark">
            <div className="redes">
                <img src="/assets/Footer/twitter 1 (1).png" alt="twitter" className="twitter" />
                <img src="/assets/Footer/instagram.png" alt="instagram" className="instagram"/>
                <img src="/assets/Footer/youtube 1 (1).png" alt="youtube" className="youtube" />
                <img src="/assets/Footer/facebook-app-symbol 1 (1).png" alt="facebook" className="facebook" />
            </div>
            <div className="links-container">
                <h2>Preguntas...?</h2>
                <div className="links">
                    <div>
                        <p>Relaciones con inversionistas</p>
                        <p>Términos de uso</p>
                        <p>Tarjetas de regalo</p>
                    </div>
                    <div>
                        <p>Prensa</p>
                        <p>Declaración de privacidad</p>
                    </div>
                    <div>
                        <p>Empleo</p>
                        <p>Audio y subtítulos</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
