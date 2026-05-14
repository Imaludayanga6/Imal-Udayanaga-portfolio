const journeyItems = [
  {
    title: "IT Intern - Software Engineering",
    location: "Sri Lanka Insurance Corporation (SLIC)",
    date: "Present",
    description:
      "Contributing to enterprise web application development using .NET Core Web API and Oracle Database. Developed Loss Incident Reporting System and revamped Life Net Dashboard.",
    icon: "work",
  },
  {
    title: "B.Sc. (Hons) in Information Technology",
    location: "Sri Lanka Institute of Information Technology (SLIIT)",
    date: "2022 - Present",
    description:
      "4th Year Undergraduate pursuing a degree in IT, specializing in full-stack development, database management, and mobile application development.",
    icon: "school",
  },
];

const Journey = () => {
  return (
    <section id="journey" className="section">
      <div className="container">
        <h2 className="journey-title headline-2 mb-10 reveal-up">
          My Journey
        </h2>

        <div className="journey-timeline">
          {journeyItems.map(
            ({ title, location, date, description, icon }, key) => (
              <div key={key} className="journey-item reveal-up">
                <span className="journey-icon">
                  <span className="material-symbols-rounded" aria-hidden="true">
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
                    <span className="material-symbols-rounded" aria-hidden="true">
                      location_on
                    </span>
                    {location}
                  </p>

                  <p className="journey-description">
                    {description}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Journey;