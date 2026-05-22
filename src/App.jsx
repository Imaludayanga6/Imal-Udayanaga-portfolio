import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import PortfolioPage from "./pages/PortfolioPage";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
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
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      {/* Catch-all - redirect to home */}
      <Route path="*" element={<PortfolioPage theme={theme} toggleTheme={toggleTheme} />} />
    </Routes>
  );
};

export default App;