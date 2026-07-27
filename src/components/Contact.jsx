const socialLinks = [
  {
    href: "https://github.com/Imaludayanga6",
    label: "GitHub",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 2C6.48603 2 2 6.48604 2 12C2 17.514 6.48603 22 12 22C17.514 22 22 17.514 22 12C22 6.48604 17.514 2 12 2ZM12 3.5C16.7033 3.5 20.5 7.2967 20.5 12C20.5 15.8327 17.9785 19.0613 14.5 20.126V17.5684C14.5 16.6133 13.9497 15.7943 13.1543 15.3867C13.9276 15.2388 14.6457 14.9454 15.249 14.5309C15.8522 14.1165 16.3232 13.5929 16.6228 13.0037C16.9224 12.4145 17.0421 11.7765 16.9718 11.1429C16.9015 10.5093 16.6434 9.89818 16.2188 9.36035C16.4405 8.67771 16.6883 7.48034 16.0996 6.53809C14.9647 6.53809 14.2323 7.31604 13.8828 7.7998C13.2853 7.60352 12.6459 7.5017 12 7.5C11.3537 7.50057 10.7136 7.60139 10.1152 7.79688C9.76487 7.31289 9.03311 6.53809 7.90039 6.53809C7.22486 7.61941 7.64246 8.78228 7.86621 9.25684C7.41288 9.79235 7.12862 10.4078 7.03781 11.0505C6.94699 11.6931 7.05233 12.3438 7.34478 12.9468C7.63723 13.5498 8.10809 14.087 8.71698 14.5124C9.32587 14.9379 10.0546 15.2389 10.8408 15.3896C10.1877 15.7262 9.69864 16.337 9.54883 17.0781H8.8916C8.2431 17.0781 7.99112 16.8146 7.64062 16.3701C7.29463 15.9256 6.92259 15.6269 6.47559 15.5029C6.23459 15.4774 6.07223 15.6607 6.28223 15.8232C6.99173 16.3062 7.0407 17.0968 7.3252 17.6143C7.5842 18.0803 8.11484 18.5 8.71484 18.5H9.5V20.126C6.02153 19.0613 3.5 15.8327 3.5 12C3.5 7.2967 7.29669 3.5 12 3.5Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/in/imal-udayanga-b13631269",
    label: "LinkedIn",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M5.75 3C4.24011 3 3 4.24011 3 5.75V18.25C3 19.7599 4.24011 21 5.75 21H18.25C19.7599 21 21 19.7599 21 18.25V5.75C21 4.24011 19.7599 3 18.25 3H5.75ZM5.75 4.5H18.25C18.9491 4.5 19.5 5.05089 19.5 5.75V18.25C19.5 18.9491 18.9491 19.5 18.25 19.5H5.75C5.05089 19.5 4.5 18.9491 4.5 18.25V5.75C4.5 5.05089 5.05089 4.5 5.75 4.5ZM7.75 6.5C7.41848 6.5 7.10054 6.6317 6.86612 6.86612C6.6317 7.10054 6.5 7.41848 6.5 7.75C6.5 8.08152 6.6317 8.39946 6.86612 8.63388C7.10054 8.8683 7.41848 9 7.75 9C8.08152 9 8.39946 8.8683 8.63388 8.63388C8.8683 8.39946 9 8.08152 9 7.75C9 7.41848 8.8683 7.10054 8.63388 6.86612C8.39946 6.6317 8.08152 6.5 7.75 6.5ZM7 10C6.7235 10 6.5 10.2235 6.5 10.5V17C6.5 17.2765 6.7235 17.5 7 17.5H8.5C8.7765 17.5 9 17.2765 9 17V10.5C9 10.2235 8.7765 10 8.5 10H7ZM10.5 10C10.2235 10 10 10.2235 10 10.5V17C10 17.2765 10.2235 17.5 10.5 17.5H12C12.2765 17.5 12.5 17.2765 12.5 17V13.25C12.5 12.5605 13.0605 12 13.75 12C14.4395 12 15 12.5605 15 13.25V17C15 17.2765 15.2235 17.5 15.5 17.5H17C17.2765 17.5 17.5 17.2765 17.5 17V13C17.5 11.3455 16.1545 10 14.5 10C13.731 10 13.0315 10.293 12.5 10.7705V10.5C12.5 10.2235 12.2765 10 12 10H10.5Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

const contactStyles = `
  #contact .contact-section-layout {
    display: grid;
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
    gap: 32px;
    align-items: stretch;
  }

  #contact .contact-info-panel,
  #contact .contact-form-panel {
    padding: 34px 30px;
    border: 1px solid var(--card-border);
    border-radius: 26px;
    background: var(--card-bg);
    box-shadow: 0 14px 36px var(--shadow-main);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    text-align: left;
  }

  #contact .contact-info-panel {
    display: flex;
    flex-direction: column;
  }

  #contact .contact-eyebrow {
    margin: 0 0 8px;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--text-soft);
  }

  #contact .contact-main-title {
    margin: 0 0 16px;
    font-size: clamp(2rem, 4vw, 3.1rem);
    line-height: 1.15;
    color: var(--text-heading);
  }

  #contact .contact-main-description {
    margin: 0 0 28px;
    max-width: 42ch;
    line-height: 1.75;
    color: var(--text-muted);
  }

  #contact .contact-detail-list {
    display: grid;
    gap: 14px;
    margin-bottom: 28px;
  }

  #contact .contact-detail-link {
    display: flex;
    align-items: center;
    gap: 14px;

    padding: 15px 16px;

    border: 1px solid var(--card-border);
    border-radius: 16px;

    color: var(--text-heading);
    text-decoration: none;

    transition:
      transform 0.25s ease,
      border-color 0.25s ease,
      background-color 0.25s ease;
  }

  #contact .contact-detail-link:hover {
    transform: translateY(-3px);
    border-color: rgba(56, 189, 248, 0.45);
    background: rgba(56, 189, 248, 0.07);
  }

  #contact .contact-detail-icon {
    width: 42px;
    height: 42px;
    flex-shrink: 0;

    display: grid;
    place-items: center;

    border-radius: 13px;
    background: rgba(56, 189, 248, 0.12);
    color: #38bdf8;
  }

  #contact .contact-detail-icon span {
    color: #38bdf8;
  }

  #contact .contact-detail-content {
    min-width: 0;
  }

  #contact .contact-detail-label {
    display: block;
    margin-bottom: 2px;
    font-size: 0.78rem;
    color: var(--text-soft);
  }

  #contact .contact-detail-value {
    display: block;
    overflow-wrap: anywhere;
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--text-heading);
  }

  #contact .contact-social-area {
    margin-top: auto;
  }

  #contact .contact-social-title {
    margin: 0 0 12px;
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--text-heading);
  }

  #contact .contact-social-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  #contact .contact-social-link {
    width: 48px;
    height: 48px;

    display: grid;
    place-items: center;

    border: 1px solid var(--card-border);
    border-radius: 14px;

    color: var(--text-heading);
    text-decoration: none;

    transition:
      transform 0.25s ease,
      color 0.25s ease,
      border-color 0.25s ease,
      background-color 0.25s ease;
  }

  #contact .contact-social-link:hover {
    transform: translateY(-4px);
    color: #38bdf8;
    border-color: rgba(56, 189, 248, 0.45);
    background: rgba(56, 189, 248, 0.08);
  }

  #contact .contact-form-heading {
    margin-bottom: 26px;
  }

  #contact .contact-form-title {
    margin: 0 0 8px;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-heading);
  }

  #contact .contact-form-description {
    margin: 0;
    line-height: 1.65;
    color: var(--text-muted);
  }

  #contact .contact-form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  #contact .contact-field {
    margin-bottom: 18px;
  }

  #contact .contact-field-label {
    display: block;
    margin-bottom: 8px;
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--text-heading);
  }

  #contact .contact-field-input {
    width: 100%;
    padding: 14px 15px;

    border: 1px solid var(--card-border);
    border-radius: 14px;
    outline: none;

    background: rgba(255, 255, 255, 0.04);
    color: var(--text-heading);

    font: inherit;
    font-size: 0.94rem;

    transition:
      border-color 0.25s ease,
      box-shadow 0.25s ease,
      background-color 0.25s ease;
  }

  .app.light #contact .contact-field-input {
    background: rgba(255, 255, 255, 0.78);
  }

  #contact .contact-field-input::placeholder {
    color: var(--text-soft);
  }

  #contact .contact-field-input:focus {
    border-color: rgba(56, 189, 248, 0.8);
    box-shadow: 0 0 0 4px rgba(56, 189, 248, 0.12);
  }

  #contact .contact-message-field {
    min-height: 160px;
    max-height: 320px;
    resize: vertical;
  }

  #contact .contact-submit-button {
    width: 100%;
    min-height: 50px;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 9px;

    padding: 12px 20px;
    border: none;
    border-radius: 999px;

    background: linear-gradient(135deg, #00c6ff, #0072ff);
    color: #ffffff;

    font-size: 0.95rem;
    font-weight: 700;
    cursor: pointer;

    transition:
      transform 0.25s ease,
      box-shadow 0.25s ease;
  }

  #contact .contact-submit-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 28px rgba(0, 198, 255, 0.3);
  }

  #contact .contact-submit-button span {
    color: #ffffff;
  }

  @media (max-width: 900px) {
    #contact .contact-section-layout {
      grid-template-columns: 1fr;
    }

    #contact .contact-main-description {
      max-width: 60ch;
    }
  }

  @media (max-width: 600px) {
    #contact .contact-info-panel,
    #contact .contact-form-panel {
      padding: 24px 20px;
      border-radius: 20px;
    }

    #contact .contact-form-grid {
      grid-template-columns: 1fr;
      gap: 0;
    }

    #contact .contact-main-title {
      font-size: 2rem;
    }
  }
`;

const Contact = () => {
  return (
    <section
      id="contact"
      className="section"
      aria-labelledby="contact-heading"
    >
      <style>{contactStyles}</style>

      <div className="container">
        <div className="contact-section-layout">
          <div className="contact-info-panel reveal-up">
            <p className="contact-eyebrow">
              Get In Touch
            </p>

            <h2
              id="contact-heading"
              className="contact-main-title"
            >
              Let&apos;s build something meaningful
            </h2>

            <p className="contact-main-description">
              I am open to Software Engineering opportunities, internships,
              graduate roles, and collaborative development projects. Feel free
              to contact me to discuss an opportunity or project.
            </p>

            <div className="contact-detail-list">
              <a
                href="mailto:imaludayanga6@gmail.com"
                className="contact-detail-link"
              >
                <span
                  className="contact-detail-icon"
                  aria-hidden="true"
                >
                  <span className="material-symbols-rounded">
                    mail
                  </span>
                </span>

                <span className="contact-detail-content">
                  <span className="contact-detail-label">
                    Email
                  </span>

                  <span className="contact-detail-value">
                    imaludayanga6@gmail.com
                  </span>
                </span>
              </a>

              <a
                href="tel:+94712841611"
                className="contact-detail-link"
              >
                <span
                  className="contact-detail-icon"
                  aria-hidden="true"
                >
                  <span className="material-symbols-rounded">
                    call
                  </span>
                </span>

                <span className="contact-detail-content">
                  <span className="contact-detail-label">
                    Phone
                  </span>

                  <span className="contact-detail-value">
                    +94 71 284 1611
                  </span>
                </span>
              </a>
            </div>

            <div className="contact-social-area">
              <p className="contact-social-title">
                Professional Profiles
              </p>

              <div className="contact-social-list">
                {socialLinks.map(({ href, label, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-link"
                    aria-label={`Visit my ${label} profile`}
                    title={label}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form
            action="https://getform.io/f/aroopneb"
            method="POST"
            className="contact-form-panel reveal-up"
          >
            <div className="contact-form-heading">
              <h3 className="contact-form-title">
                Send me a message
              </h3>

              <p className="contact-form-description">
                Fill in the form below and I will get back to you as soon as
                possible.
              </p>
            </div>

            <input
              type="hidden"
              name="_gotcha"
              style={{ display: "none" }}
            />

            <div className="contact-form-grid">
              <div className="contact-field">
                <label
                  htmlFor="contact-name"
                  className="contact-field-label"
                >
                  Name
                </label>

                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  className="contact-field-input"
                  autoComplete="name"
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="contact-field">
                <label
                  htmlFor="contact-email"
                  className="contact-field-label"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  className="contact-field-input"
                  autoComplete="email"
                  required
                  placeholder="yourname@email.com"
                />
              </div>
            </div>

            <div className="contact-field">
              <label
                htmlFor="contact-subject"
                className="contact-field-label"
              >
                Subject
              </label>

              <input
                type="text"
                id="contact-subject"
                name="subject"
                className="contact-field-input"
                required
                placeholder="Software engineering opportunity"
              />
            </div>

            <div className="contact-field">
              <label
                htmlFor="contact-message"
                className="contact-field-label"
              >
                Message
              </label>

              <textarea
                id="contact-message"
                name="message"
                className="contact-field-input contact-message-field"
                required
                placeholder="Tell me about the opportunity or project..."
              />
            </div>

            <button
              type="submit"
              className="contact-submit-button"
            >
              Send Message

              <span
                className="material-symbols-rounded"
                aria-hidden="true"
              >
                send
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;