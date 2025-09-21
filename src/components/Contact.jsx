import React from "react";
import { FaEnvelope, FaUserTie, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
  const members = [
    { role: "Technical Lead", name: "Ashish Arsad", email: "24030114@gmail.com", icon: <FaUserTie /> },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "60px 20px",
        textAlign: "center",
        fontFamily: "'Times New Roman', Times, serif",
        position: "relative",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
     
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

      <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "1200px" }}>
        <h1
          style={{
            fontSize: "3rem",
            marginBottom: "50px",
            fontWeight: "700",
            background: "linear-gradient(135deg, #ff7e5f, #feb47b)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "2px 2px 5px rgba(0,0,0,0.3)",
          }}
        >
          Team HackSmiths
        </h1>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "40px",
          }}
        >
          {members.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.4)" }}
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(12px)",
                borderRadius: "20px",
                padding: "40px 20px",
                textAlign: "center",
                border: "1px solid rgba(255,255,255,0.2)",
                minHeight: "260px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                transition: "all 0.3s ease",
                cursor: "pointer",
                width: "280px",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #00c853, #00b0ff)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "15px",
                  fontSize: "2rem",
                  color: "#fff",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                }}
              >
                {member.icon}
              </div>

              <p
                style={{
                  margin: "5px 0",
                  fontStyle: "italic",
                  fontWeight: "500",
                  color: "#e0e0e0",
                }}
              >
                {member.role}
              </p>

              <h2
                style={{
                  fontSize: "1.5rem",
                  marginBottom: "8px",
                  fontWeight: "600",
                  color: "#fff",
                }}
              >
                {member.name}
              </h2>

              <p
                style={{
                  margin: "10px 0",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  color: "#e0e0e0",
                  fontSize: "0.95rem",
                }}
              >
                <FaEnvelope style={{ color: "#00c853" }} /> {member.email}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
