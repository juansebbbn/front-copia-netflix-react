import { useState } from "react";
import "/src/styles/LoginRegister.css";
import { login } from "/src/services/servicesapi.js";
import { register } from "/src/services/servicesapi.js";

const LoginRegister = () => {
    const [isLogin, setIsLogin] = useState(true);

    const [username, setUser] = useState("");
    const [password, setPassword] = useState("");

    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [country, setCountry] = useState("");
    
    const handleLogin = async () => {
        try {
            const data = await login({ username, password });
    
            if (!data || !data.token) throw new Error("Login failed");
    
            console.log("Successful login:", data);
            window.location.replace("/home");
        } catch (err) {
            console.error("Login error:", err.message);
        }
    };

    const handleRegister = async () => {
        try {
            const data = await register({ username, password, name, lastname, country});
    
            if (!data || !data.token) throw new Error("Registration failed");
    
            console.log("Successful registration:", data);
            window.location.replace("/home");
        } catch (err) {
            console.error("Registration error:", err.message);
        }
    }
    

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
                        <form id="loginForm" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                            <input type="text" placeholder="Nombre de usuario" onChange={(e) => setUser(e.target.value)} />
                            <input type="password" placeholder="Contrasenia" onChange={(e) => setPassword(e.target.value)} />
                            <a href="#">¿Olvidaste tu contraseña?</a>
                            <button type="submit">Login</button>
                        </form>
                    ) : (
                        <form id="registerForm" onSubmit={(e) => { e.preventDefault(); handleRegister(); }}>
                            <input type="text" placeholder="Nombre de usuario" required onChange={(e) => setUser(e.target.value)} />
                            <input type="password" placeholder="Contraseña" required  onChange={(e) => setPassword(e.target.value)} />
                            <input type="text" required placeholder="Nombre" onChange={(e) => setName(e.target.value)} />
                            <input type="text" required placeholder="Apellido" onChange={(e) => setLastname(e.target.value)} />
                            <input type="text" required placeholder="Pais" onChange={(e) => setCountry(e.target.value)} />
                            <button type="submit" >
                                Registrarse
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LoginRegister;
