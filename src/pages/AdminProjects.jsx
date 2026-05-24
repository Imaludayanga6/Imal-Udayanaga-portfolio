import { useState, useEffect } from "react";
import { projectService } from "../utils/projectService";
import "./AdminProjects.css";

const AdminProjects = () => {
  const [projects, setProjects] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    technologies: "",
    imageUrl: "",
    githubUrl: "",
    liveUrl: "",
  });

  // Load projects on mount
  useEffect(() => {
    const saved = projectService.getProjects();
    setProjects(saved);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddProject = () => {
    setEditingId(null);
    setFormData({
      title: "",
      description: "",
      technologies: "",
      imageUrl: "",
      githubUrl: "",
      liveUrl: "",
    });
    setShowForm(true);
  };

  const handleEditProject = (project) => {
    setEditingId(project.id);
    setFormData({
      title: project.title,
      description: project.description,
      technologies: project.technologies.join(", "),
      imageUrl: project.imageUrl,
      githubUrl: project.githubUrl,
      liveUrl: project.liveUrl,
    });
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.title.trim() ||
      !formData.description.trim() ||
      !formData.technologies.trim()
    ) {
      alert("Please fill in title, description, and technologies");
      return;
    }

    const projectData = {
      ...formData,
      technologies: formData.technologies
        .split(",")
        .map((t) => t.trim())
        .filter((t) => t),
    };

    if (editingId) {
      projectService.updateProject(editingId, projectData);
    } else {
      projectService.addProject(projectData);
    }

    const updated = projectService.getProjects();
    setProjects(updated);
    setShowForm(false);
  };

  const handleDeleteProject = (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      projectService.deleteProject(id);
      const updated = projectService.getProjects();
      setProjects(updated);
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingId(null);
  };

  return (
    <div className="admin-projects">
      <div className="projects-header">
        <h2>Projects Management</h2>
        <button className="btn-add-project" onClick={handleAddProject}>
          + New Project
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <div className="project-form-container">
          <form className="project-form" onSubmit={handleSubmit}>
            <h3>{editingId ? "Edit Project" : "Add New Project"}</h3>

            <div className="form-group">
              <label htmlFor="title">Project Title *</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="e.g., Portfolio Website"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description *</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Describe your project..."
                rows="4"
              />
            </div>

            <div className="form-group">
              <label htmlFor="technologies">Technologies * (comma-separated)</label>
              <input
                type="text"
                id="technologies"
                name="technologies"
                value={formData.technologies}
                onChange={handleInputChange}
                placeholder="e.g., React, Node.js, MongoDB"
              />
            </div>

            <div className="form-group">
              <label htmlFor="imageUrl">Image URL</label>
              <input
                type="url"
                id="imageUrl"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleInputChange}
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="githubUrl">GitHub URL</label>
                <input
                  type="url"
                  id="githubUrl"
                  name="githubUrl"
                  value={formData.githubUrl}
                  onChange={handleInputChange}
                  placeholder="https://github.com/..."
                />
              </div>

              <div className="form-group">
                <label htmlFor="liveUrl">Live URL</label>
                <input
                  type="url"
                  id="liveUrl"
                  name="liveUrl"
                  value={formData.liveUrl}
                  onChange={handleInputChange}
                  placeholder="https://example.com"
                />
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-save">
                {editingId ? "Update Project" : "Add Project"}
              </button>
              <button
                type="button"
                className="btn-cancel"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Projects List */}
      <div className="projects-list">
        {projects.length === 0 ? (
          <div className="empty-state">
            <p>No projects yet. Click "New Project" to add one.</p>
          </div>
        ) : (
          projects.map((project) => (
            <div key={project.id} className="project-item">
              <div className="project-content">
                {project.imageUrl && (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="project-image"
                  />
                )}
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p className="description">{project.description}</p>
                  <div className="technologies">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link"
                      >
                        GitHub
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link"
                      >
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-actions">
                <button
                  className="btn-edit"
                  onClick={() => handleEditProject(project)}
                  title="Edit"
                >
                  ✏️
                </button>
                <button
                  className="btn-delete"
                  onClick={() => handleDeleteProject(project.id)}
                  title="Delete"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminProjects;
