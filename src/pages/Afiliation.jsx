import { useEffect, useState } from "react";
import NavBar from "../components/general/NavBar";
import Footer from "../components/general/Footer";
import LateralMenu from "../components/user/LateralMenu";
import { getPayments } from "/src/services/servicesapi.js";
import "/src/styles/Afiliation.css";

function Afilitation() {
    const [payments, setPayments] = useState(null);

    const plans = ["estandar", "estandarads", "premium"];

    useEffect(() => {
        async function fetchPayments() {
            try {
                const response = await getPayments();

                if (!response) {
                    console.error("No response from getPayments");
                    return;
                }

                setPayments(response);
            } catch (error) {
                console.error("Error fetching payments:", error);
            }
        }

        fetchPayments();
    }, []);

    useEffect(() => {
        if (!payments || !payments.planType) return;

        const matchedPlan = plans.find(plan => plan === payments.planType);

        if (matchedPlan) {
            const boxes = document.querySelectorAll(".plan_p");

            boxes.forEach((box) => {
                console.log("Box class:", box.classList);
                console.log("Matched plan:", matchedPlan);
                console.log("Does box match plan?", box.classList.contains(matchedPlan));
                if (box.classList.contains(matchedPlan)) {
                    const img = box.querySelector("img");
                    const link = box.querySelector("a");
                    const p = box.querySelector("p");

                    console.log("Image:", img);
                    console.log("Link:", link);

                    img.classList.remove("inactivePlan");
                    img.classList.add("activePlan");

                    link.classList.remove("activePlan");
                    link.classList.add("inactivePlan");

                    p.classList.remove("activePlan");
                    p.classList.add("inactivePlan");
                }
            });
        }
    }, [payments]);

    console.log("Payments:", payments);

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
                                <div className="plan_p estandar">
                                    <h3>Plan estandar</h3>
                                    <img src="public\assets\Afiliation\tick.png" alt="Confirmación" className="inactivePLan" />
                                    <a href="#" className="activePlan">
                                        <p>Cambiar plan</p>
                                    </a>
                                </div>
                                <div className="plan_p estandarads">
                                    <h3>Plan estandar con anuncios</h3>
                                    <img src="public\assets\Afiliation\tick.png" alt="Confirmación" className="inactivePLan" />
                                    <a href="#" className="activePlan">
                                        <p>Cambiar plan</p>
                                    </a>
                                </div>
                                <div className="plan_p premium">
                                    <h3>Plan premium</h3>
                                    <img src="public\assets\Afiliation\tick.png" alt="Confirmación" className="inactivePLan" />
                                    <a href="#" className="activePlan">
                                        <p className="activePlan">Cambiar plan</p>
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
                                    <img src="public/assets/User/visa.png" alt="Tarjeta Visa" />
                                    <p>{payments && payments.cardNumber}</p>
                                </div>
                            </div>
                            <div>
                                <img src="public/assets/Afiliation/tick.png" alt="Confirmación" />
                            </div>
                        </div>
                        <div className="item_p">
                            <a href="#"><p>Administrar forma de pago</p></a>
                        </div>
                        <div className="item_p">
                            <a href="#"><p>Canjear código de regalo o promocional</p></a>
                        </div>
                        <div className="item_p">
                            <a href="#"><p>Ver historial de pago</p></a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Afilitation;
