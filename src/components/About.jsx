const aboutItems = [
    {
      label: 'Projects done',
      number: 6
    },
    {
      label: 'Years of coding',
      number: 2
    }
  ];
  
const About = () => {
  return (
    <section id="about" className="section">
        <div className="container">
            <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                <p className="text-white mb-4 md:mb-8 md:text-xl">
                    I am a fourth-year undergraduate pursuing a B.Sc. (Hons) in Information Technology at SLIIT, currently gaining hands-on industry experience as an IT Intern at Sri Lanka Insurance Corporation. I specialize in enterprise web application development using .NET and Oracle, alongside expertise in modern full-stack technologies like React and the MERN stack. I am a fast learner and a dedicated team player, eager to deliver impactful and user-centric solutions.
                </p>

                <div className="flex flex-wrap items-center gap-4 md:gap-7">
                    {
                        aboutItems.map(({ label, number}, key) => (
                            <div key={key}>
                                <div className="flex items-center md:mb-2">
                                    <span className="text-2xl font-bold md:text-4xl">
                                        {number}
                                        <span className="text-sky-400 font-semibold md:text-3xl">
                                            +
                                        </span>
                                    </span>
                                </div>

                                <p className="text-sm text-zinc-400">
                                    {label}
                                </p>
                            </div>
                        ))
                    }

                    <img src="/images/logo.png" alt="Logo" width={30} height={30} 
                    className="ml-auto md:w-[40px] md:h-[40px]" />

                </div>
            </div>
        </div>
    </section>
  )
}

export default About