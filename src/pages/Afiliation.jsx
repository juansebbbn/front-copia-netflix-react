import NavBar from "../components/general/NavBar";
import Footer from "../components/general/Footer";
import LateralMenu from "../components/user/LateralMenu";
import "/src/styles/Afiliation.css";


function Afilitation() {
    return (
        <div>
            <NavBar />
            <div className="container-cuenta">
                <LateralMenu />
                <div className="containerderecha">
                    <div className="plancontainer_p">
                        <div>
                            <h1>Membresía</h1>
                            <h2>Información del plan</h2>
                            <div className="infoplan_p">
                                <div className="plan_p">
                                    <span className="planelegido_p">
                                        <h3>Plan estándar</h3>
                                    </span>
                                    <img src="public\assets\Afiliation\tick.png" alt="Confirmación" />
                                </div>
                                <div className="plan_p">
                                    <h3>Plan estándar con anuncios</h3>
                                    <a href="#">
                                        <p>Cambiar plan</p>
                                    </a>
                                </div>
                                <div className="plan_p">
                                    <h3>Plan premium</h3>
                                    <a href="#">
                                        <p>Cambiar plan</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="informaciondepago_p">
                        <div className="containerpago_p">
                            <div>
                                <h2>Próximo pago</h2>
                                <p>1 abril 2025</p>
                                <div className="visa_cp">
                                    <img src="public\assets\User\visa.png" alt="Tarjeta Visa" />
                                    <p>•••• •••• •••• 3793</p>
                                </div>
                            </div>
                            <div>
                                <img src="public\assets\Afiliation\tick.png" alt="Confirmación" />
                            </div>
                        </div>
                        <div className="item_p">
                            <a href="#">
                                <p>Administrar forma de pago</p>
                            </a>
                        </div>
                        <div className="item_p">
                            <a href="#">
                                <p>Canjear código de regalo o promocional</p>
                            </a>
                        </div>
                        <div className="item_p">
                            <a href="#">
                                <p>Ver historial de pago</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Afilitation;