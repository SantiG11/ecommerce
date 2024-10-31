import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { EcommerceProvider } from "./context/EcommerceProvider.jsx";

createRoot(document.getElementById("root")).render(
  <EcommerceProvider>
    <App />
  </EcommerceProvider>
);
