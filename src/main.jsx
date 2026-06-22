import React from "react";
import ReactDOM from "react-dom/client";
import "./mugan.css";
import { detectWebp } from "./webp.js";
import App from "./mugan-app.jsx";

// Se resuelve el soporte WebP antes de montar para que cada imagen
// se pida una sola vez (en su variante .webp o la original).
detectWebp().then(() => {
  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
});
