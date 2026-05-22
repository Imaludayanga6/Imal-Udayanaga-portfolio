import { useState } from "react";

import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Skill from "../components/Skill";
import Journey from "../components/Journey";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Certificates from "../components/Certificates";

import "../App.css";

import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const PortfolioPage = ({ theme, toggleTheme }) => {
  useGSAP(() => {
    const elements = gsap.utils.toArray(".reveal-up");

    elements.forEach((element) => {
      gsap.fromTo(
        element,
        {
          y: 35,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    });

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <ReactLenis
      root
      options={{
        smoothWheel: true,
        smoothTouch: false,
        duration: 1.1,
      }}
    >
      <div className={`app ${theme}`}>
        {/* Background Video */}
        <div className="video-background">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="background-video"
          >
            <source src="/images/background.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Background Gradient Overlay */}
        <div className="background-glow"></div>

        {/* Theme Toggle Button */}
        <button className="theme-toggle-btn" onClick={toggleTheme}>
          {theme === "dark" ? "White Mode" : "Black Mode"}
        </button>

        {/* Content */}
        <div className="content-wrapper">
          <Header />

          <main>
            <Hero />
            <About />
            <Skill />
            <Work />
            <Journey />
            <Certificates />
            <Contact />
          </main>

          <Footer />
        </div>
      </div>
    </ReactLenis>
  );
};

export default PortfolioPage;
