import { forwardRef } from "react";
import InstagramIcon from "./InstagramIcon";
import GmailIcon from "./GmailIcon";
import GithubIcon from "./GithubIcon";
import IconButton from "../assets/File text.svg";
import ProfileImage from "../assets/Profile Image Container.png";
import { motion } from "framer-motion";

function Home(props, ref) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div ref={ref} className="flex flex-col lg:flex-row items-center justify-between text-white w-full gap-12 lg:gap-0 min-h-[80vh]" id="home">
      {/* Teks dan Informasi Profil */}
      <motion.div 
        className="w-full lg:w-1/2 px-4 lg:px-0 z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className="inline-block px-4 py-2 rounded-full glass-panel mb-6">
          <p className="text-gray-300 text-sm font-medium tracking-widest uppercase">Hello, I&apos;m</p>
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="font-bold text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 mb-4">
          Ivriel Dei<br/>Gratia Gunawan
        </motion.h1>
        
        <motion.h2 variants={itemVariants} className="text-gray-400 text-[20px] sm:text-[24px] lg:text-[28px] font-light tracking-wide mb-10">
          Frontend Developer
        </motion.h2>

        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 mb-12">
          <a href="https://www.instagram.com/wynsc_u13/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-all duration-300 group">
            <div className="p-3 rounded-full glass-panel group-hover:bg-white/10 transition-colors">
              <InstagramIcon className="w-5 h-5" />
            </div>
            <span className="font-medium">Instagram</span>
          </a>
          <a href="https://github.com/Ivriel" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-all duration-300 group">
            <div className="p-3 rounded-full glass-panel group-hover:bg-white/10 transition-colors">
              <GithubIcon className="w-5 h-5 fill-current" />
            </div>
            <span className="font-medium">Github</span>
          </a>
          <a href="https://mail.google.com/mail/?view=cm&to=gunawanivriel@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-all duration-300 group">
            <div className="p-3 rounded-full glass-panel group-hover:bg-white/10 transition-colors">
              <GmailIcon className="w-5 h-5" />
            </div>
            <span className="font-medium">Gmail</span>
          </a>
        </motion.div>

        <motion.a 
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center justify-center bg-white text-black gap-3 px-8 py-4 rounded-full hover:bg-gray-200 text-base font-semibold shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all cursor-pointer" 
          title="Download CV" 
          href="/CV-Ivriel.pdf" 
          download="CV_Ivriel.pdf"
        >
          <img src={IconButton} alt="Download Icon" className="w-5 h-5" />
          Download CV
        </motion.a>
      </motion.div>

      {/* Gambar Profil */}
      <motion.div 
        className="w-full lg:w-1/2 flex justify-center lg:justify-end relative"
        initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="relative w-[300px] sm:w-[400px] lg:w-[500px] aspect-square">
          {/* Decorative glow behind image */}
          <div className="absolute inset-0 bg-white/5 rounded-full blur-3xl scale-110"></div>
          
          <div className="glass-panel p-4 rounded-[2rem] w-full h-full relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img 
              src={ProfileImage} 
              alt="Ivriel Gunawan" 
              className="w-full h-full object-cover rounded-[1.5rem] filter grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default forwardRef(Home);
