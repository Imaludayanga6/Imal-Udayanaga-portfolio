import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const works = [
  {
    imgSrc: "/images/Lifenet.png",
    title: "Life Net Dashboard Revamp",
    organization: "Sri Lanka Insurance Corporation",
    category: "Enterprise Application",
    tags: ["React.js", ".NET Web API", "Oracle"],
    description:
      "Revamped an enterprise insurance dashboard with dynamic user interfaces, interactive GWP charts, Active Directory integration, and Oracle database connectivity.",
    highlights: [
      "Developed a dynamic enterprise dashboard interface",
      "Implemented interactive GWP data visualizations",
      "Integrated Active Directory authentication",
      "Connected frontend components with Oracle-backed APIs",
    ],
  },
  {
    imgSrc: "/images/LossIncident.png",
    title: "Loss Incident Reporting System",
    organization: "Sri Lanka Insurance Corporation",
    category: "Enterprise Application",
    tags: ["ASP.NET Core", "Oracle", "RBAC"],
    description:
      "Developed an enterprise incident management system with role-based access control, structured reporting workflows, and strict user permission handling.",
    highlights: [
      "Implemented role-based access control",
      "Developed incident reporting and management workflows",
      "Configured user permission handling",
      "Integrated the application with Oracle Database",
    ],
  },
  {
    imgSrc: "/images/gim-management.png",
    title: "Gym Microservices System",
    organization: "Academic Group Project",
    category: "Distributed Web Application",
    tags: ["Microservices", "React.js", "Node.js"],
    description:
      "A distributed gym management application developed using a microservices architecture to support modularity, maintainability, and scalability.",
    highlights: [
      "Designed a microservices-based architecture",
      "Separated application features into modular services",
      "Developed a scalable distributed system",
      "Created a responsive React.js interface",
    ],
    projectLink:
      "https://github.com/denuwan-umayanga/IT4020-gym-microservices",
  },
  {
    imgSrc: "/images/Skill-Share.png",
    title: "Skill-Share Learning Platform",
    organization: "Academic Project",
    category: "Full-Stack Web Application",
    tags: ["React.js", "Spring Boot", "MongoDB"],
    description:
      "A full-stack learning platform where users can create step-by-step guides, upload media, share knowledge, and engage with a learning community.",
    highlights: [
      "Created step-by-step learning guide functionality",
      "Implemented image and media uploading",
      "Added community engagement features",
      "Developed a complete full-stack user experience",
    ],
    projectLink:
      "https://github.com/Imaludayanga6/Skill-Share",
  },
  {
    imgSrc: "/images/vehicle-service.png",
    title: "Vehicle Service Management System",
    organization: "Academic Group Project",
    category: "Full-Stack Web Application",
    tags: ["MERN Stack", "Express.js", "MongoDB"],
    description:
      "A vehicle service management platform with appointment scheduling, mechanic assignment workflows, customer management, and service history tracking.",
    highlights: [
      "Implemented online appointment scheduling",
      "Developed mechanic assignment workflows",
      "Added vehicle service history tracking",
      "Created customer and service management features",
    ],
    projectLink:
      "https://github.com/senurasanketh/Online_Vehicle_Service",
  },
  {
    imgSrc: "/images/MultitaskMobileApp.png",
    title: "Multitask Mobile Application",
    organization: "Personal Project",
    category: "Android Application",
    tags: ["Android Studio", "Kotlin", "Mobile"],
    description:
      "A native Android application designed to help users organize daily tasks, manage schedules, and improve personal time management.",
    highlights: [
      "Developed daily task management features",
      "Implemented schedule organization",
      "Added time-management functionality",
      "Created a native Android user experience",
    ],
    projectLink:
      "https://github.com/Imaludayanga6/Multi-Task-App",
  },
  {
    imgSrc: "/images/OnlineProperty.png",
    title: "Online Property Management System",
    organization: "Academic Project",
    category: "Web Application",
    tags: ["PHP", "JavaScript", "MySQL"],
    description:
      "A web-based platform enabling landlords and tenants to manage property listings, rental information, payments, and maintenance requests.",
    highlights: [
      "Developed property listing management",
      "Implemented rental information tracking",
      "Added maintenance request handling",
      "Created landlord and tenant workflows",
    ],
    projectLink:
      "https://github.com/Imaludayanga6/online-property-management-system-",
  },
];

