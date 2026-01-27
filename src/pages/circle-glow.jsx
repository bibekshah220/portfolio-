import { useState } from "react";
import CircleGlow from "@/components/CircleGlow/CircleGlow";

export default function CircleGlowPage() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
                background: darkMode ? "#1a1a1a" : "#f5f5f5",
                transition: "background 0.3s ease",
            }}
        >
            <button
                onClick={() => setDarkMode(!darkMode)}
                style={{
                    marginBottom: "20px",
                    padding: "10px 20px",
                    fontSize: "16px",
                    cursor: "pointer",
                    borderRadius: "5px",
                    border: "none",
                    background: darkMode ? "#fff" : "#333",
                    color: darkMode ? "#333" : "#fff",
                }}
            >
                Toggle Mode
            </button>

            <CircleGlow darkMode={darkMode} />
        </div>
    );
}
