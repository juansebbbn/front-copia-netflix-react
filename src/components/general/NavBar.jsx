import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProfiles } from "/src/services/servicesapi.js"; 
import "/src/styles/NavBar.css";

function NavBar() {
  const [openMenu, setopenMenu] = useState(false);
  const [activeSearch, setactiveSearch] = useState(false);
  const [users, setusers] = useState([]);
  const menuRef = useRef(null);

  useEffect(() => {
    const fetchProfiles = async () => {
      const data = await getProfiles(); 

      console.log("(COMPONENT) users:", data);

      if (data && !data.error) {
        setusers(data);
      }
    };

    fetchProfiles();
  }, []); // getting the users from the api

  function toggleMenu() {
    setopenMenu(!openMenu);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setopenMenu(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="navBar">
      <div className="navIzq">
        <img src="/assets/NavBar/netflix.png" alt="logo" className="logonav" />
        <Link to="/home">Inicio</Link>
        <Link to="/peliculas">Películas</Link>
        <Link to="/series">Series</Link>
      </div>

      <div className="navDer">
        <div className="contenedor-lupa">
          <img
            src="/assets/NavBar/search.png"
            alt="Buscar"
            className="busqueda icon-nav"
            onClick={() => setactiveSearch(!activeSearch)}
          />
          <input
            type="text"
            className={`input-buscar ${activeSearch ? "active" : ""}`}
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
              style={{ transform: openMenu ? "rotate(180deg)" : "rotate(0deg)" }}
            />
          </div>

          {openMenu && (
            <div className="menu-nav">
              {users.map((usuario) => (
                <div className="menu-item" key={usuario.id}>
                  <img src="public\assets\NavBar\user3.png" alt="Usuario" />
                  <Link to="/perfil">{usuario.profileName}</Link>
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
