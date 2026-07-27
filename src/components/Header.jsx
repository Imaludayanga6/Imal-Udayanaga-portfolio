import { useState } from "react";
import Navbar from "./Navbar";

const headerStyles = `
  .portfolio-header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;

    width: 100%;
    height: 80px;

    display: flex;
    align-items: center;

    border-bottom: 1px solid var(--nav-border);
    background: rgba(3, 7, 18, 0.72);

    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);

    transition:
      background-color 0.3s ease,
      border-color 0.3s ease;
  }

  .app.light .portfolio-header {
    background: rgba(248, 250, 252, 0.82);
  }

  .portfolio-header .header-container {
    width: 100%;
    max-width: 1400px;

    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    align-items: center;

    margin: 0 auto;
    padding: 0 76px 0 24px;
  }

  .portfolio-header .header-brand {
    width: fit-content;

    display: inline-flex;
    align-items: center;
    gap: 11px;

    text-decoration: none;
  }

  .portfolio-header .header-logo {
    width: 42px;
    height: 42px;

    display: block;
    object-fit: contain;
  }

  .portfolio-header .header-brand-name {
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--text-heading);
  }

  .portfolio-header .header-navigation {
    position: relative;
    justify-self: center;
  }

  .portfolio-header .header-contact-button {
    justify-self: end;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    min-height: 44px;
    padding: 10px 18px;

    border: 1px solid rgba(56, 189, 248, 0.25);
    border-radius: 999px;

    background: rgba(56, 189, 248, 0.1);
    color: var(--text-heading);

    font-size: 0.9rem;
    font-weight: 700;
    text-decoration: none;

    transition:
      transform 0.25s ease,
      background-color 0.25s ease,
      border-color 0.25s ease,
      box-shadow 0.25s ease;
  }

  .portfolio-header .header-contact-button:hover {
    transform: translateY(-2px);
    border-color: rgba(56, 189, 248, 0.55);
    background: rgba(56, 189, 248, 0.16);
    box-shadow: 0 10px 28px rgba(56, 189, 248, 0.12);
  }

  .portfolio-header .header-menu-button {
    width: 42px;
    height: 42px;

    display: none;
    align-items: center;
    justify-content: center;

    padding: 0;

    border: 1px solid var(--nav-border);
    border-radius: 13px;

    background: var(--nav-bg);
    color: var(--text-heading);

    cursor: pointer;
  }

  .portfolio-header .header-menu-button span {
    color: var(--text-heading);
  }

  @media (max-width: 900px) {
    .portfolio-header .header-container {
      grid-template-columns: 1fr auto;
      padding: 0 72px 0 18px;
    }

    .portfolio-header .header-brand-name {
      display: none;
    }

    .portfolio-header .header-navigation {
      justify-self: end;
    }

    .portfolio-header .header-menu-button {
      display: inline-flex;
    }

    .portfolio-header .header-contact-button {
      display: none;
    }
  }

  @media (max-width: 600px) {
    .portfolio-header {
      height: 72px;
    }

    .portfolio-header .header-container {
      padding: 0 66px 0 14px;
    }

    .portfolio-header .header-logo {
      width: 38px;
      height: 38px;
    }

    .portfolio-header .header-menu-button {
      width: 40px;
      height: 40px;
    }
  }
`;

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNavigation = () => {
    setNavOpen((currentState) => !currentState);
  };

  const closeNavigation = () => {
    setNavOpen(false);
  };

  return (
    <header className="portfolio-header">
      <style>{headerStyles}</style>

      <div className="header-container">
        <a
          href="#home"
          className="header-brand"
          aria-label="Go to home section"
          onClick={closeNavigation}
        >
          <img
            src="/images/logo.png"
            width={42}
            height={42}
            alt="Imal Udayanga logo"
            className="header-logo"
          />

          <span className="header-brand-name">
            Imal Udayanga
          </span>
        </a>

        <div className="header-navigation">
          <button
            type="button"
            className="header-menu-button"
            onClick={toggleNavigation}
            aria-label={navOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={navOpen}
            aria-controls="main-navigation"
          >
            <span
              className="material-symbols-rounded"
              aria-hidden="true"
            >
              {navOpen ? "close" : "menu"}
            </span>
          </button>

          <Navbar
            navOpen={navOpen}
            onNavigate={closeNavigation}
          />
        </div>

        <a
          href="#contact"
          className="header-contact-button"
          onClick={closeNavigation}
        >
          Contact Me

          <span
            className="material-symbols-rounded"
            aria-hidden="true"
          >
            arrow_forward
          </span>
        </a>
      </div>
    </header>
  );
};

export default Header;