//import React from "react";//
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
    return (
        <header className="navbar">
        <h1>BEESOCC</h1>

        <nav>
            <Link to="/">Inicio</Link> |{" "}
            <Link to="/nosotros">Nosotros</Link> |{" "}
            <Link to="/contacto">Contacto</Link> |{" "}
            <Link to="/login">Iniciar sesión</Link> |{" "}
            <Link to="/register">Registrarse</Link>
        </nav>
        </header>
    );
};

export default Navbar;