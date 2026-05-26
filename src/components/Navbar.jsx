import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
    const lastActiveLink = useRef();
    const activeBox = useRef();
    const navLinks = useRef([]);
    const sectionIds = ['home', 'about', 'work', 'journey', 'certificates', 'contact'];

    const initActiveBox = () => {
        if (!lastActiveLink.current) return;
        activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
        activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
        activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
        activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
    };

    const setActiveLink = (linkEl) => {
      if (!linkEl || linkEl === lastActiveLink.current) return;
      lastActiveLink.current?.classList.remove('active');
      linkEl.classList.add('active');
      lastActiveLink.current = linkEl;

      activeBox.current.style.top = linkEl.offsetTop + 'px';
      activeBox.current.style.left = linkEl.offsetLeft + 'px';
      activeBox.current.style.width = linkEl.offsetWidth + 'px';
      activeBox.current.style.height = linkEl.offsetHeight + 'px';
    };

    const activeCurrentLink = (event) => {
      const target = event.target.closest('a');
      if (!target) return;
      setActiveLink(target);
    }

    useEffect(initActiveBox, []);
    useEffect(() => {
        window.addEventListener('resize', initActiveBox);
        return () => window.removeEventListener('resize', initActiveBox);
    }, []);

    useEffect(() => {
      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean);

      if (!sections.length) return;

      const updateActiveSection = () => {
        const scrollPosition = window.scrollY + window.innerHeight * 0.45;
        const currentSection = sections.reduce((closest, section) => {
          if (section.offsetTop <= scrollPosition) {
            return section;
          }
          return closest;
        }, sections[0]);

        const activeLink = navLinks.current.find(
          (link) => link?.getAttribute('href') === `#${currentSection.id}`
        );
        setActiveLink(activeLink);
      };

      updateActiveSection();
      window.addEventListener('scroll', updateActiveSection, { passive: true });
      window.addEventListener('resize', updateActiveSection);

      return () => {
        window.removeEventListener('scroll', updateActiveSection);
        window.removeEventListener('resize', updateActiveSection);
      };
    }, []);

    const navItems = [
        {
          label: 'Home',
          link: '#home',
          className: 'nav-link active',
        },
        {
          label: 'About',
          link: '#about',
          className: 'nav-link'
        },
        {
          label: 'Work',
          link: '#work',
          className: 'nav-link'
        },
        {
          label: 'Journey', 
          link: '#journey',
          className: 'nav-link'
        },
        {
          label: 'Certificates', 
          link: '#certificates',   
          className: 'nav-link'
        },
        {
          label: 'Contact',
          link: '#contact',
          className: 'nav-link md:hidden'
        }
      ];

    return (
        <nav className={'navbar ' + (navOpen ? 'active' : '')}>
            {navItems.map(({ label, link, className }, key) => (
                <a href={link}
                key={key}
                ref={(el) => {
                  navLinks.current[key] = el;
                  if (key === 0 && !lastActiveLink.current) {
                    lastActiveLink.current = el;
                  }
                }}
                className={className}
                onClick={activeCurrentLink}
                >
                    {label}
                </a>
            ))}
            <div className="active-box" ref={activeBox}></div>
        </nav>
    );
};

Navbar.propTypes = {
    navOpen: PropTypes.bool.isRequired,
};

export default Navbar;