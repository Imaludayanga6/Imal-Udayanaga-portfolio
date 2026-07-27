import { ButtonPrimary } from "./Button";

const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Projects",
    href: "#work",
  },
  {
    label: "Experience",
    href: "#journey",
  },
  {
    label: "Certificates",
    href: "#certificates",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Imaludayanga6",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/imal-udayanga-b13631269",
  },
];

const footerStyles = `
  footer.portfolio-footer {
    padding-top: 40px;
    padding-bottom: 20px;
  }

  .portfolio-footer .footer-card {
    padding: 38px 34px 24px;

    border: 1px solid var(--card-border);
    border-radius: 28px;

    background: var(--card-bg);
    box-shadow: 0 18px 45px var(--shadow-main);

    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
  }

  .portfolio-footer .footer-top {
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
    gap: 48px;
    align-items: start;
  }

  .portfolio-footer .footer-eyebrow {
    margin: 0 0 10px;

    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;

    color: var(--text-soft);
  }

  .portfolio-footer .footer-title {
    margin: 0 0 18px;

    max-width: 16ch;

    font-size: clamp(2rem, 4vw, 3.4rem);
    line-height: 1.15;

    color: var(--text-heading);
  }

  .portfolio-footer .footer-description {
    max-width: 48ch;
    margin: 0 0 24px;

    line-height: 1.75;

    color: var(--text-muted);
  }

  .portfolio-footer .footer-link-columns {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 30px;
  }

  .portfolio-footer .footer-column-title {
    margin: 0 0 12px;

    font-size: 0.9rem;
    font-weight: 700;

    color: var(--text-heading);
  }

  .portfolio-footer .footer-link-list {
    display: grid;
    gap: 8px;

    margin: 0;
    padding: 0;

    list-style: none;
  }

  .portfolio-footer .footer-link {
    display: inline-flex;

    width: fit-content;

    padding: 4px 0;

    font-size: 0.9rem;
    text-decoration: none;

    color: var(--text-soft);

    transition:
      color 0.25s ease,
      transform 0.25s ease;
  }

  .portfolio-footer .footer-link:hover {
    color: #38bdf8;
    transform: translateX(4px);
  }

  .portfolio-footer .footer-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    margin-top: 38px;
    padding-top: 22px;

    border-top: 1px solid var(--card-border);
  }

  .portfolio-footer .footer-brand {
    display: inline-flex;
    align-items: center;
    gap: 12px;

    text-decoration: none;
  }

  .portfolio-footer .footer-logo {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }

  .portfolio-footer .footer-brand-name {
    font-size: 0.95rem;
    font-weight: 700;

    color: var(--text-heading);
  }

  .portfolio-footer .footer-copyright {
    margin: 0;

    font-size: 0.85rem;

    color: var(--text-soft);
  }

  .portfolio-footer .footer-copyright-name {
    color: var(--text-heading);
    font-weight: 600;
  }

  @media (max-width: 850px) {
    .portfolio-footer .footer-top {
      grid-template-columns: 1fr;
      gap: 36px;
    }

    .portfolio-footer .footer-title {
      max-width: 20ch;
    }
  }

  @media (max-width: 600px) {
    footer.portfolio-footer {
      padding-top: 24px;
    }

    .portfolio-footer .footer-card {
      padding: 28px 20px 20px;
      border-radius: 22px;
    }

    .portfolio-footer .footer-link-columns {
      grid-template-columns: 1fr 1fr;
      gap: 22px;
    }

    .portfolio-footer .footer-bottom {
      align-items: flex-start;
      flex-direction: column;
    }

    .portfolio-footer .footer-title {
      font-size: 2rem;
    }
  }

  @media (max-width: 420px) {
    .portfolio-footer .footer-link-columns {
      grid-template-columns: 1fr;
    }
  }
`;

const Footer = () => {
  return (
    <footer className="portfolio-footer">
      <style>{footerStyles}</style>

      <div className="container">
        <div className="footer-card">
          <div className="footer-top">
            <div>
              <p className="footer-eyebrow">
                Available for Opportunities
              </p>

              <h2 className="footer-title">
                Let&apos;s build something meaningful together
              </h2>

              <p className="footer-description">
                I am open to Software Engineering internships, graduate roles,
                and collaborative development opportunities.
              </p>

              <ButtonPrimary
                href="#contact"
                label="Contact Me"
                icon="chevron_right"
              />
            </div>

            <div className="footer-link-columns">
              <div>
                <h3 className="footer-column-title">
                  Sitemap
                </h3>

                <ul className="footer-link-list">
                  {sitemap.map(({ label, href }) => (
                    <li key={href}>
                      <a
                        href={href}
                        className="footer-link"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="footer-column-title">
                  Professional Profiles
                </h3>

                <ul className="footer-link-list">
                  {socials.map(({ label, href }) => (
                    <li key={href}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <a
              href="#home"
              className="footer-brand"
              aria-label="Back to home"
            >
              <img
                src="/images/logo.png"
                width={40}
                height={40}
                alt="Imal Udayanga logo"
                className="footer-logo"
              />

              <span className="footer-brand-name">
                Imal Udayanga
              </span>
            </a>

            <p className="footer-copyright">
              &copy; {new Date().getFullYear()}{" "}
              <span className="footer-copyright-name">
                Imal Udayanga
              </span>
              . All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;