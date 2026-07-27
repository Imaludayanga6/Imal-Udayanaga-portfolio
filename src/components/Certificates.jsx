import { useState } from "react";

const certificates = [
  {
    title: "Introduction to MEAN Stack",
    platform: "Simplilearn",
    category: "Full-Stack Development",
    link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIzMzM1IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvdGh1bWJfNjg3OTAzNV8xNzIwMzc1MDc0LnBuZyIsInVzZXJuYW1lIjoiSy5BLkEuSW1hbCBVZGF5YW5nYSJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion",
  },
  {
    title: ".NET Fundamentals",
    platform: "Great Learning",
    category: "Backend Development",
    link: "https://www.mygreatlearning.com/certificate/TIMSQGTC",
  },
  {
    title: "Foundational C# with Microsoft",
    platform: "Microsoft",
    category: "Programming",
    link: "https://www.freecodecamp.org/certification/fcc4ab8db6f-7ea4-4f49-8284-622dfef35eec/foundational-c-sharp-with-microsoft",
  },
  {
    title: "MongoDB Node.js Developer Path",
    platform: "MongoDB",
    category: "Database Development",
    subCertificates: [
      {
        title: "MongoDB CRUD Operations: Insert and Find Documents",
        link: "https://learn.mongodb.com/c/3tskhC4cTDOfavAcRjFnSg",
      },
      {
        title: "MongoDB CRUD Operations: Modifying Query Results",
        link: "https://learn.mongodb.com/c/8qOa8REfT0G7n0dUYhHUTg",
      },
      {
        title: "MongoDB CRUD Operations: Replace and Delete Documents",
        link: "https://learn.mongodb.com/c/d4wqJmdSSUO2pB7C_8uwBw",
      },
      {
        title: "MongoDB Data Modeling Intro",
        link: "https://learn.mongodb.com/c/OtTLYOO0R5SqVYwGHuNG_Q",
      },
    ],
  },
];

const certificateStyles = `
  #certificates .certificate-heading {
    margin-bottom: 38px;
    text-align: left;
  }

  #certificates .certificate-eyebrow {
    margin: 0 0 8px;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--text-soft);
  }

  #certificates .certificate-main-title {
    margin: 0 0 14px;
    color: var(--text-heading);
  }

  #certificates .certificate-introduction {
    max-width: 58ch;
    margin: 0;
    line-height: 1.7;
    color: var(--text-muted);
  }

  #certificates .certificate-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px;
    align-items: start;
  }

  #certificates .certificate-card {
    min-height: 240px;
    padding: 26px 24px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border: 1px solid var(--card-border);
    border-radius: 22px;

    background: var(--card-bg);
    box-shadow: 0 14px 35px var(--shadow-main);

    text-align: left;

    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);

    transition:
      transform 0.3s ease,
      border-color 0.3s ease,
      box-shadow 0.3s ease;
  }

  #certificates .certificate-card:hover {
    transform: translateY(-6px);
    border-color: rgba(56, 189, 248, 0.45);
    box-shadow: 0 20px 45px var(--shadow-main);
  }

  #certificates .certificate-card-top {
    margin-bottom: 24px;
  }

  #certificates .certificate-platform-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 14px;
  }

  #certificates .certificate-platform {
    margin: 0;
    font-size: 0.88rem;
    font-weight: 600;
    color: var(--text-soft);
  }

  #certificates .certificate-category {
    padding: 6px 10px;

    border: 1px solid rgba(56, 189, 248, 0.2);
    border-radius: 999px;

    background: rgba(56, 189, 248, 0.1);
    color: var(--text-main);

    font-size: 0.72rem;
    font-weight: 600;
  }

  #certificates .certificate-title {
    margin: 0;
    font-size: 1.18rem;
    font-weight: 700;
    line-height: 1.45;
    color: var(--text-heading);
  }

  #certificates .certificate-link,
  #certificates .certificate-toggle {
    width: fit-content;
    min-height: 44px;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    padding: 10px 16px;

    border: none;
    border-radius: 999px;

    background: linear-gradient(135deg, #00c6ff, #0072ff);
    color: #ffffff;

    font-size: 0.9rem;
    font-weight: 700;
    text-decoration: none;

    cursor: pointer;

    transition:
      transform 0.25s ease,
      box-shadow 0.25s ease;
  }

  #certificates .certificate-link:hover,
  #certificates .certificate-toggle:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 24px rgba(0, 198, 255, 0.3);
  }

  #certificates .certificate-link span,
  #certificates .certificate-toggle span {
    color: #ffffff;
  }

  #certificates .certificate-toggle-icon {
    transition: transform 0.3s ease;
  }

  #certificates .certificate-toggle-icon.open {
    transform: rotate(180deg);
  }

  #certificates .certificate-sub-list-wrapper {
    overflow: hidden;
    max-height: 0;
    opacity: 0;

    transition:
      max-height 0.35s ease,
      opacity 0.3s ease,
      margin-top 0.3s ease;
  }

  #certificates .certificate-sub-list-wrapper.open {
    max-height: 500px;
    margin-top: 18px;
    opacity: 1;
  }

  #certificates .certificate-sub-list {
    display: grid;
    gap: 11px;

    margin: 0;
    padding: 0;

    list-style: none;
  }

  #certificates .certificate-sub-item {
    display: flex;
    align-items: flex-start;
    gap: 9px;
  }

  #certificates .certificate-sub-icon {
    flex-shrink: 0;
    margin-top: 2px;

    font-size: 18px;
    color: #38bdf8;
  }

  #certificates .certificate-sub-link {
    font-size: 0.88rem;
    line-height: 1.55;
    text-decoration: none;
    color: var(--text-muted);

    transition: color 0.25s ease;
  }

  #certificates .certificate-sub-link:hover {
    color: #38bdf8;
  }

  @media (max-width: 850px) {
    #certificates .certificate-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 600px) {
    #certificates .certificate-heading {
      text-align: center;
    }

    #certificates .certificate-introduction {
      margin-left: auto;
      margin-right: auto;
    }

    #certificates .certificate-card {
      min-height: auto;
      padding: 22px 20px;
    }

    #certificates .certificate-platform-row {
      align-items: flex-start;
      flex-direction: column;
      gap: 8px;
    }

    #certificates .certificate-link,
    #certificates .certificate-toggle {
      width: 100%;
    }
  }
`;

