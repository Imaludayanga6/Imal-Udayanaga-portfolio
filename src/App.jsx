import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import PortfolioPage from "./pages/PortfolioPage";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminProjects from "./pages/AdminProjects";
import AdminSettings from "./pages/AdminSettings";
import AdminLayout from "./components/AdminLayout";
import ProtectedRoute from "./components/ProtectedRoute";

import "./App.css";

const App = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <Routes>
      {/* Portfolio Routes */}
      <Route path="/" element={<PortfolioPage theme={theme} toggleTheme={toggleTheme} />} />

      {/* Admin Routes */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="projects" element={<AdminProjects />} />
        <Route path="settings" element={<AdminSettings />} />
      </Route>

      {/* Catch-all - redirect to home */}
      <Route path="*" element={<PortfolioPage theme={theme} toggleTheme={toggleTheme} />} />
    </Routes>
  );
};

export default App;