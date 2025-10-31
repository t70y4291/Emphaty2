import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", background: "#333", color: "white" }}>
      <Link to="/" style={{ marginRight: "15px", color: "white", textDecoration: "none" }}>
        Testimonios
      </Link>
      <Link to="/login" style={{ marginRight: "15px", color: "white", textDecoration: "none" }}>
        Iniciar Sesión
      </Link>
      <Link to="/register" style={{ color: "white", textDecoration: "none" }}>
        Registrarse
      </Link>
    </nav>
  );
};

export default Navbar;
