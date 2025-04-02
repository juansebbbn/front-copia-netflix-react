import { useState } from "react";
import "/src/styles/LoginRegister.css";
import { Link } from 'react-router-dom';

const LoginRegister = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="bodylogin">
            <div className="containerlogin_l">
                <div className="form-box_l">
                    <h2>Netflix Inc</h2>
                    <div className="toggle-buttons_l">
                        <button
                            className={isLogin ? "active_l" : "inactive_l"}
                            onClick={() => setIsLogin(true)}
                        >
                            Login
                        </button>
                        <button
                            className={!isLogin ? "active_l" : "inactive_l"}
                            onClick={() => setIsLogin(false)}
                        >
                            Registrarse
                        </button>
                    </div>

                    {isLogin ? (
                        <form id="loginForm">
                            <input type="text" placeholder="Usuario" required />
                            <input type="password" placeholder="Contraseña" required />
                            <a href="#">¿Olvidaste tu contraseña?</a>
                            <button type="submit">
                                <Link to="/">Login</Link>
                            </button>
                        </form>
                    ) : (
                        <form id="registerForm">
                            <input type="text" placeholder="Usuario" required />
                            <input type="email" placeholder="Correo electrónico" required />
                            <input type="password" placeholder="Contraseña" required />
                            <button type="submit">
                                <Link to="/">Registrase</Link>
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LoginRegister;
