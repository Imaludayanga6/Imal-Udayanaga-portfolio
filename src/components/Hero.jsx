import { ButtonPrimary , ButtonOutline } from './Button'

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
        <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
            {/* Text Content */}
            <div>
                <div className="flex items-center gap-3">
                    <figure className="img-box w-9 h-9 rounded-lg">
                        <img src="/images/imal.jpeg" width={40}
                        height={40} alt="Imal Udayanga"
                        className="img-cover" />
                    </figure>

                    <div className="flex items-center gap-1.5 text-zinc-400 
                    text-sm tracking-wide">
                        <span className="relative flex w-2 h-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full w-2 h-2 bg-emerald-500"></span>
                        </span>
                        IT Intern @ SLIC | Available for Opportunities
                    </div>
                </div>

                <h2 className="headline-1 max-w-[20ch] sm:max-w-[25ch] lg:max-w-[20ch] mt-5 mb-4">
                    Building Scalable Web & Enterprise Applications
                </h2>

                <p className="text-zinc-400 text-base md:text-lg mb-8 lg:mb-10 max-w-[45ch]">
                    I&apos;m a 4th-year IT Undergraduate at SLIIT specializing in Full-Stack Development with .NET, React, and Modern Databases.
                </p>

                <div className="flex items-center gap-3">
                    <ButtonPrimary label="Download CV" icon="download" href="/Imal_Udayanga_CV.pdf" />
                    <ButtonOutline href="#about" label="Scroll down" icon="arrow_downward"/>
                </div>
            </div>

            {/* Hero Image - Responsive කරලා හැදුවා */}
            <div className="mt-14 lg:mt-0 w-full flex justify-center lg:block">
                <figure className="w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[480px] mx-auto lg:ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400 rounded-[2rem] lg:rounded-none overflow-hidden">
                    <img src="/images/Imal1.png" width={656} height={800} alt="Imal Udayanga" className="w-full h-auto object-cover" />
                </figure>
            </div>
        </div>
    </section>
  )
}

export default Hero