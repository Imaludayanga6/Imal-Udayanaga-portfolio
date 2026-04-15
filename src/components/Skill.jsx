import SkillCard from "./SkillCard"

const skillItem = [
    // Frontend & Web
    { imgSrc: '/images/html.svg', label: 'HTML', desc: 'Markup Language' },
    { imgSrc: '/images/css3.svg', label: 'CSS', desc: 'User Interface' },
    { imgSrc: '/images/tailwindcss.svg', label: 'TailwindCSS', desc: 'User Interface' },
    { imgSrc: '/images/javascript.svg', label: 'JavaScript', desc: 'Interaction' },
    { imgSrc: '/images/react.svg', label: 'React', desc: 'Framework' },

    // Backend & Server
    { imgSrc: '/images/nodejs.svg', label: 'NodeJS', desc: 'Web Server' },
    { imgSrc: '/images/.net.svg', label: 'ASP.NET', desc: 'Framework' },

    // Programming & Mobile Languages
    { imgSrc: '/images/c-sharp.svg', label: 'C#', desc: 'Programming Language' },
    { imgSrc: '/images/java.svg', label: 'Java', desc: 'Programming Language' },
    { imgSrc: '/images/kotlin.svg', label: 'Kotlin', desc: 'Mobile Development' }, 
    { imgSrc: '/images/python.svg', label: 'Python', desc: 'Programming Language' },
    { imgSrc: '/images/c++.svg', label: 'C++', desc: 'Programming Language' },
    { imgSrc: '/images/c.svg', label: 'C', desc: 'Programming Language' },

    // Databases
    { imgSrc: '/images/mysql.svg', label: 'MySQL', desc: 'Database' },
    { imgSrc: '/images/mongodb.svg', label: 'MongoDB', desc: 'Database' },
    { imgSrc: '/images/oracle.svg', label: 'Oracle', desc: 'Database' },

    // Tools & Environments
    { imgSrc: '/images/git.svg', label: 'Git', desc: 'Version Control' }, 
    { imgSrc: '/images/linux.svg', label: 'Linux', desc: 'Operating System' },
];

const Skill = () => {
  return (
    <section id="skills" className="section"> 
        <div className="container">

            <h2 className="headline-2 reveal-up">
            Essential Tools I use
            </h2>

            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
            Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
            </p>

            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                    skillItem.map(({ imgSrc, label, desc }, key) => (
                        <SkillCard 
                            key={key} imgSrc={imgSrc} label={label} desc={desc} classes="reveal-up"
                            />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Skill