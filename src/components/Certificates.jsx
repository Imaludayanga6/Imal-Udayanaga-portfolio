import { useState } from "react";

const certificates = [
  {
    title: "Introduction to MEAN Stack",
    platform: "Simplilearn",
    link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIzMzM1IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvdGh1bWJfNjg3OTAzNV8xNzIwMzc1MDc0LnBuZyIsInVzZXJuYW1lIjoiSy5BLkEuSW1hbCBVZGF5YW5nYSJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion",
  },
  {
    title: ".NET Fundamentals",
    platform: "Great Learning",
    link: "https://www.mygreatlearning.com/certificate/TIMSQGTC",
  },
  {
    title: "Foundational C# with Microsoft",
    platform: "Microsoft",
    link: "https://www.freecodecamp.org/certification/fcc4ab8db6f-7ea4-4f49-8284-622dfef35eec/foundational-c-sharp-with-microsoft",
  },
  {
    title: "MongoDB Node.js Developer Path",
    platform: "MongoDB",
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

const Certificates = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const cardStyle = {
    background: "var(--card-bg)",
    border: "1px solid var(--card-border)",
    boxShadow: "0 12px 30px var(--shadow-main)",
  };

  return (
    <section id="certificates" className="section">
      <div className="container">
        <h2
          className="headline-2 reveal-up"
          style={{
            color: "var(--text-heading)",
            marginBottom: "14px",
            textAlign: "left",
          }}
        >
          My Certificates
        </h2>

        <p
          className="reveal-up"
          style={{
            color: "var(--text-muted)",
            maxWidth: "55ch",
            marginBottom: "38px",
            lineHeight: "1.7",
            textAlign: "left",
          }}
        >
          Professional courses and certifications I have completed to
          continuously improve my technical skills.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
            alignItems: "start",
          }}
        >
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="reveal-up"
              style={{
                ...cardStyle,
                minHeight: "220px",
                padding: "28px 24px",
                borderRadius: "24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                textAlign: "left",
                transition: "0.3s ease",
              }}
            >
              <div>
                <p
                  style={{
                    color: "var(--text-soft)",
                    fontSize: "0.9rem",
                    fontWeight: "500",
                    marginBottom: "12px",
                  }}
                >
                  {cert.platform}
                </p>

                <h3
                  style={{
                    color: "var(--text-heading)",
                    fontSize: "1.18rem",
                    fontWeight: "700",
                    lineHeight: "1.4",
                    marginBottom: "22px",
                  }}
                >
                  {cert.title}
                </h3>
              </div>

              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "fit-content",
                    padding: "10px 16px",
                    borderRadius: "999px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "linear-gradient(135deg, #00c6ff, #0072ff)",
                    color: "#ffffff",
                    fontSize: "0.95rem",
                    fontWeight: "700",
                    textDecoration: "none",
                  }}
                >
                  View Certificate
                  <span
                    className="material-symbols-rounded"
                    style={{ color: "#ffffff", fontSize: "18px" }}
                    aria-hidden="true"
                  >
                    arrow_outward
                  </span>
                </a>
              )}

              {cert.subCertificates && (
                <div>
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    style={{
                      width: "fit-content",
                      padding: "10px 16px",
                      borderRadius: "999px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      background: "linear-gradient(135deg, #00c6ff, #0072ff)",
                      color: "#ffffff",
                      fontSize: "0.95rem",
                      fontWeight: "700",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    View Certificates
                    <span
                      style={{
                        color: "#ffffff",
                        transition: "0.3s ease",
                        transform:
                          openIndex === index ? "rotate(180deg)" : "rotate(0)",
                      }}
                    >
                      ▼
                    </span>
                  </button>

                  <div
                    style={{
                      overflow: "hidden",
                      maxHeight: openIndex === index ? "1000px" : "0",
                      marginTop: openIndex === index ? "18px" : "0",
                      transition: "0.3s ease",
                    }}
                  >
                    <ul
                      style={{
                        margin: 0,
                        paddingLeft: "20px",
                        display: "grid",
                        gap: "10px",
                      }}
                    >
                      {cert.subCertificates.map((sub, i) => (
                        <li key={i} style={{ color: "var(--text-muted)" }}>
                          <a
                            href={sub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              color: "var(--text-muted)",
                              fontSize: "0.9rem",
                              lineHeight: "1.5",
                              textDecoration: "none",
                            }}
                          >
                            {sub.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;