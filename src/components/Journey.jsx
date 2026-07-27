const journeyItems = [
  {
  title: "Software Engineering Intern",
  location: "Sri Lanka Insurance Corporation (SLIC)",
  date: "March 2025 - June 2026",
  description:
    "Contributed to enterprise software development using React.js, ASP.NET Core Web API, and Oracle Database.",
  highlights: [
    "Contributed to the Life Net Dashboard Revamp",
    "Developed features for the Loss Incident Reporting System",
    "Integrated frontend interfaces with REST APIs",
    "Worked with Oracle Database and role-based access control",
  ],
  icon: "work",
},
  {
    title: "B.Sc. (Hons) in Information Technology",
    location: "Sri Lanka Institute of Information Technology (SLIIT)",
    date: "2022 - Present",
    description:
      "Final-year undergraduate developing knowledge and practical experience in software engineering, full-stack development, databases, and mobile application development.",
    highlights: [
      "Full-stack web application development",
      "Object-oriented programming",
      "Database design and management",
      "Mobile application development",
    ],
    icon: "school",
  },
];

const Journey = () => {
  return (
    <section
      id="journey"
      className="section"
      aria-labelledby="journey-heading"
    >
      <div className="container">
        <div className="mb-10 reveal-up">
          <p className="text-sm font-medium uppercase tracking-[0.2em] opacity-70 mb-2">
            Experience & Education
          </p>

          <h2
            id="journey-heading"
            className="journey-title headline-2 mb-3"
          >
            My Professional Journey
          </h2>

          <p className="max-w-[60ch] mx-auto leading-relaxed opacity-75">
            A summary of my industry experience and academic background in
            software engineering and information technology.
          </p>
        </div>

        <div className="journey-timeline">
          {journeyItems.map(
            ({
              title,
              location,
              date,
              description,
              highlights,
              icon,
            }) => (
              <article
                key={`${title}-${location}`}
                className="journey-item reveal-up"
              >
                <span className="journey-icon" aria-hidden="true">
                  <span className="material-symbols-rounded">
                    {icon}
                  </span>
                </span>

                <div className="journey-card">
                  <div className="journey-header">
                    <h3 className="journey-card-title">
                      {title}
                    </h3>

                    <span className="journey-date">
                      {date}
                    </span>
                  </div>

                  <p className="journey-location">
                    <span
                      className="material-symbols-rounded"
                      aria-hidden="true"
                    >
                      location_on
                    </span>

                    {location}
                  </p>

                  <p className="journey-description">
                    {description}
                  </p>

                  <ul className="journey-highlight-list">
                    {highlights.map((highlight) => (
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
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Journey;