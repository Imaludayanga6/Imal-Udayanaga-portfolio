const aboutItems = [
  {
    label: "Projects Completed",
    number: 6,
  },
  {
    label: "Years of Coding",
    number: 3,
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="section"
      aria-labelledby="about-heading"
    >
      <div className="container">
        <div className="about-card p-7 rounded-2xl md:p-12 reveal-up">
          {/* Section Heading */}
          <div className="mb-6 md:mb-8">
            <p className="text-sm font-medium uppercase tracking-[0.2em] opacity-70 mb-2">
              About Me
            </p>

            <h2
              id="about-heading"
              className="headline-2 max-w-[24ch]"
            >
              Building practical software solutions for real-world problems
            </h2>
          </div>

          {/* About Description */}
          <div className="about-description space-y-5 md:text-lg leading-relaxed">
            <p>
              I am a final-year undergraduate pursuing a B.Sc. (Hons) in
              Information Technology at the Sri Lanka Institute of Information
              Technology, with hands-on industry experience as a{" "}
              <strong>Software Engineering Intern</strong> at Sri Lanka
              Insurance Corporation.
            </p>

            <p>
              During my internship, I contributed to enterprise applications
              such as the Life Insurance Dashboard Revamp and the Loss Incident
              Reporting System. My responsibilities included developing
              responsive user interfaces, integrating REST APIs, implementing
              backend functionality, and working with enterprise databases.
            </p>

            <p>
              I have practical experience with React.js, ASP.NET Core, .NET Web
              API, Oracle Database, and modern software development practices. I
              enjoy creating reliable, maintainable, and user-friendly
              applications while continuously improving my technical and
              problem-solving skills.
            </p>

            <p>
              I am currently seeking Software Engineering opportunities where I
              can contribute to meaningful projects, collaborate with
              experienced development teams, and continue growing as a
              professional software engineer.
            </p>
          </div>

          {/* Key Highlights */}
          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            <div className="about-highlight rounded-xl p-4">
              <span className="material-symbols-rounded mb-2" aria-hidden="true">
                code
              </span>

              <h3 className="font-semibold mb-1">
                Full-Stack Development
              </h3>

              <p className="text-sm opacity-75">
                Building frontend, backend, API, and database-driven
                applications.
              </p>
            </div>

            <div className="about-highlight rounded-xl p-4">
              <span className="material-symbols-rounded mb-2" aria-hidden="true">
                business_center
              </span>

              <h3 className="font-semibold mb-1">
                Industry Experience
              </h3>

              <p className="text-sm opacity-75">
                Contributed to enterprise software projects during my
                internship.
              </p>
            </div>

            <div className="about-highlight rounded-xl p-4 sm:col-span-2 md:col-span-1">
              <span className="material-symbols-rounded mb-2" aria-hidden="true">
                groups
              </span>

              <h3 className="font-semibold mb-1">
                Team Collaboration
              </h3>

              <p className="text-sm opacity-75">
                Experienced in teamwork, debugging, version control, and
                iterative development.
              </p>
            </div>
          </div>

          {/* Statistics */}
          <div className="mt-8 pt-7 border-t border-current/10 flex flex-wrap items-center gap-6 md:gap-10">
            {aboutItems.map(({ label, number }) => (
              <div className="about-stat" key={label}>
                <div className="flex items-center mb-1 md:mb-2">
                  <span className="about-number text-2xl font-bold md:text-4xl">
                    {number}
                    <span className="about-plus font-semibold md:text-3xl">
                      +
                    </span>
                  </span>
                </div>

                <p className="about-label text-sm">
                  {label}
                </p>
              </div>
            ))}

            <img
              src="/images/logo.png"
              alt="Imal Udayanga portfolio logo"
              width={40}
              height={40}
              loading="lazy"
              className="about-logo ml-auto w-9 h-9 md:w-11 md:h-11 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;