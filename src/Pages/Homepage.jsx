import { useRef, useState, useEffect } from "react";
import Header from "../components/Header.jsx";
import Home from "../components/Home.jsx";
import About from "../components/About.jsx";
import Project from "../components/Project.jsx";
import FAQ from "../components/FAQ.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import { motion, useScroll, useSpring } from "framer-motion";

function Homepage() {
  const ref = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();

  const [activeSection, setActiveSection] = useState('Home');

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      const pageYOffset = window.scrollY;
      const sections = [
        { name: 'Home', ref: ref },
        { name: 'About', ref: ref2 },
        { name: 'Project', ref: ref3 },
        { name: 'FAQ', ref: ref4 },
        { name: 'Contact', ref: ref5 },
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.ref.current) {
          const offsetTop = section.ref.current.offsetTop - 150;
          if (pageYOffset >= offsetTop) {
            setActiveSection(section.name);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionRef) => {
    // Add offset for the sticky header
    const yOffset = -80; 
    const y = sectionRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-white origin-left z-[60]"
        style={{ scaleX }}
      />
      <div className="px-[20px] md:px-[40px] lg:px-[80px] max-w-7xl mx-auto flex flex-col gap-24 pb-20">
        <Header activeSection={activeSection} scrollToSection={scrollToSection} refs={{ ref1: ref, ref2, ref3, ref4, ref5 }} />
        <Home ref={ref} />
        <About ref={ref2} />
        <Project ref={ref3} />
        <FAQ ref={ref4} />
        <Contact ref={ref5} />
        <Footer scrollToSection={scrollToSection} refs={{ ref1: ref, ref2, ref3, ref4, ref5 }}/>
      </div>
    </>
  );
}

export default Homepage;
