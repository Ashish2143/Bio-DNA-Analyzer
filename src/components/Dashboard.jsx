import React from "react";
import { motion } from "framer-motion";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell 
} from "recharts";

function Dashboard({ uploadedFile }) {

  const sampleData = [
    { sample: "Sample 1", value: 50 },
    { sample: "Sample 2", value: 80 },
    { sample: "Sample 3", value: 65 },
  ];

  const gradientColors = ["#ff7e5f", "#feb47b", "#ffb347"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "80px 20px 50px 20px",
        position: "relative",
        fontFamily: "'Times New Roman', Times, serif",
        color: "#fff",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      <img
        src="/sea.jpg"
        alt="Dashboard Background"
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

      <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "900px" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "30px", textShadow: "2px 2px 5px rgba(0,0,0,0.7)" }}>
          Dashboard
        </h1>

        {uploadedFile ? (
          <motion.div
            whileHover={{ scale: 1.02, boxShadow: "0 12px 40px rgba(0,0,0,0.4)" }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{
              background: "rgba(255,255,255,0.1)",
              padding: "25px",
              borderRadius: "20px",
              backdropFilter: "blur(10px)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
              width: "90%",
              maxWidth: "500px",
              margin: "0 auto 40px auto",
              textAlign: "center",
            }}
          >
            <p><strong>File Name:</strong> {uploadedFile.name}</p>
            <p><strong>File Size:</strong> {(uploadedFile.size / 1024).toFixed(2)} KB</p>
          </motion.div>
        ) : (
          <p></p>
        )}

        <div
          style={{
            background: "rgba(255,255,255,0.1)",
            padding: "30px",
            borderRadius: "20px",
            backdropFilter: "blur(10px)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
            marginBottom: "40px",
          }}
        >
          <h2 style={{ marginBottom: "20px", color: "#ffd700" }}>Sample Comparison</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={sampleData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#654b4bff" opacity={0.3}/>
              <XAxis dataKey="sample" stroke="#fff"/>
              <YAxis stroke="#fff"/>
              <Tooltip contentStyle={{ backgroundColor: "#7b7070ff", borderRadius: "10px", color: "#fff" }}/>
              <Legend />
              <Bar dataKey="value" barSize={40} animationDuration={1500}>
                {sampleData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={gradientColors[index % gradientColors.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.1)",
            padding: "20px",
            borderRadius: "20px",
            backdropFilter: "blur(10px)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
          }}
        >
          <h2 style={{ marginBottom: "15px", color: "#00c853" }}>Sample Data Table</h2>
          <table style={{ width: "100%", borderCollapse: "collapse", color: "#fff", fontFamily: "'Times New Roman', Times, serif" }}>
            <thead>
              <tr>
                <th style={{ borderBottom: "2px solid #ffd700", padding: "12px", background: "rgba(255,255,255,0.05)" }}>Sample</th>
                <th style={{ borderBottom: "2px solid #ffd700", padding: "12px", background: "rgba(255,255,255,0.05)" }}>Value</th>
              </tr>
            </thead>
            <tbody>
              {sampleData.map((item, index) => (
                <tr
                  key={index}
                  style={{
                    textAlign: "center",
                    transition: "all 0.3s ease",
                    background: index % 2 === 0 ? "rgba(255,255,255,0.05)" : "transparent",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.15)";
                    e.currentTarget.style.transform = "scale(1.02)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = index % 2 === 0 ? "rgba(255,255,255,0.05)" : "transparent";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <td style={{ padding: "12px" }}>{item.sample}</td>
                  <td style={{ padding: "12px" }}>{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}

export default Dashboard;
