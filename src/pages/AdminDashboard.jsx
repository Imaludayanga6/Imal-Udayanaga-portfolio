import "./AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <section className="tab-content">
      <h2>Dashboard Overview</h2>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon document-icon">📄</div>
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
          <div className="stat-icon status-icon">✓</div>
          <div className="stat-info">
            <h3>System Status</h3>
            <p className="stat-value">Active</p>
          </div>
        </div>
      </div>

      <div className="info-section">
        <h3>Welcome to Admin Panel</h3>
        <p>
          This is a basic admin dashboard for your portfolio. Use the sidebar
          navigation to manage projects and settings.
        </p>
      </div>
    </section>
  );
};

export default AdminDashboard;