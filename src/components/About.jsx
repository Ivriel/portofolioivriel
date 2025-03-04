import { forwardRef, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function About(props, ref2) {
  const [projects, setProjects] = useState(0);
  const [competitions, setCompetitions] = useState(0);
  const [certificates, setCertificates] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false); // Cek apakah animasi boleh berjalan
  const aboutRef = useRef(null); // Untuk mendeteksi saat elemen masuk viewport

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
        }
      },
      { threshold: 0.9 } // Animasi mulai persen elemen yang masuk viewport
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (startAnimation) {
      const animateValue = (setter, target, duration) => {
        let start = 0;
        let stepTime = Math.abs(Math.floor(duration / target));
        
        let timer = setInterval(() => {
          start += 1;
          setter(start);
          if (start >= target) clearInterval(timer);
        }, stepTime);
      };

      animateValue(setProjects, 8, 1000);
      animateValue(setCompetitions, 3, 1000);
      animateValue(setCertificates, 2, 1000);
    }
  }, [startAnimation]);


  return (
    <div ref={ref2} className="mt-[70px] text-white md:px-6 lg:px-0" id="about">
      <div className="flex flex-col md:flex-row justify-between w-full">
        <div className="flex justify-center md:justify-start">
        <h1 data-aos="flip-up" data-aos-duration="1000" className="font-medium text-[28px] border-white border-[1px] px-8 py-2 h-fit rounded-[100px] w-max mb-6 md:text-center">
        About Me
        </h1>
        </div>
        <div>
          <p className="text-justify  max-w-full px-4" data-aos="flip-left" data-aos-duration="600" data-aos-delay="400">
          I am a student at State Vocational High School 8 Malang, currently pursuing a major in Software Engineering. 
          I have a strong interest in programming and aspire to become a Frontend Web Developer.
          I am proficient in developing websites based on provided designs and have expertise in HTML, CSS, and JavaScript. 
          Additionally, I utilize the React framework and Tailwind CSS as my primary tools for web development.
          </p>
        </div>
      </div>

      <div ref={aboutRef} className="flex flex-col sm:flex-row justify-between mt-10 space-y-6 sm:space-y-0">
        <Link to="/projects" className="text-white text-center w-full sm:w-fit" >
          <div className="flex flex-col items-center gap-6">
            <span className="text-[50px] sm:text-[64px] font-bold">{projects}+</span>
            <span className="text-gray-400">Projects completed</span>
          </div>
        </Link>
        <Link to="/competition" className="text-white text-center w-full sm:w-fit" >
          <div className="flex flex-col items-center gap-6">
            <span className="text-[50px] sm:text-[64px] font-bold">{competitions}+</span>
            <span className="text-gray-400">Competitions participated</span>
          </div>
        </Link>
        <Link to="/certificates" className="text-white text-center w-full sm:w-fit">
          <div className="flex flex-col items-center gap-6">                                                                                                                                                     
            <span className="text-[50px] sm:text-[64px] font-bold">{certificates}+</span>
            <span className="text-gray-400">Certificates earned</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default forwardRef(About);
