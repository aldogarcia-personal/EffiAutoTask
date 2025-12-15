import React from "react"
import { Routes, Route } from "react-router-dom"
import LandingPage from "./components/Inicio.tsx"
import Login from "./components/Login.tsx"
import Register from "./components/Register.tsx"
import Home from "./components/Home.tsx"
import About from "./components/About.tsx"
import Task from "./components/Task.tsx"
import Settings from "./components/Settings.tsx"
import PlanSection from "./components/planSection.tsx"

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/account/Login" element={<Login />} />
        <Route path="/account/Register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tasks" element={<Task />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/plans" element={<PlanSection />} />
      </Routes>
    </div>
  )
}

export default App
