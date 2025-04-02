import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUsers } from "/src/services/servicesapi.js"; // Importamos la función desde el servicio
import "/src/styles/NavBar.css";

function NavBar() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [busquedaActiva, setBusquedaActiva] = useState(false);
  const [usuarios, setUsuarios] = useState([]);
  const menuRef = useRef(null);

  useEffect(() => {
    const fetchUsuarios = async () => {
      const data = await getUsers(); // Llamamos a la función del servicio
      if (data) setUsuarios(data);
    };

    fetchUsuarios();
  }, []);

  function toggleMenu() {
    setMenuAbierto(!menuAbierto);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuAbierto(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="navBar">
      <div className="navIzq">
        <img src="/assets/NavBar/netflix.png" alt="logo" className="logonav" />
        <Link to="/">Inicio</Link>
        <Link to="/peliculas">Películas</Link>
        <Link to="/series">Series</Link>
      </div>

      <div className="navDer">
        <div className="contenedor-lupa">
          <img
            src="/assets/NavBar/search.png"
            alt="Buscar"
            className="busqueda icon-nav"
            onClick={() => setBusquedaActiva(!busquedaActiva)}
          />
          <input
            type="text"
            className={`input-buscar ${busquedaActiva ? "active" : ""}`}
            placeholder="Títulos, personas, géneros"
          />
        </div>

        <img
          src="/assets/NavBar/notification.png"
          alt="notificacion"
          className="notificacion icon-nav"
        />

        <div className="contenedor-perfil" ref={menuRef}>
          <div className="contenedor-icono" onClick={toggleMenu}>
            <img 
              src="/assets/NavBar/usermenu.png" 
              alt="Usuario" 
              className="icono-usuario icon-nav" 
            />
            <img
              src="/assets/NavBar/down.png"
              alt="Flecha"
              className="flecha"
              style={{ transform: menuAbierto ? "rotate(180deg)" : "rotate(0deg)" }}
            />
          </div>

          {menuAbierto && (
            <div className="menu-nav">
              {usuarios.map((usuario) => (
                <div className="menu-item" key={usuario.id}>
                  <img src={usuario.imagen} alt={usuario.nombre} />
                  <Link to="/perfil">{usuario.nombre}</Link>
                </div>
              ))}
              <div className="menu-item">
                <img src="/assets/NavBar/usermenu.png" alt="Administrar" /> 
                <Link to="/adminperfil">Administrar perfiles</Link>
              </div>
              <div className="menu-item">
                <img src="/assets/NavBar/send-data.png" alt="Transferir" />
                <Link to="/transferir">Transferir perfil</Link> 
              </div>
              <div className="menu-item">
                <img src="/assets/NavBar/pencil.png" alt="Cuenta" />
                <Link to="/cuenta">Cuenta</Link>
              </div>
              <div className="menu-item">
                <img src="/assets/NavBar/question.png" alt="Ayuda" /> 
                <Link to="/ayuda">Centro de ayuda</Link>
              </div>
              <div className="menu-footer">
                <Link to="/login">Cerrar sesión en Netflix</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
