import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaInfoCircle, FaEnvelope } from "react-icons/fa";

function Navbar() {
  const location = useLocation();

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 50px",
        background: "rgba(0,0,0,0.4)",
        backdropFilter: "blur(8px)",
        color: "#fff",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        fontFamily: "'Times New Roman', Times, serif",
      }}
    >
      <div style={{ fontSize: "1.8rem", fontWeight: "bold", letterSpacing: "2px" }}>
        HackSmiths
      </div>

      <div style={{ display: "flex", gap: "35px" }}>
        <NavLink to="/" icon={<FaHome />} text="Home" active={location.pathname === "/"} />
        <NavLink to="/about" icon={<FaInfoCircle />} text="About Us" active={location.pathname === "/about"} />
        <NavLink to="/contact" icon={<FaEnvelope />} text="Contact Us" active={location.pathname === "/contact"} />
      </div>
    </nav>
  );
}

function NavLink({ to, icon, text, active }) {
  return (
    <Link
      to={to}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        textDecoration: "none",
        fontSize: "1.15rem",
        fontWeight: "500",
        color: active ? "#ffd700" : "#fff",
        position: "relative",
        padding: "5px 10px",
        borderRadius: "8px",
        transition: "all 0.3s ease",
        fontFamily: "'Times New Roman', Times, serif", 
      }}
      onMouseEnter={e => e.currentTarget.style.background = "linear-gradient(135deg, #ff7e5f, #feb47b)"}
      onMouseLeave={e => e.currentTarget.style.background = "transparent"}
    >
      {icon}
      {text}
    </Link>
  );
}

export default Navbar;
