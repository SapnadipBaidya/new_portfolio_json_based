import { useState, useEffect } from 'react';
import { DarkMode, LightMode } from '@mui/icons-material';

const Header = ({ mode, setMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleThemeChange = () => {
    setMode(prev => prev === 'light' ? 'dark' : 'light');
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${mode}`}>
      <div className="header-container">
        <div className="logo" onClick={() => scrollTo('home')}>
          <span className="logo-text">ABHISHEK JANA</span>
          <span className="logo-dot"></span>
        </div>

        <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          {['about', 'skills', 'projects', 'education', 'contact'].map((item) => (
            <div
              key={item}
              className="nav-item"
              onClick={() => scrollTo(item)}
            >
              <span>{item}</span>
              <div className="nav-item-underline"></div>
            </div>
          ))}

          <button className="theme-toggle" onClick={handleThemeChange}>
            {mode === 'dark' ? <LightMode /> : <DarkMode />}
          </button>
        </div>

        <button 
          className={`hamburger ${mobileMenuOpen ? 'open' : ''}`} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1.5rem 2rem;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.8);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .header.dark {
          background: rgba(10, 10, 10, 0.8);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        .header.scrolled {
          padding: 1rem 2rem;
          background: rgba(255, 255, 255, 0.95);
        }

        .header.scrolled.dark {
          background: rgba(10, 10, 10, 0.95);
        }

        .header-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          display: flex;
          align-items: center;
          cursor: pointer;
          position: relative;
        }

        .logo-text {
          font-size: 1.5rem;
          font-weight: 700;
          color: #333;
          transition: all 0.3s ease;
        }

        .dark .logo-text {
          color: #fff;
        }

        .logo-dot {
          width: 8px;
          height: 8px;
          background: linear-gradient(135deg, #6e45e2, #88d3ce);
          border-radius: 50%;
          margin-left: 8px;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-item {
          position: relative;
          cursor: pointer;
          font-weight: 500;
          text-transform: capitalize;
          color: #333;
          transition: all 0.3s ease;
        }

        .dark .nav-item {
          color: #fff;
        }

        .nav-item-underline {
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(135deg, #6e45e2, #88d3ce);
          transition: width 0.3s ease;
        }

        .nav-item:hover .nav-item-underline {
          width: 100%;
        }

        .theme-toggle {
          background: none;
          border: none;
          cursor: pointer;
          color: #333;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem;
          border-radius: 50%;
        }

        .dark .theme-toggle {
          color: #fff;
        }

        .theme-toggle:hover {
          background: rgba(0, 0, 0, 0.1);
        }

        .dark .theme-toggle:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 24px;
          height: 18px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 1001;
        }

        .hamburger span {
          display: block;
          width: 100%;
          height: 2px;
          background: #333;
          transition: all 0.3s ease;
        }

        .dark .hamburger span {
          background: #fff;
        }

        .hamburger.open span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.open span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        @media (max-width: 768px) {
          .nav-links {
            position: fixed;
            top: 0;
            right: -100%;
            width: 70%;
            height: 100vh;
            background: rgba(255, 255, 255, 0.98);
            flex-direction: column;
            justify-content: center;
            gap: 2.5rem;
            transition: right 0.3s ease;
            z-index: 1000;
          }

          .dark .nav-links {
            background: rgba(10, 10, 10, 0.98);
          }

          .nav-links.open {
            right: 0;
          }

          .hamburger {
            display: flex;
          }

          .header {
            padding: 1rem 1.5rem;
          }

          .header.scrolled {
            padding: 0.8rem 1.5rem;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;