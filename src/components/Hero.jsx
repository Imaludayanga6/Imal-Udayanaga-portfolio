import { ButtonPrimary, ButtonOutline } from "./Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-28 lg:pt-36"
      aria-labelledby="hero-title"
    >
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-12">
        {/* Text Content */}
        <div>
          {/* Availability Status */}
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg overflow-hidden">
              <img
                src="/images/imal.jpeg"
                width={40}
                height={40}
                alt="Imal Udayanga"
                className="img-cover"
              />
            </figure>

            <div className="hero-status flex items-center gap-2 text-sm tracking-wide">
              <span className="relative flex w-2 h-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full w-2 h-2 bg-emerald-500" />
              </span>

              <span>
                Open to Software Engineering Opportunities
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h1
            id="hero-title"
            className="hero-title headline-1 max-w-[21ch] sm:max-w-[25ch] lg:max-w-[21ch] mt-5 mb-4"
          >
            Software Engineer Building Reliable Digital Solutions
          </h1>

          {/* Introduction */}
          <p className="hero-description text-base md:text-lg mb-8 lg:mb-10 max-w-[52ch]">
            I&apos;m Imal Udayanga, a final-year IT undergraduate at SLIIT
            with hands-on experience developing full-stack web and enterprise
            applications using React.js, .NET Core, Oracle Database, and
            modern software engineering practices.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex items-center gap-3 flex-wrap">
            <ButtonPrimary
              label="View Projects"
              icon="arrow_downward"
              href="#work"
            />

            <ButtonOutline
              label="Download CV"
              icon="download"
              href="/Imal_Udayanga_CV.pdf"
              download
            />
          </div>

          {/* Technology Summary */}
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm opacity-80">
            <span>React.js</span>
            <span aria-hidden="true">•</span>
            <span>.NET Core</span>
            <span aria-hidden="true">•</span>
            <span>Oracle Database</span>
            <span aria-hidden="true">•</span>
            <span>REST APIs</span>
          </div>
        </div>

        {/* Hero Image */}
      <div className="mt-14 lg:mt-0 w-full flex justify-center lg:block">
        <figure className="w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[440px] mx-auto lg:ml-auto">
          <img
            src="/images/Imal2.png"
            width={656}
            height={656}
            alt="Portrait of Imal Udayanga, Software Engineer"
            className="w-full h-auto object-contain"
            fetchPriority="high"
          />
        </figure>
      </div>
      </div>
    </section>
  );
};

export default Hero;