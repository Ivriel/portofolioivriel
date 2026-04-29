import { forwardRef, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ArrowRight from "./ArrowRight";
import { motion, useInView, animate } from "framer-motion";
import PropTypes from "prop-types";

function Counter({ from, to, duration = 1 }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration: duration,
        onUpdate(value) {
          setCount(Math.round(value));
        },
      });
      return () => controls.stop();
    }
  }, [from, to, duration, isInView]);

  return <span ref={ref}>{count}</span>;
}

Counter.propTypes = {
  from: PropTypes.number.isRequired,
  to: PropTypes.number.isRequired,
  duration: PropTypes.number,
};

function About(props, ref2) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div 
      ref={ref2} 
      className="text-white pt-24" 
      id="about"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 w-full">
        {/* Title Section */}
        <motion.div variants={itemVariants} className="w-full lg:w-1/3 flex justify-start">
          <div className="inline-block border border-glass-border px-8 py-3 rounded-full glass-panel h-fit">
            <h1 className="font-semibold text-[24px] tracking-wide text-white">
              About Me
            </h1>
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div variants={itemVariants} className="w-full lg:w-2/3">
          <div className="glass-panel p-8 sm:p-10 relative overflow-hidden group">
            {/* Subtle glow effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <p className="text-gray-300 text-[16px] md:text-[18px] leading-relaxed relative z-10 font-light">
              I am a student at State Vocational High School 8 Malang, currently pursuing a major in Software Engineering. 
              I have a strong interest in programming and aspire to become a Frontend Web Developer.
              <br/><br/>
              I am proficient in developing websites based on provided designs and have expertise in HTML, CSS, and JavaScript. 
              Additionally, I utilize the React framework and Tailwind CSS as my primary tools for web development to build modern, responsive, and dynamic user interfaces.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        <Link to="/projects" className="block w-full">
          <motion.div 
            whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.06)" }}
            className="glass-panel p-8 flex flex-col items-center justify-center gap-4 cursor-pointer transition-colors duration-300 h-full relative overflow-hidden group"
          >
            <div className="absolute top-4 right-4 bg-white/5 p-2 rounded-full opacity-60 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300 transform group-hover:scale-110">
              <ArrowRight className="w-5 h-5 text-white -rotate-45" />
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <span className="text-[50px] sm:text-[60px] font-bold text-white tracking-tighter">
              <Counter from={0} to={8} duration={1.5} />+
            </span>
            <span className="text-gray-400 font-medium tracking-wide text-sm uppercase">Projects completed</span>
          </motion.div>
        </Link>
        
        <Link to="/competition" className="block w-full">
          <motion.div 
            whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.06)" }}
            className="glass-panel p-8 flex flex-col items-center justify-center gap-4 cursor-pointer transition-colors duration-300 h-full relative overflow-hidden group"
          >
            <div className="absolute top-4 right-4 bg-white/5 p-2 rounded-full opacity-60 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300 transform group-hover:scale-110">
              <ArrowRight className="w-5 h-5 text-white -rotate-45" />
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <span className="text-[50px] sm:text-[60px] font-bold text-white tracking-tighter">
              <Counter from={0} to={3} duration={1.5} />+
            </span>
            <span className="text-gray-400 font-medium tracking-wide text-sm uppercase text-center">Competitions participated</span>
          </motion.div>
        </Link>

        <Link to="/certificates" className="block w-full">
          <motion.div 
            whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.06)" }}
            className="glass-panel p-8 flex flex-col items-center justify-center gap-4 cursor-pointer transition-colors duration-300 h-full relative overflow-hidden group"
          >
            <div className="absolute top-4 right-4 bg-white/5 p-2 rounded-full opacity-60 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300 transform group-hover:scale-110">
              <ArrowRight className="w-5 h-5 text-white -rotate-45" />
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <span className="text-[50px] sm:text-[60px] font-bold text-white tracking-tighter">
              <Counter from={0} to={7} duration={1.5} />+
            </span>
            <span className="text-gray-400 font-medium tracking-wide text-sm uppercase">Certificates earned</span>
          </motion.div>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default forwardRef(About);
