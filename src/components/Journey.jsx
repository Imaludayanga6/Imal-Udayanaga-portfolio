const journeyItems = [
  {
    title: 'IT Intern - Software Engineering',
    location: 'Sri Lanka Insurance Corporation (SLIC)',
    date: 'Present',
    description: 'Contributing to enterprise web application development using .NET Core Web API and Oracle Database. Developed Loss Incident Reporting System and revamped Life Net Dashboard.',
    icon: 'work'
  },
  {
    title: 'B.Sc. (Hons) in Information Technology',
    location: 'Sri Lanka Institute of Information Technology (SLIIT)',
    date: '2022 - Present',
    description: '4th Year Undergraduate pursuing a degree in IT, specializing in full-stack development, database management, and mobile application development.',
    icon: 'school'
  }
];

const Journey = () => {
  return (
    <section id="journey" className="section">
      <div className="container">
        <h2 className="headline-2 mb-10 reveal-up">My Journey</h2>

        <div className="relative border-l-2 border-zinc-700/50 ml-4 md:ml-6">
          {journeyItems.map(({ title, location, date, description, icon }, key) => (
            <div key={key} className="mb-10 ml-8 md:ml-12 reveal-up">
              
              <span className="absolute -left-[21px] flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800 ring-4 ring-zinc-900 shadow-sm text-sky-400">
                <span className="material-symbols-rounded" aria-hidden="true">{icon}</span>
              </span>

              <div className="bg-zinc-800/50 p-5 md:p-7 rounded-2xl ring-1 ring-inset ring-zinc-50/5 hover:bg-zinc-700/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                  <h3 className="text-xl font-semibold text-zinc-100">{title}</h3>
                  <span className="text-sm font-medium text-sky-400 bg-sky-400/10 px-3 py-1 rounded-full w-max">
                    {date}
                  </span>
                </div>
                
                <p className="text-zinc-300 font-medium mb-3 flex items-center gap-2">
                  <span className="material-symbols-rounded text-lg text-zinc-500" aria-hidden="true">location_on</span>
                  {location}
                </p>

                <p className="text-sm text-zinc-400 leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Journey;