const workStyles = `
  #work .work-section-heading {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 32px;
    margin-bottom: 36px;
    text-align: left;
  }

  #work .work-section-eyebrow {
    margin: 0 0 8px;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    opacity: 0.7;
  }

  #work .work-section-title {
    margin: 0;
    color: var(--text-heading);
  }

  #work .work-section-introduction {
    max-width: 520px;
    margin: 0;
    line-height: 1.7;
    color: var(--text-muted);
  }

  #work .work-project-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 26px;
  }

  #work .work-project-card {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0;
    overflow: hidden;
    text-align: left;

    border: 1px solid var(--card-border);
    border-radius: 22px;

    background: var(--card-bg);
    color: inherit;

    cursor: pointer;
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);

    box-shadow: 0 14px 35px var(--shadow-main);

    transition:
      transform 0.3s ease,
      border-color 0.3s ease,
      box-shadow 0.3s ease;
  }

  #work .work-project-card:hover {
    transform: translateY(-6px);
    border-color: rgba(56, 189, 248, 0.48);
    box-shadow: 0 20px 45px var(--shadow-main);
  }

  #work .work-project-card:focus-visible {
    outline: 3px solid rgba(56, 189, 248, 0.65);
    outline-offset: 4px;
  }

  #work .work-project-image-box {
    position: relative;
    width: 100%;
    height: 230px;
    margin: 0;
    overflow: hidden;
    background: rgba(15, 23, 42, 0.35);
  }

  #work .work-project-image {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  #work .work-project-card:hover .work-project-image {
    transform: scale(1.04);
  }

  #work .work-project-overlay {
    position: absolute;
    inset: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(2, 6, 23, 0.65);
    opacity: 0;

    transition: opacity 0.3s ease;
  }

  #work .work-project-card:hover .work-project-overlay,
  #work .work-project-card:focus-visible .work-project-overlay {
    opacity: 1;
  }

  #work .work-project-preview {
    padding: 10px 16px;

    border: 1px solid rgba(255, 255, 255, 0.28);
    border-radius: 999px;

    background: rgba(15, 23, 42, 0.82);
    color: #ffffff;

    font-size: 0.85rem;
    font-weight: 600;
  }

  #work .work-project-content {
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 23px;
  }

  #work .work-project-top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 12px;
  }

  #work .work-project-title {
    margin: 0;

    font-size: 1.18rem;
    font-weight: 700;
    line-height: 1.4;

    color: var(--text-heading);
  }

  #work .work-project-arrow {
    width: 37px;
    height: 37px;
    flex-shrink: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid var(--card-border);
    border-radius: 50%;

    color: var(--text-heading);

    transition:
      transform 0.3s ease,
      background-color 0.3s ease;
  }

  #work .work-project-card:hover .work-project-arrow {
    transform: translate(3px, -3px);
    background: rgba(56, 189, 248, 0.14);
  }

  #work .work-project-description {
    margin: 0 0 18px;

    font-size: 0.92rem;
    line-height: 1.7;

    color: var(--text-muted);
  }

  #work .work-project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: auto;
  }

  #work .work-project-tag {
    display: inline-flex;
    align-items: center;

    padding: 7px 11px;

    border: 1px solid rgba(56, 189, 248, 0.2);
    border-radius: 999px;

    background: rgba(56, 189, 248, 0.1);
    color: var(--text-main);

    font-size: 0.76rem;
    font-weight: 600;
  }

  #work .work-modal-overlay {
    position: fixed;
    inset: 0;
    z-index: 9998;

    display: grid;
    place-items: center;

    padding: 24px;
    overflow-y: auto;

    background: rgba(2, 6, 23, 0.82);
  }

  #work .work-modal {
    position: relative;

    width: min(920px, 100%);
    max-height: calc(100vh - 48px);
    overflow-y: auto;

    border: 1px solid var(--card-border);
    border-radius: 26px;

    background: var(--card-bg);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);

    box-shadow: 0 30px 90px rgba(0, 0, 0, 0.4);
  }

  #work .work-modal-close {
    position: absolute;
    top: 15px;
    right: 15px;
    z-index: 3;

    width: 42px;
    height: 42px;
    padding: 0;

    border-radius: 50%;
  }

  #work .work-modal-grid {
    display: grid;
    grid-template-columns: 0.95fr 1.05fr;
  }

  #work .work-modal-visual {
    position: relative;
    min-height: 500px;
    overflow: hidden;
    border-radius: 26px 0 0 26px;
  }

  #work .work-modal-image {
    width: 100%;
    height: 100%;
    min-height: 500px;
    display: block;
    object-fit: cover;
  }

  #work .work-modal-shade {
    position: absolute;
    inset: 0;

    background:
      linear-gradient(
        180deg,
        transparent 40%,
        rgba(2, 6, 23, 0.86)
      );
  }

  #work .work-modal-category {
    position: absolute;
    left: 20px;
    bottom: 20px;

    display: inline-flex;
    align-items: center;
    gap: 8px;

    padding: 9px 13px;

    border-radius: 999px;

    background: rgba(15, 23, 42, 0.82);
    color: #ffffff;

    font-size: 0.8rem;
    font-weight: 600;
  }

  #work .work-modal-details {
    padding: 44px 36px 36px;
    text-align: left;
  }

  #work .work-modal-eyebrow {
    margin: 0 0 8px;

    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 0.13em;
    text-transform: uppercase;

    color: #38bdf8;
  }

  #work .work-modal-title {
    margin: 0 0 17px;

    font-size: clamp(1.6rem, 3vw, 2.25rem);
    line-height: 1.2;

    color: var(--text-heading);
  }

  #work .work-modal-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 20px;
  }

  #work .work-modal-tag {
    padding: 7px 11px;

    border: 1px solid rgba(56, 189, 248, 0.2);
    border-radius: 999px;

    background: rgba(56, 189, 248, 0.1);
    color: var(--text-main);

    font-size: 0.76rem;
    font-weight: 600;
  }

  #work .work-modal-description {
    margin: 0 0 24px;
    line-height: 1.75;
    color: var(--text-muted);
  }

  #work .work-modal-highlight-title {
    margin: 0 0 13px;
    font-size: 1rem;
    color: var(--text-heading);
  }

  #work .work-modal-highlight-list {
    display: grid;
    gap: 11px;

    margin: 0;
    padding: 0;

    list-style: none;
  }

  #work .work-modal-highlight-list li {
    display: flex;
    align-items: flex-start;
    gap: 9px;

    line-height: 1.55;
    color: var(--text-muted);
  }

  #work .work-modal-highlight-list .material-symbols-rounded {
    flex-shrink: 0;
    margin-top: 1px;

    font-size: 20px;
    color: #38bdf8;
  }

  #work .work-modal-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 28px;
  }

  #work .work-modal-github {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    min-height: 46px;
    padding: 11px 18px;

    border-radius: 999px;

    background: linear-gradient(135deg, #00c6ff, #0072ff);
    color: #ffffff;

    font-weight: 600;
    text-decoration: none;
  }

  #work .work-modal-back {
    min-height: 46px;
    padding: 11px 18px;

    border: 1px solid var(--card-border);
    border-radius: 999px;

    background: transparent;
    color: var(--text-heading);
  }

  @media (max-width: 900px) {
    #work .work-section-heading {
      align-items: flex-start;
      flex-direction: column;
      gap: 14px;
    }

    #work .work-project-grid {
      grid-template-columns: 1fr;
    }

    #work .work-modal-grid {
      grid-template-columns: 1fr;
    }

    #work .work-modal-visual {
      min-height: 280px;
      border-radius: 26px 26px 0 0;
    }

    #work .work-modal-image {
      min-height: 280px;
      max-height: 340px;
    }
  }

  @media (max-width: 600px) {
    #work .work-project-image-box {
      height: 190px;
    }

    #work .work-project-content {
      padding: 19px;
    }

    #work .work-project-title {
      font-size: 1.05rem;
    }

    #work .work-modal-overlay {
      padding: 12px;
    }

    #work .work-modal {
      max-height: calc(100vh - 24px);
      border-radius: 20px;
    }

    #work .work-modal-visual {
      border-radius: 20px 20px 0 0;
    }

    #work .work-modal-details {
      padding: 34px 20px 24px;
    }

    #work .work-modal-actions {
      flex-direction: column;
    }

    #work .work-modal-github,
    #work .work-modal-back {
      width: 100%;
      justify-content: center;
    }
  }
`;

