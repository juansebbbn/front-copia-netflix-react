import NavBar from "../components/general/NavBar";
import Footer from "../components/general/Footer";
import LateralMenu from "../components/user/LateralMenu";
import { useEffect, useState } from "react";
import { getPayments } from "/src/services/servicesapi.js";
import "/src/styles/Afiliation.css";

function Afilitation() {

    const [payments, setPayments] = useState([]);
    const planes = [estandar, estandarads, premium];

    async function fetchPayments() {
        try {
            const response = getPayments(); 
            const data = await response.json()

            setPayments(data);

        } catch (error) {
            console.error("error fetching payments:", error);
        }

    }

    // this function sets the span to the correct plan, depending on the plan of the user
    // this is done by adding the class "activePlan" to the span that corresponds to the plan of the user
    function setSpan(){
      
        let matchedSubscription = null; 

        // for each plan we check if one of them is equal to the user plan
        for (const sub of planes) {
            if (sub === payments.plan) {
                matchedSubscription = sub;
              break;
            }
        }
    
        // if we find a match, we set the matchedSubscription to the plan of the user
        const spans = document.querySelectorAll(".plan_p span");
        spans.forEach((span) => {
            if (span.classList.contains(matchedSubscription)) {
                span.classList.add("activePlan");
            }
        });
        
    }

    //fisrt we fetch the payments (fetchPayments) and then we set the span to the correct plan (setSpan)
    useEffect(() => {
        fetchPayments();
        setSpan();
    }, []);


    
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
                                    <span className="estandar">
                                        <h3>Plan estándar</h3>
                                    </span>
                                    <img src="public\assets\Afiliation\tick.png" alt="Confirmación" />
                                </div>
                                <div className="plan_p">
                                    <span className="estandarads">
                                        <h3>Plan estándar con anuncios</h3>
                                    </span>
                                    <a href="#">
                                        <p>Cambiar plan</p>
                                    </a>
                                </div>
                                <div className="plan_p">
                                    <span className="premium">
                                        <h3>Plan premium</h3>
                                    </span>
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
                                    <p></p>
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