const Certificates = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCertificateGroup = (index) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

  return (
    <section
      id="certificates"
      className="section"
      aria-labelledby="certificates-heading"
    >
      <style>{certificateStyles}</style>

      <div className="container">
        <div className="certificate-heading reveal-up">
          <p className="certificate-eyebrow">
            Professional Development
          </p>

          <h2
            id="certificates-heading"
            className="certificate-main-title headline-2"
          >
            Certifications
          </h2>

          <p className="certificate-introduction">
            Professional courses and certifications I have completed to
            strengthen my knowledge in software development, programming,
            backend technologies, and databases.
          </p>
        </div>

        <div className="certificate-grid">
          {certificates.map((certificate, index) => {
            const isOpen = openIndex === index;
            const listId = `certificate-list-${index}`;

            return (
              <article
                key={`${certificate.platform}-${certificate.title}`}
                className="certificate-card reveal-up"
              >
                <div className="certificate-card-top">
                  <div className="certificate-platform-row">
                    <p className="certificate-platform">
                      {certificate.platform}
                    </p>

                    <span className="certificate-category">
                      {certificate.category}
                    </span>
                  </div>

                  <h3 className="certificate-title">
                    {certificate.title}
                  </h3>
                </div>

                {certificate.link && (
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificate-link"
                    aria-label={`View ${certificate.title} certificate`}
                  >
                    View Certificate

                    <span
                      className="material-symbols-rounded"
                      aria-hidden="true"
                    >
                      arrow_outward
                    </span>
                  </a>
                )}

                {certificate.subCertificates && (
                  <div>
                    <button
                      type="button"
                      className="certificate-toggle"
                      onClick={() => toggleCertificateGroup(index)}
                      aria-expanded={isOpen}
                      aria-controls={listId}
                    >
                      {isOpen
                        ? "Hide Certificates"
                        : "View Certificates"}

                      <span
                        className={`material-symbols-rounded certificate-toggle-icon ${
                          isOpen ? "open" : ""
                        }`}
                        aria-hidden="true"
                      >
                        expand_more
                      </span>
                    </button>

                    <div
                      id={listId}
                      className={`certificate-sub-list-wrapper ${
                        isOpen ? "open" : ""
                      }`}
                    >
                      <ul className="certificate-sub-list">
                        {certificate.subCertificates.map(
                          (subCertificate) => (
                            <li
                              key={subCertificate.title}
                              className="certificate-sub-item"
                            >
                              <span
                                className="material-symbols-rounded certificate-sub-icon"
                                aria-hidden="true"
                              >
                                verified
                              </span>

                              <a
                                href={subCertificate.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="certificate-sub-link"
                              >
                                {subCertificate.title}
                              </a>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certificates;