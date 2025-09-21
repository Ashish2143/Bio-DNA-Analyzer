import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div 
      style={{ 
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "50px 20px",
        position: "relative",
        fontFamily: "'Times New Roman', Times, serif",
        color: "#fff",
        textAlign: "center",
        overflow: "hidden"
      }}
    >
      {}
      <img
        src="/sea.jpg" 
        alt="Background"
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

      {}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          position: "relative",
          zIndex: 1,
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(12px)",
          padding: "50px 40px",
          borderRadius: "25px",
          boxShadow: "0 15px 40px rgba(0,0,0,0.4)",
          border: "1px solid rgba(255,255,255,0.2)",
          maxWidth: "900px",
          width: "100%",
        }}
      >
        <h1 style={{
          fontSize: "3rem",
          fontWeight: "700",
          marginBottom: "25px",
          background: "linear-gradient(135deg, #ff7e5f, #feb47b)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "2px 2px 5px rgba(0,0,0,0.3)"
        }}>
          About Us
        </h1>

        <p style={{
          maxWidth: "800px",
          margin: "20px auto",
          fontSize: "1.2rem",
          lineHeight: "1.8",
          textAlign: "justify"
        }}>
          <strong>BioDNA Analyzer</strong> is an innovative web-based platform designed to simplify and accelerate the analysis of environmental DNA (eDNA).  
          Our solution helps researchers and organizations identify known and unknown species, monitor biodiversity, and generate interactive visual reports — all in one place.
        </p>

        <h2 style={{
          marginTop: "40px",
          fontSize: "2rem",
          background: "linear-gradient(135deg, #00c853, #00b0ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "1px 1px 3px rgba(0,0,0,0.3)"
        }}>
          Project Definition
        </h2>

        <p style={{
          maxWidth: "800px",
          margin: "20px auto",
          fontSize: "1.3rem",
          lineHeight: "1.8",
          fontWeight: "500",
          fontStyle: "italic",
          textAlign: "justify"
        }}>
          "BioDNA Analyzer is a smart, user-friendly platform for environmental DNA analysis 
          that empowers researchers to detect species, discover biodiversity patterns, 
          and monitor ecosystems efficiently."
        </p>
      </motion.div>
    </div>
  );
}

export default About;
