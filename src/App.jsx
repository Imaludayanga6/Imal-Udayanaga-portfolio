import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './App.css';


import { ReactLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const App = () => {
  useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-up');
  
    elements.forEach((element) => {
      gsap.fromTo(
        element,
        { y: 20, opacity: 0 },
        {
          scrollTrigger: {
            trigger: element,
            start: 'top 90%', // Adjust trigger points
            end: 'top 60%',
            scrub: true,
          },
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
        }
      );
    });
  });
  

  return (
    <ReactLenis root options={{ smooth: true, smoothTouch: true }}>
      {/* Background Video */}
      <div className="video-background">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="background-video"
        >
          <source src="/images/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="content-wrapper">
        <Header />
        <main>
          <Hero />
          <About />
          <Skill />
          <Work />
          <Contact />
        </main>
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default App;
