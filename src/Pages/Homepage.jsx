import { useState, useEffect, useRef } from "react";
import Header from "../components/Header.jsx";
import Home from "../components/Home.jsx";
import About from "../components/About.jsx";
import Project from "../components/Project.jsx";
import FAQ from "../components/FAQ.jsx";
import Contact from "../components/Contact.jsx";
import NoInternet from "./Nointernet.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function Homepage() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi
      once: true, // Animasi hanya muncul sekali
    });
  }, []);
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOffline = () => setIsOffline(true);
    const handleOnline = () => setIsOffline(false);

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  // ✅ Hooks harus selalu dipanggil di bagian atas, tidak boleh di dalam if
  const ref = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // ✅ Hanya render NoInternet jika offline
  if (isOffline) {
    return <NoInternet />;
  }

  return (
    <div className="px-[50px]">
    <Header scrollToSection={scrollToSection} refs={{ ref1: ref, ref2, ref3, ref4, ref5 }} />
      <Home ref={ref} />
      <About ref={ref2} />
      <Project ref={ref3} />
      <FAQ ref={ref4} />
      <Contact ref={ref5} />
    </div>
  );
}

export default Homepage;
