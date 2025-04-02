import { Link, useLocation } from "react-router-dom";
import "/src/styles/LateralMenu.css";

function LateralMenu() {
    const location = useLocation(); // Obtiene la ruta actual

    return (
        <div className="lateral-menu">
            <div className="menu-item">
                <img src="/assets/User/back.png" alt="" />
                <Link to="/" className={location.pathname === "/" ? "active" : ""}>
                    Volver a Netflix
                </Link>
            </div>
            <div className="menu-item">
                <img src="/assets/User/home.png" alt="" />
                <Link to="/cuenta" className={location.pathname === "/cuenta" ? "active" : ""}>
                    Inicio
                </Link>
            </div>
            <div className="menu-item">
                <img src="/assets/User/member-card.png" alt="" />
                <Link to="/afilation" className={location.pathname === "/afilation" ? "active" : ""}>
                    Membresía
                </Link>
            </div>
            <div className="menu-item">
                <img src="/assets/User/verified.png" alt="" />
                <Link to="/verified" className={location.pathname === "/verified" ? "active" : ""}>
                    Verificado
                </Link>
            </div>
            <div className="menu-item">
                <img src="/assets/User/responsive.png" alt="" />
                <Link to="/responsive" className={location.pathname === "/responsive" ? "active" : ""}>
                    Responsive
                </Link>
            </div>
            <div className="menu-item">
                <img src="/assets/User/user (1).png" alt="" />
                <Link to="/profile" className={location.pathname === "/profile" ? "active" : ""}>
                    Perfil
                </Link>
            </div>
        </div>
    );
}

export default LateralMenu;
