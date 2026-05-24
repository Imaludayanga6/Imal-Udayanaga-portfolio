// localStorage-based project management service
const PROJECTS_KEY = "portfolio_projects";

// Default projects (initial data)
const DEFAULT_PROJECTS = [
  {
    id: "1",
    title: "Life Net Dashboard Revamp (SLIC)",
    description:
      "Revamped an enterprise insurance dashboard featuring dynamic UI, interactive GWP charts, and Active Directory integration.",
    technologies: ["React", ".NET API", "Oracle"],
    imageUrl: "/images/Lifenet.png",
    githubUrl: "https://github.com/pramu-k/LifeIntranetProductionApp",
    liveUrl: "",
  },
  {
    id: "2",
    title: "Loss Incident Reporting System",
    description:
      "An enterprise role-based incident management system with strict permission controls developed during my SLIC internship.",
    technologies: [".NET Core", "Oracle", "Role-based"],
    imageUrl: "/images/LossIncident.png",
    githubUrl: "https://github.com/pramu-k/LossIncidentReportingSystem",
    liveUrl: "",
  },
  {
    id: "3",
    title: "Gym Microservices System",
    description:
      "A distributed gym management application built using a microservices architecture for high scalability and modularity.",
    technologies: ["Microservices", "React", "Node.js"],
    imageUrl: "/images/gim-management.png",
    githubUrl: "https://github.com/denuwan-umayanga/IT4020-gym-microservices",
    liveUrl: "",
  },
  {
    id: "4",
    title: "Skill-Share Learning Platform",
    description:
      "A full-stack media-rich platform allowing users to create step-by-step guides, upload media, and engage with a community.",
    technologies: ["React", "Spring Boot", "MongoDB"],
    imageUrl: "/images/Skill-Share.png",
    githubUrl: "https://github.com/Imaludayanga6/Skill-Share",
    liveUrl: "",
  },
  {
    id: "5",
    title: "Vehicle Service Management",
    description:
      "A comprehensive service platform featuring appointment scheduling, mechanic assignment logic, and service history tracking.",
    technologies: ["MERN Stack", "Express", "Web App"],
    imageUrl: "/images/vehicle-service.png",
    githubUrl: "https://github.com/senurasanketh/Online_Vehicle_Service",
    liveUrl: "",
  },
  {
    id: "6",
    title: "Multitask Mobile App",
    description:
      "An Android application designed to help users efficiently manage their daily tasks, time, and schedules.",
    technologies: ["Android Studio", "Kotlin", "Mobile"],
    imageUrl: "/images/MultitaskMobileApp.png",
    githubUrl: "https://github.com/Imaludayanga6/Multi-Task-App",
    liveUrl: "",
  },
];

export const projectService = {
  // Initialize with default projects if empty
  _initializeIfNeeded: () => {
    const existing = localStorage.getItem(PROJECTS_KEY);
    if (!existing) {
      localStorage.setItem(PROJECTS_KEY, JSON.stringify(DEFAULT_PROJECTS));
    }
  },

  // Get all projects
  getProjects: () => {
    projectService._initializeIfNeeded();
    const data = localStorage.getItem(PROJECTS_KEY);
    return data ? JSON.parse(data) : [];
  },

  // Get single project by ID
  getProjectById: (id) => {
    const projects = projectService.getProjects();
    return projects.find((p) => p.id === id);
  },

  // Add new project
  addProject: (projectData) => {
    const projects = projectService.getProjects();
    const newProject = {
      id: Date.now().toString(),
      ...projectData,
    };
    projects.push(newProject);
    localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects));
    return newProject;
  },

  // Update existing project
  updateProject: (id, projectData) => {
    const projects = projectService.getProjects();
    const index = projects.findIndex((p) => p.id === id);
    if (index !== -1) {
      projects[index] = { ...projects[index], ...projectData };
      localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects));
      return projects[index];
    }
    return null;
  },

  // Delete project
  deleteProject: (id) => {
    const projects = projectService.getProjects();
    const filtered = projects.filter((p) => p.id !== id);
    localStorage.setItem(PROJECTS_KEY, JSON.stringify(filtered));
    return true;
  },

  // Reset to default projects
  resetToDefaults: () => {
    localStorage.setItem(PROJECTS_KEY, JSON.stringify(DEFAULT_PROJECTS));
  },
};
