import Navbar from './Navbar'
import { useEffect, useRef, useState } from 'react'

const Header = () => {
  const [navOpen, setNavOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setNavOpen(false)
      }
    }

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setNavOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscapeKey)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [])

  return (
    <header className="fixed top-0 left-0 z-40 flex h-20 w-full items-center bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-4 md:grid md:grid-cols-[1fr,3fr,1fr] md:px-6">
        <h1>
          <a href="/" className="logo" onClick={() => setNavOpen(false)}>
            <img
              src="/images/logo.png"
              width={40}
              height={40}
              alt="Imal Udayanga"
            />
          </a>
        </h1>

        <div
          ref={menuRef}
          className="flex flex-1 items-center justify-end md:justify-self-center"
        >
          <button
            className="menu-btn md:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            type="button"
          >
            <span className="material-symbols-rounded">
              {navOpen ? 'close' : 'menu'}
            </span>
          </button>

          <Navbar navOpen={navOpen} />
        </div>

        <a
          href="#contact"
          className="btn btn-secondary desktop-contact-btn hidden md:inline-flex md:justify-self-end"
          onClick={() => setNavOpen(false)}
        >
          Contact Me
        </a>
      </div>
    </header>
  )
}

export default Header