const Work = ({ theme }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);

  const openModal = (project) => {
    previousFocusRef.current = document.activeElement;
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);

    window.setTimeout(() => {
      previousFocusRef.current?.focus();
    }, 0);
  };

  useEffect(() => {
    if (!selectedProject) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 100);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedProject]);

  return (
    <section
      id="work"
      className="section"
      aria-labelledby="work-heading"
      data-theme={theme}
    >
      <style>{workStyles}</style>

      <div className="container">
        <div className="work-section-heading reveal-up">
          <div>
            <p className="work-section-eyebrow">
              Selected Projects
            </p>

            <h2
              id="work-heading"
              className="work-section-title headline-2"
            >
              Featured Software Projects
            </h2>
          </div>

          <p className="work-section-introduction">
            A selection of enterprise, web, mobile, and full-stack applications
            I have contributed to through industry experience, academic work,
            and personal development.
          </p>
        </div>

        <div className="work-project-grid">
          {works.map((project) => (
            <button
              key={project.title}
              type="button"
              className="work-project-card reveal-up"
              onClick={() => openModal(project)}
              aria-label={`View details about ${project.title}`}
            >
              <figure className="work-project-image-box">
                <img
                  src={project.imgSrc}
                  alt={`${project.title} project preview`}
                  loading="lazy"
                  className="work-project-image"
                />

                <div
                  className="work-project-overlay"
                  aria-hidden="true"
                >
                  <span className="work-project-preview">
                    View Project Details
                  </span>
                </div>
              </figure>

              <div className="work-project-content">
                <div className="work-project-top">
                  <h3 className="work-project-title">
                    {project.title}
                  </h3>

                  <span
                    className="work-project-arrow"
                    aria-hidden="true"
                  >
                    <span className="material-symbols-rounded">
                      arrow_outward
                    </span>
                  </span>
                </div>

                <p className="work-project-description">
                  {project.description}
                </p>

                <div className="work-project-tags">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="work-project-tag"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="work-modal-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}
          role="presentation"
        >
          <div
            className="work-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="work-modal-title"
            aria-describedby="work-modal-description"
          >
            <button
              ref={closeButtonRef}
              type="button"
              className="work-modal-close"
              onClick={closeModal}
              aria-label="Close project details"
            >
              <span
                className="material-symbols-rounded"
                aria-hidden="true"
              >
                close
              </span>
            </button>

            <div className="work-modal-grid">
              <div className="work-modal-visual">
                <img
                  src={selectedProject.imgSrc}
                  alt={`${selectedProject.title} preview`}
                  className="work-modal-image"
                />

                <div
                  className="work-modal-shade"
                  aria-hidden="true"
                />

                <div className="work-modal-category">
                  <span
                    className="material-symbols-rounded"
                    aria-hidden="true"
                  >
                    deployed_code
                  </span>

                  {selectedProject.category}
                </div>
              </div>

              <div className="work-modal-details">
                <p className="work-modal-eyebrow">
                  {selectedProject.organization}
                </p>

                <h3
                  id="work-modal-title"
                  className="work-modal-title"
                >
                  {selectedProject.title}
                </h3>

                <div className="work-modal-tags">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="work-modal-tag"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p
                  id="work-modal-description"
                  className="work-modal-description"
                >
                  {selectedProject.description}
                </p>

                <h4 className="work-modal-highlight-title">
                  Key Highlights
                </h4>

                <ul className="work-modal-highlight-list">
                  {selectedProject.highlights.map((highlight) => (
                    <li key={highlight}>
                      <span
                        className="material-symbols-rounded"
                        aria-hidden="true"
                      >
                        check_circle
                      </span>

                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="work-modal-actions">
  {selectedProject.projectLink && (
    <a
      href={selectedProject.projectLink}
      target="_blank"
      rel="noopener noreferrer"
      className="work-modal-github"
      aria-label={`View ${selectedProject.title} on GitHub`}
    >
      <span
        className="material-symbols-rounded"
        aria-hidden="true"
      >
        code
      </span>

      View on GitHub

      <span
        className="material-symbols-rounded"
        aria-hidden="true"
      >
        arrow_outward
      </span>
    </a>
  )}

  <button
    type="button"
    className="work-modal-back"
    onClick={closeModal}
  >
    Back to Projects
  </button>
</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

Work.propTypes = {
  theme: PropTypes.oneOf(["dark", "light"]).isRequired,
};

export default Work;