import SkillCard from "./SkillCard";

const skillGroups = [
  {
    title: "Frontend Development",
    description: "Building responsive and user-friendly web interfaces.",
    skills: [
      {
        imgSrc: "/images/html.svg",
        label: "HTML",
        desc: "Semantic Markup",
      },
      {
        imgSrc: "/images/css3.svg",
        label: "CSS",
        desc: "Responsive Styling",
      },
      {
        imgSrc: "/images/javascript.svg",
        label: "JavaScript",
        desc: "Web Development",
      },
      {
        imgSrc: "/images/react.svg",
        label: "React.js",
        desc: "Frontend Library",
      },
      {
        imgSrc: "/images/tailwindcss.svg",
        label: "Tailwind CSS",
        desc: "Utility-First CSS",
      },
    ],
  },
  {
    title: "Backend Development",
    description: "Developing APIs, business logic, and server-side applications.",
    skills: [
      {
        imgSrc: "/images/.net.svg",
        label: "ASP.NET Core",
        desc: "Backend Framework",
      },
      {
        imgSrc: "/images/c-sharp.svg",
        label: "C#",
        desc: "Backend Development",
      },
      {
        imgSrc: "/images/nodejs.svg",
        label: "Node.js",
        desc: "JavaScript Runtime",
      },
      {
        imgSrc: "/images/python.svg",
        label: "Python",
        desc: "Application Development",
      },
      {
        imgSrc: "/images/java.svg",
        label: "Java",
        desc: "Object-Oriented Programming",
      },
    ],
  },
  {
    title: "Mobile and Programming",
    description: "Programming experience across mobile and system development.",
    skills: [
      {
        imgSrc: "/images/kotlin.svg",
        label: "Kotlin",
        desc: "Android Development",
      },
      {
        imgSrc: "/images/c++.svg",
        label: "C++",
        desc: "Programming Language",
      },
      {
        imgSrc: "/images/c.svg",
        label: "C",
        desc: "Programming Language",
      },
    ],
  },
  {
    title: "Databases",
    description: "Designing, querying, and integrating relational and NoSQL databases.",
    skills: [
      {
        imgSrc: "/images/oracle.svg",
        label: "Oracle Database",
        desc: "Enterprise Database",
      },
      {
        imgSrc: "/images/mysql.svg",
        label: "MySQL",
        desc: "Relational Database",
      },
      {
        imgSrc: "/images/mongodb.svg",
        label: "MongoDB",
        desc: "NoSQL Database",
      },
    ],
  },
  {
    title: "Tools and Platforms",
    description: "Tools used for development, collaboration, and deployment.",
    skills: [
      {
        imgSrc: "/images/git.svg",
        label: "Git",
        desc: "Version Control",
      },
      {
        imgSrc: "/images/linux.svg",
        label: "Linux",
        desc: "Development Environment",
      },
    ],
  },
];

const Skill = () => {
  return (
    <section
      id="skills"
      className="section"
      aria-labelledby="skills-heading"
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center reveal-up">
          <p className="text-sm font-medium uppercase tracking-[0.2em] opacity-70 mb-2">
            Technical Skills
          </p>

          <h2 id="skills-heading" className="skill-title headline-2">
            Technologies I Work With
          </h2>

          <p className="skill-description mt-3 mb-10 max-w-[60ch] mx-auto">
            A collection of programming languages, frameworks, databases, and
            development tools I use to build reliable web, mobile, and
            enterprise applications.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="space-y-12">
          {skillGroups.map(({ title, description, skills }) => (
            <div key={title} className="skill-category reveal-up">
              <div className="mb-5">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                  {title}
                </h3>

                <p className="text-sm md:text-base opacity-70 max-w-[60ch]">
                  {description}
                </p>
              </div>

              <div className="skill-grid">
                {skills.map(({ imgSrc, label, desc }) => (
                  <SkillCard
                    key={label}
                    imgSrc={imgSrc}
                    label={label}
                    desc={desc}
                    classes="reveal-up"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;