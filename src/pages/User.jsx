import NavBar from "../components/general/NavBar";
import Footer from "../components/general/Footer";
import LateralMenu from "../components/user/LateralMenu";
import "/src/styles/User.css";

function User() {
  return (
    <div>
      <NavBar />
      <div className="container-cuenta">
        <LateralMenu />
        <div className="infocuenta">
          <div class="cuenta_c">
            <div>
              <h1>Cuenta</h1>
              <h2>Informacion de la cuenta</h2>
              <div className="infocuenta_c">
                <div className="desde_c">
                  <p>Miembro desde 2016</p>
                </div>

                <h2>Plan estandar</h2>
                <p>Proximo pago: 1 abril 2025</p>
                <div className="visa_cp">
                  <img src="public\assets\User\visa.png" alt="Visa" />
                  <p>•••• •••• •••• 3793</p>
                </div>
                <p>Administrar membresia</p>
              </div>
            </div>

          </div>

          <div className="vinculos-container_c">
            <h2>Vinculos rapidos</h2>
            <div class="vinculos_c">
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