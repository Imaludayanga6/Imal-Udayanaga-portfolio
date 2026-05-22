import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../utils/authService";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const user = authService.getCurrentUser();

  const handleLogout = () => {
    authService.logout();
    navigate("/admin/login");
  };

  return (
    <div className="admin-dashboard">
      {/* Admin Header */}
      <header className="admin-header">
        <div className="admin-header-content">
          <h1>Admin Panel</h1>
          <div className="admin-user-section">
            <span className="username">Welcome, {user?.username}!</span>
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar Navigation */}
      <nav className="admin-sidebar">
        <ul className="nav-menu">
          <li>
            <button
              className={`nav-item ${activeTab === "overview" ? "active" : ""}`}
              onClick={() => setActiveTab("overview")}
            >
              📊 Overview
            </button>
          </li>
          <li>
            <button
              className={`nav-item ${activeTab === "content" ? "active" : ""}`}
              onClick={() => setActiveTab("content")}
            >
              📝 Content
            </button>
          </li>
          <li>
            <button
              className={`nav-item ${activeTab === "settings" ? "active" : ""}`}
              onClick={() => setActiveTab("settings")}
            >
              ⚙️ Settings
            </button>
          </li>
        </ul>
      </nav>

      {/* Main Content Area */}
      <main className="admin-main">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <section className="tab-content">
            <h2>Dashboard Overview</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">📄</div>
                <div className="stat-info">
                  <h3>Portfolio Items</h3>
                  <p className="stat-value">0</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">👁️</div>
                <div className="stat-info">
                  <h3>Page Views</h3>
                  <p className="stat-value">0</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">💬</div>
                <div className="stat-info">
                  <h3>Messages</h3>
                  <p className="stat-value">0</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">✓</div>
                <div className="stat-info">
                  <h3>System Status</h3>
                  <p className="stat-value">Active</p>
                </div>
              </div>
            </div>

            <div className="info-section">
              <h3>Welcome to Admin Panel</h3>
              <p>
                This is a basic admin dashboard for your portfolio. In the future, you can add:
              </p>
              <ul>
                <li>Portfolio item management</li>
                <li>Message management</li>
                <li>Analytics and statistics</li>
                <li>Profile and content updates</li>
              </ul>
            </div>
          </section>
        )}

        {/* Content Tab */}
        {activeTab === "content" && (
          <section className="tab-content">
            <h2>Content Management</h2>
            <div className="info-section">
              <p>Content management features coming soon...</p>
              <p>
                You'll be able to manage your portfolio items, skills, projects, and more from here.
              </p>
            </div>
          </section>
        )}

        {/* Settings Tab */}
        {activeTab === "settings" && (
          <section className="tab-content">
            <h2>Settings</h2>
            <div className="info-section">
              <p>Admin settings coming soon...</p>
              <p>You'll be able to configure your admin panel and preferences here.</p>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
