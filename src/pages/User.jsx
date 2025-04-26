import NavBar from "../components/general/NavBar";
import Footer from "../components/general/Footer";
import LateralMenu from "../components/user/LateralMenu";
import "/src/styles/User.css";
import { useEffect, useState } from "react";
import { fetchUser, getPayments} from "/src/services/servicesapi.js"; 

function User() {
  const [user, setUser] = useState(null); // state to store user data

  useEffect(() => {
    const getUser = async () => {
      try {
        const data = await getPayments();
        console.log("(COMPONENT) user data:", data);

        if (data && !data.error) {
          setUser(data);
        }
      } catch (error) {
        console.log("(COMPONENT) error fetching user data:");
      }
    };

    getUser();
  }
  , []); 

  return (
    <div>
      <NavBar />
      <div className="container-cuenta">
        <LateralMenu />
        <div className="infocuenta">
          <div className="cuenta_c">
            <div>
              <h1>Cuenta</h1>
              <h2>Informacion de la cuenta</h2>
              <div className="infocuenta_c">
                <div className="desde_c">
                  <p>Miembro desde 2016</p>
                </div>

                <h2>Plan estandar</h2>
                <p>Proximo pago: 18/07/25</p>
                <div className="visa_cp">
                  <img src="public\assets\User\visa.png" alt="Visa" />
                  <p>{user ? user.cardNumber : "Cargando..."}</p>
                </div>
                <p>Administrar membresia</p>
              </div>
            </div>

          </div>

          <div className="vinculos-container_c">
            <h2>Vinculos rapidos</h2>
            <div className="vinculos_c">
              <a href="">Cambiar el plan</a>
              <a href="">Administrar forma de pago </a>
              <a href="">Adquirir un cupon de miembro extra</a>
              <a href="">Actualizar contraseña</a>
              <a href="">Transferir un perfil</a>
              <a href="">Ajustar control parental</a>
              <a href="">Configuracion</a>
              <a href="">Modo Oscuro</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default User;