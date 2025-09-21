import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function MainPage() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        fontFamily: "'Times New Roman', Times, serif",
        color: "#fff",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <img
        src="/sea.jpg" 
        alt="Main Background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          filter: "brightness(0.5)",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "900px", textAlign: "center" }}>
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            fontSize: "1.5rem",
            fontWeight: "bold",
            letterSpacing: "2px",
            color: "#fff",
            textShadow: "1px 1px 3px rgba(0,0,0,0.5)",
            fontFamily: "'Times New Roman', Times, serif", 
          }}
        >
          
        </div>

        <motion.div
          whileHover={{ scale: 1.05, boxShadow: "0 12px 40px rgba(0,0,0,0.4)" }}
          transition={{ type: "spring", stiffness: 300 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "15px 30px",
            background: "rgba(255,255,255,0.1)",
            borderRadius: "15px",
            backdropFilter: "blur(10px)",
            boxShadow: "0 6px 24px rgba(0,0,0,0.3)",
            cursor: "pointer",
            margin: "0 auto",
            textAlign: "center",
            maxWidth: "350px",
            fontFamily: "'Times New Roman', Times, serif", 
          }}
        >
          <img src="/sih-logo.png" alt="SIH Logo" style={{ height: "50px", marginBottom: "10px" }} />
          <h1 style={{
            fontSize: "2rem",
            fontWeight: "bold",
            textShadow: "1.5px 1.5px 4px rgba(0,0,0,0.3)",
            fontFamily: "'Times New Roman', Times, serif",
          }}>
            Bio DNA Analyzer
          </h1>
        </motion.div>

        <p style={{ marginTop: "20px", fontSize: "1.3rem", color: "#e0e0e0", fontFamily: "'Times New Roman', Times, serif" }}>
          Smart DNA Data Analysis for Environmental Monitoring
        </p>

        <div style={{ marginTop: "30px", display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0 12px 25px rgba(255,140,0,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/upload")}
            style={{
              padding: "15px 40px",
              fontSize: "1.2rem",
              fontWeight: "bold",
              borderRadius: "50px",
              border: "none",
              cursor: "pointer",
              background: "linear-gradient(135deg, #ff7e5f, #feb47b)",
              color: "#fff",
              transition: "all 0.3s ease",
              boxShadow: "0 6px 20px rgba(255,140,0,0.4)",
              fontFamily: "'Times New Roman', Times, serif", 
            }}
          >
            Get Started
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0 12px 25px rgba(33,150,243,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/dashboard")}
            style={{
              padding: "15px 40px",
              fontSize: "1.2rem",
              fontWeight: "bold",
              borderRadius: "50px",
              border: "none",
              cursor: "pointer",
              background: "linear-gradient(135deg, #2193b0, #6dd5ed)",
              color: "#fff",
              transition: "all 0.3s ease",
              boxShadow: "0 6px 20px rgba(33,150,243,0.4)",
              fontFamily: "'Times New Roman', Times, serif",
            }}
          >
            Go to Dashboard
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default MainPage;
