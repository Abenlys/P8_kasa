// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./_Navbar.scss"
import Logo from "../../Assets/LOGO.svg";
import { useLocation } from "react-router-dom";
import React from "react";

export default function Navbar() {
  const location = useLocation()
  return (
    <nav className="navigation">
      <img src={Logo} alt="logo" />
      <div className="navbar-link">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>Accueil</Link>
        <Link to="/apropos" className={location.pathname === "/apropos" ? "active" : ""}>A propos</Link>
      </div>
    </nav>
  );
}
