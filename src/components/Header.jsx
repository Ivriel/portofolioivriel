import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import IconButton from '../assets/File text.svg';
import { motion } from 'framer-motion';

function Header({ activeSection, scrollToSection, refs }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="text-white flex h-full">
      <nav 
        className={`flex items-center justify-between fixed top-0 left-0 right-0 px-[20px] lg:px-[50px] z-50 transition-all duration-300 ${
          scrolled ? 'h-[70px] glass-nav shadow-lg' : 'h-[90px] bg-transparent'
        }`}
      >
        <span className="flex items-center">
          <a href="/" className="p-0 m-0 font-bold text-[24px] tracking-wider" title='Homepage'>
            IVRIEL
          </a>
        </span>
        {/* Hamburger menu */}
        <button
          className="lg:hidden text-2xl focus:outline-none text-white z-50 relative"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          {menuOpen ? '✖' : '☰'}
        </button>
        {/* Menu utama */}
        <ul
          className={`${
            menuOpen
              ? 'flex flex-col absolute top-0 left-0 w-full h-screen bg-[#0a0a0a]/95 backdrop-blur-xl text-white justify-center items-center gap-8'
              : 'hidden'
          } lg:flex lg:flex-row lg:static lg:w-auto lg:h-auto lg:bg-transparent lg:p-0 lg:gap-10 items-center justify-center`}
        >
          {['Home', 'About', 'Project', 'FAQ', 'Contact'].map((item, index) => {
            const isActive = activeSection === item;
            return (
              <li key={index} className="mt-2 lg:mt-0 py-2">
                <a
                  onClick={() => {
                    scrollToSection(refs[`ref${index + 1}`]);
                    setMenuOpen(false);
                  }}
                  className={`block hover:cursor-pointer text-lg lg:text-base font-medium transition-colors relative group ${
                    isActive ? 'text-white' : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  {item}
                  <span 
                    className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </a>
              </li>
            );
          })}
          <li className="mt-4 lg:mt-0 py-2">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center bg-white text-black gap-2 px-[20px] py-[10px] rounded-full hover:bg-gray-200 font-medium transition-colors cursor-pointer"
              title="Download CV"
              href="/CV-Ivriel.pdf"
              download="CV-Ivriel.pdf"
            >
              <img src={IconButton} alt="Download Icon" className="w-5 h-5" />
              Download CV
            </motion.a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

// Validasi Props
Header.propTypes = {
  activeSection: PropTypes.string,
  scrollToSection: PropTypes.func.isRequired,
  refs: PropTypes.shape({
    ref1: PropTypes.object.isRequired,
    ref2: PropTypes.object.isRequired,
    ref3: PropTypes.object.isRequired,
    ref4: PropTypes.object.isRequired,
    ref5: PropTypes.object.isRequired
  }).isRequired
};

Header.defaultProps = {
  activeSection: 'Home'
};

export default Header;
