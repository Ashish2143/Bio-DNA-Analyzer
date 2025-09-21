import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Upload({ uploadedFile, setUploadedFile }) {
  const navigate = useNavigate();

  const handleFileChange = (e) => setUploadedFile(e.target.files[0]);

  const handleSubmit = () => {
    if (uploadedFile) {
      alert(`File "${uploadedFile.name}" uploaded successfully!`);
      navigate("/dashboard");
    } else {
      alert("Please select a file first.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        fontFamily: "'Times New Roman', Times, serif",
        color: "#fff",
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

      <motion.div
        whileHover={{ scale: 1.03, boxShadow: "0 12px 35px rgba(0,0,0,0.4)" }}
        transition={{ type: "spring", stiffness: 300 }}
        style={{
          position: "relative",
          zIndex: 1,
          background: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(12px)",
          padding: "25px 30px",
          borderRadius: "20px",
          width: "320px",
          textAlign: "center",
          boxShadow: "0 6px 25px rgba(0,0,0,0.3)",
        }}
      >
        <h2 style={{
          fontFamily: "'Times New Roman', Times, serif", 
          fontSize: "1.9rem",
          marginBottom: "20px",
          fontWeight: "700",
          textShadow: "1.5px 1.5px 4px rgba(0,0,0,0.3)"
        }}>
          Upload DNA File
        </h2>

        <input
          type="file"
          onChange={handleFileChange}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "12px",
            border: "none",
            cursor: "pointer",
            background: "rgba(255,255,255,0.15)",
            color: "#fff",
            marginBottom: "20px",
            fontSize: "1rem",
            fontFamily: "'Times New Roman', Times, serif",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.25)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.15)")}
        />

        <motion.button
          whileHover={{ scale: 1.08, boxShadow: "0 10px 25px rgba(255,140,0,0.6)" }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSubmit}
          style={{
            padding: "12px 35px",
            borderRadius: "50px",
            border: "none",
            background: "linear-gradient(135deg, #ff7e5f, #feb47b)",
            color: "#fff",
            fontWeight: "600",
            fontSize: "1rem",
            fontFamily: "'Times New Roman', Times, serif",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 5px 20px rgba(255,140,0,0.4)",
          }}
        >
          Submit
        </motion.button>

        {uploadedFile && (
          <p style={{
            marginTop: "15px",
            fontWeight: "500",
            fontSize: "0.95rem",
            fontFamily: "'Times New Roman', Times, serif"
          }}>
            Selected: {uploadedFile.name}
          </p>
        )}
      </motion.div>
    </motion.div>
  );
}

export default Upload;
