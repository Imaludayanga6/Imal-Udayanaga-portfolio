const certificates = [
  {
    title: "Introduction to MEAN Stack",
    platform: "Simplilearn",
    link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIzMzM1IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvdGh1bWJfNjg3OTAzNV8xNzIwMzc1MDc0LnBuZyIsInVzZXJuYW1lIjoiSy5BLkEuSW1hbCBVZGF5YW5nYSJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion"
  },
  {
    title: ".NET Fundamentals",
    platform: "Great Learning",
    link: "https://www.mygreatlearning.com/certificate/TIMSQGTC"
  },
  {
    title: "Foundational C# with Microsoft",
    platform: "Microsoft",
    link: "https://www.freecodecamp.org/certification/fcc4ab8db6f-7ea4-4f49-8284-622dfef35eec/foundational-c-sharp-with-microsoft"
  },
  {
    title: "MongoDB Node.js Developer Path",
    platform: "MongoDB",
    link: "https://learn.mongodb.com/c/tT-89iXKT2mStZLP_WD6OA"
  }
];

const Certificates = () => {
  return (
    // id="certificates" එක දැම්මා, එතකොට Navbar එකෙන් මෙතනට ලින්ක් කරන්න පුළුවන්
    <section id="certificates" className="section">
      <div className="container">
        
        <h2 className="headline-2 mb-4 reveal-up">
          My Certificates
        </h2>
        
        <p className="text-zinc-400 mb-8 max-w-[50ch] reveal-up">
          Professional courses and certifications I have completed to continuously improve my technical skills.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-zinc-800/50 p-6 rounded-2xl ring-1 ring-inset ring-zinc-50/5 hover:bg-zinc-700/50 transition-colors flex flex-col h-full reveal-up"
            >
              
              {/* Icon and Platform Name */}
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-lg grid place-items-center bg-sky-400/10 text-sky-400 shrink-0">
                  <span className="material-symbols-rounded" aria-hidden="true">workspace_premium</span>
                </span>
                <p className="text-sm text-zinc-400 font-medium">
                  {cert.platform}
                </p>
              </div>

              {/* Certificate Title */}
              <h3 className="text-lg font-semibold text-zinc-100 mb-6 flex-grow">
                {cert.title}
              </h3>

              {/* View Button Link */}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-sky-400 hover:text-sky-300 transition-colors mt-auto w-max"
              >
                View Certificate
                <span className="material-symbols-rounded text-base" aria-hidden="true">arrow_outward</span>
              </a>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certificates;