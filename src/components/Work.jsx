import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/Lifenet.png",
    title: "Life Net Dashboard Revamp (SLIC)",
    tags: ["React", ".NET API", "Oracle"],
    description:
      "Revamped an enterprise insurance dashboard featuring dynamic UI, interactive GWP charts, and Active Directory integration.",
    projectLink: "https://github.com/pramu-k/LifeIntranetProductionApp",
  },
  {
    imgSrc: "/images/LossIncident.png",
    title: "Loss Incident Reporting System",
    tags: [".NET Core", "Oracle", "Role-based"],
    description:
      "An enterprise role-based incident management system with strict permission controls developed during my SLIC internship.",
    projectLink: "https://github.com/pramu-k/LossIncidentReportingSystem",
  },
  {
    imgSrc: "/images/gim-management.png",
    title: "Gym Microservices System",
    tags: ["Microservices", "React", "Node.js"],
    description:
      "A distributed gym management application built using a microservices architecture for high scalability and modularity.",
    projectLink: "https://github.com/denuwan-umayanga/IT4020-gym-microservices",
  },
  {
    imgSrc: "/images/Skill-Share.png",
    title: "Skill-Share Learning Platform",
    tags: ["React", "Spring Boot", "MongoDB"],
    description:
      "A full-stack media-rich platform allowing users to create step-by-step guides, upload media, and engage with a community.",
    projectLink: "https://github.com/Imaludayanga6/Skill-Share",
  },
  {
    imgSrc: "/images/vehicle-service.png",
    title: "Vehicle Service Management",
    tags: ["MERN Stack", "Express", "Web App"],
    description:
      "A comprehensive service platform featuring appointment scheduling, mechanic assignment logic, and service history tracking.",
    projectLink: "https://github.com/senurasanketh/Online_Vehicle_Service",
  },
  {
    imgSrc: "/images/MultitaskMobileApp.png",
    title: "Multitask Mobile App",
    tags: ["Android Studio", "Kotlin", "Mobile"],
    description:
      "An Android application designed to help users efficiently manage their daily tasks, time, and schedules.",
    projectLink: "https://github.com/Imaludayanga6/Multi-Task-App",
  },
  {
    imgSrc: "/images/OnlineProperty.png",
    title: "Online Property Management",
    tags: ["PHP", "JavaScript", "HTML/CSS"],
    description:
      "A web-based system for landlords and tenants to manage property listings, rent tracking, and maintenance requests.",
    projectLink:
      "https://github.com/Imaludayanga6/online-property-management-system-",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="work-title headline-2 mb-8 reveal-up">
          My Portfolio Highlights
        </h2>

        <div className="work-grid">
          {works.map(({ imgSrc, title, tags, description, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              description={description}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;