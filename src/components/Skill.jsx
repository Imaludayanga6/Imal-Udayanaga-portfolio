import SkillCard from "./SkillCard"

const skillItem = [
    {
      imgSrc: '/images/figma.svg',
      label: 'Figma',
      desc: 'Design tool'
    },
    {
      imgSrc: '/images/css3.svg',
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/javascript.svg',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: '/images/nodejs.svg',
      label: 'NodeJS',
      desc: 'Web Server'
    },
    {
      imgSrc: '/images/html.svg',
      label: 'HTML',
      desc: 'markup language'
    },
    {
      imgSrc: '/images/mongodb.svg',
      label: 'MongoDB',
      desc: 'Database'
    },
    {
      imgSrc: '/images/react.svg',
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: '/images/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'User Interface'
    },
    {
        imgSrc: '/images/python.svg',
      label: 'Python',
      desc: 'programming language'
    },
    {
      imgSrc: '/images/java.svg',
      label: 'Java',
      desc: 'Programming Language'
    },
    {
      imgSrc: '/images/linux.svg',
      label: 'Linux',
      desc: 'Operating System'
    },
    {
      imgSrc: '/images/kotlin.svg',
      label: 'Kotlin',
      desc: 'Programming Language'
    },
    {
      imgSrc: '/images/c++.svg',
      label: 'C++',
      desc: 'Programming Language'
    },
    {
      imgSrc: '/images/c.svg',
      label: 'C',
      desc: 'Programming Language'
    },
    {
      imgSrc: '/images/mysql.svg',
      label: 'MySQL',
      desc: 'Database'
    },
    {
      imgSrc: '/images/.net.svg',
      label: 'NET',
      desc: 'Framework'
    },
    {
      imgSrc: '/images/c-sharp.svg',
      label: 'C#',
      desc: 'Programming Language'
    },

  ];
const Skill = () => {
  return (
    <section className="section">
        <div className="container">

            <h2 className="headline-2 reveal-up">
            Essential Tools I use
            </h2>

            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
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