import { useState } from 'react';
import PropTypes from 'prop-types';
import IconButton from '../assets/File text.svg';

function Header({ scrollToSection, refs }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="text-white flex">
      <nav className="flex items-center justify-between fixed h-[68px] z-[10] top-0 left-0 right-0 bg-[#151515] px-[20px] lg:px-[50px]">
        <span className="flex items-center">
          <a href="/" className="p-0 m-0 font-medium text-[20px]" title='Homepage'>
            <h1>IVRIEL</h1>
          </a>
        </span>
        {/* Hamburger menu */}
        <button
          className="lg:hidden text-2xl focus:outline-none text-white"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          {menuOpen ? '✖' : '☰'}
        </button>
        {/* Menu utama */}
        <ul
  className={`${
    menuOpen
      ? 'flex flex-col absolute top-[68px] left-0 w-full bg-[#151515] text-white shadow-lg py-4'
      : 'hidden'
  } lg:flex lg:flex-row lg:static lg:w-auto lg:shadow-none lg:p-0 lg:gap-10 items-center justify-center`}
>
          {['Home', 'About', 'Project', 'FAQ', 'Contact'].map((item, index) => (
            <li key={index} className="mt-2 lg:mt-0 py-2">
              <a
                onClick={() => scrollToSection(refs[`ref${index + 1}`])}
                className="block hover:text-gray-300 hover:cursor-pointer text-lg"
              >
                {item}
              </a>
            </li>
          ))}
          <li className="mt-4 lg:mt-0 py-2">
            <a
              className="flex items-center justify-center bg-white text-black gap-2 px-[20px] py-[10px] rounded-md hover:bg-gray-300"
              title="Download CV"
              href="/CV-ivriel.pdf"
              download="CV-Ivriel.pdf"
            >
              <img src={IconButton} alt="Download Icon" className="w-5 h-5" />
              Download CV
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

// Validasi Props
Header.propTypes = {
  scrollToSection: PropTypes.func.isRequired,
  refs: PropTypes.shape({
    ref1: PropTypes.object.isRequired,
    ref2: PropTypes.object.isRequired,
    ref3: PropTypes.object.isRequired,
    ref4: PropTypes.object.isRequired,
    ref5: PropTypes.object.isRequired
  }).isRequired
};

export default Header;
