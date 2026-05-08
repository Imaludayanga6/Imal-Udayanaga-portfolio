import { useState } from "react";

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
    subCertificates: [
      {
        title: "MongoDB CRUD Operations: Insert and Find Documents",
        link: "https://learn.mongodb.com/c/3tskhC4cTDOfavAcRjFnSg"
      },
      {
        title: "MongoDB CRUD Operations: Modifying Query Results",
        link: "https://learn.mongodb.com/c/8qOa8REfT0G7n0dUYhHUTg"
      },
      {
        title: "MongoDB CRUD Operations: Replace and Delete Documents",
        link: "https://learn.mongodb.com/c/d4wqJmdSSUO2pB7C_8uwBw"
      },
      {
        title: "MongoDB Data Modeling Intro",
        link: "https://learn.mongodb.com/c/OtTLYOO0R5SqVYwGHuNG_Q"
      }
    ]
  }
];

const Certificates = () => {

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="certificates" className="section">
      <div className="container">
        
        <h2 className="headline-2 mb-4 reveal-up">
          My Certificates
        </h2>
        
        <p className="text-zinc-400 mb-8 max-w-[50ch] reveal-up">
          Professional courses and certifications I have completed to continuously improve my technical skills.
        </p>

        {/* 👇 IMPORTANT FIX */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start">
          
          {certificates.map((cert, index) => (
            
            <div
              key={index}
              className="bg-zinc-800/50 p-6 rounded-2xl ring-1 ring-inset ring-zinc-50/5 hover:bg-zinc-700/50 transition-all duration-300 flex flex-col self-start"
            >
              
              {/* Platform */}
              <p className="text-sm text-zinc-400 mb-2">
                {cert.platform}
              </p>

              {/* Title */}
              <h3 className="text-lg font-semibold text-zinc-100 mb-4 flex-grow">
                {cert.title}
              </h3>

              {/* Normal Certificate */}
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 transition-colors"
                >
                  View Certificate
                </a>
              )}

              {/* Dropdown Certificates */}
              {cert.subCertificates && (
                <div>
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors"
                  >
                    View Certificates
                    <span
                      className={`transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </button>

                  {/* Dropdown with animation */}
                  <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-[1000px] mt-3" : "max-h-0"
                  }`}
                >
                    <ul className="space-y-2 list-disc pl-5">
                    {cert.subCertificates.map((sub, i) => (
                      <li key={i}>
                        <a
                          href={sub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-zinc-300 hover:text-sky-400 transition-colors"
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