import { useEffect, useRef } from "react";
import Header from "../components/Header.jsx";
import Home from "../components/Home.jsx";
import About from "../components/About.jsx";
import Project from "../components/Project.jsx";
import FAQ from "../components/FAQ.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function Homepage() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi
      once: true, // Animasi hanya muncul sekali
    });
  }, []);

  const ref = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="px-[50px]">
    <Header scrollToSection={scrollToSection} refs={{ ref1: ref, ref2, ref3, ref4, ref5 }} />
      <Home ref={ref} />
      <About ref={ref2} />
      <Project ref={ref3} />
      <FAQ ref={ref4} />
      <Contact ref={ref5} />
      <Footer scrollToSection={scrollToSection} refs={{ ref1: ref, ref2, ref3, ref4, ref5 }}/>
    </div>
  );
}

export default Homepage;
