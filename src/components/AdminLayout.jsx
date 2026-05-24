import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { authService } from "../utils/authService";
import "./AdminLayout.css";

const AdminLayout = () => {
  const navigate = useNavigate();
  const user = authService.getCurrentUser();

  const handleLogout = () => {
    authService.logout();
    navigate("/admin/login");
  };

  return (
    <div className="admin-dashboard">
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

      <nav className="admin-sidebar">
        <ul className="nav-menu">
          <li>
            <NavLink
              to="/admin/dashboard"
              className={({ isActive }) =>
                `nav-item ${isActive ? "active" : ""}`
              }
            >
              <span className="nav-icon">📊</span>
              <span className="nav-text">Overview</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/projects"
              className={({ isActive }) =>
                `nav-item ${isActive ? "active" : ""}`
              }
            >
              <span className="nav-icon">📂</span>
              <span className="nav-text">Projects</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/settings"
              className={({ isActive }) =>
                `nav-item ${isActive ? "active" : ""}`
              }
            >
              <span className="nav-icon">⚙️</span>
              <span className="nav-text">Settings</span>
            </NavLink>
          </li>
        </ul>
      </nav>

      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
