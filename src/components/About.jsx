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

      animateValue(setProjects, 10, 1000);
      animateValue(setCompetitions, 3, 1000);
      animateValue(setCertificates, 2, 1000);
    }
  }, [startAnimation]);


  return (
    <div ref={ref2} className="mt-[70px] text-white px-6 lg:px-0" id="about">
      <div className="flex flex-col lg:flex-row justify-between w-full">
        <div>
        <h1 data-aos="flip-up" data-aos-duration="1000" className="font-medium text-[28px] border-white border-[1px] px-8 py-2 rounded-[100px] w-max mb-6">
        About Me
        </h1>
        </div>
        <div>
          <p className="text-justify sm:w-[600px] md:w-[700px] lg:w-[850px] max-w-full px-4" data-aos="flip-left" data-aos-duration="600" data-aos-delay="400">
            Saya adalah siswa di SMKN 8 Malang yang sedang menempuh pendidikan di jurusan Rekayasa Perangkat Lunak. Saya tertarik dengan dunia pemrograman dan menjadi seorang Frontend Web Developer.
            Saya memiliki kemampuan dalam membuat website berdasarkan desain yang diberikan. Saya juga memiliki kemampuan dalam menggunakan HTML, CSS, dan JavaScript.
            Saya menggunakan framework React dan juga Tailwind CSS sebagai tools utama dalam pembuatan website.
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
