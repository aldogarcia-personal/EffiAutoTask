//TODO: agregar rutas para cada sección de navegación en el nuevo componente de sidebar, y enrutar a cada una de ellas
import React from "react"
import { Routes, Route } from "react-router-dom"
import LandingPage from "./components/Home.tsx"
import Login from "./components/Login.tsx"
import Register from "./components/Register.tsx"
import Dashboard from "./components/Dashboard.tsx"
import Task from "./components/Task.tsx"
import Settings from "./components/Settings.tsx"
import PlanSection from "./components/PlanSection.tsx"
import Notes from "./components/Notes.tsx"
import Insights from "./components/Insights.tsx"
import Notifications from "./components/notifications.tsx"
import Automations from "./components/automations.tsx"

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/account/Login" element={<Login />} />
        <Route path="/account/Register" element={<Register />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/tasks" element={<Task />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/plans" element={<PlanSection />} />
        <Route path="/Notes" element={<Notes />} />
        <Route path="/Insights" element={<Insights />} />
        <Route path="/Notifications" element={<Notifications />} />
        <Route path="/Automations" element={<Automations />} />
      </Routes>
    </div>
  )
}

export default App
