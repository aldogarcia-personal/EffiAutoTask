import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import { StrictMode } from "react";
import Nav from "./components/Nav";
import LandingPage from "./components/Inicio";
import Login from "./components/login";
import Register from "./components/Register.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/accout/login" element={<Login />} />
        <Route path="/accout/register" element={<Register />} />
        <Route path="/home" element={<Nav />} />
        <Route path="/about" element={<Nav />} />
        <Route path="/tasks" element={<Nav />} />
      </Routes>
    </Router>
  </StrictMode>
);
