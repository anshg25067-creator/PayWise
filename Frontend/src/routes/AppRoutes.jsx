import { Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
import Friends from "../pages/Friends"
import Dashboard from "../pages/Dashboard"


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/friends" element={<Friends />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default AppRoutes
