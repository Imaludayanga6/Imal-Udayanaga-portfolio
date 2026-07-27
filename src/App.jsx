import { useEffect, useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Journey from "./components/Journey";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certificates from "./components/Certificates";

import "./App.css";

import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Moon, Sun } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const App = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "dark" || savedTheme === "light") {
      return savedTheme;
    }

    return "dark";
  });

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark"
    );
  };

  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme);

    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

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

  const nextTheme = theme === "dark" ? "light" : "dark";

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
        <div className="video-background" aria-hidden="true">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="background-video"
          >
            <source src="/images/background.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Background Gradient Overlay */}
        <div className="background-glow" aria-hidden="true" />

        {/* Theme Toggle Button */}
        <button
          type="button"
          className="theme-toggle-btn"
          onClick={toggleTheme}
          aria-label={`Switch to ${nextTheme} mode`}
          title={`Switch to ${nextTheme} mode`}
        >
          {theme === "dark" ? (
            <Sun size={21} strokeWidth={2} aria-hidden="true" />
          ) : (
            <Moon size={21} strokeWidth={2} aria-hidden="true" />
          )}
        </button>

        {/* Main Content */}
        <div className="content-wrapper">
          <Header />

          <main>
            <Hero />
            <About />
            <Skill />
            <Work theme={theme} />
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

export default App;