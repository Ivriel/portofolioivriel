import { forwardRef } from "react"
import { Link } from "react-router-dom"
import BGContact from "../assets/BG-Contact-Section.png"
import PhoneIcon from "./PhoneCall"
import { motion } from "framer-motion"
import ArrowRight from "./ArrowRight"

function Contact(props, ref4) {
  return (
    <motion.div 
      ref={ref4} 
      id="contact"
      className="w-full mt-32 mb-20 relative overflow-hidden rounded-[2rem] glass-panel"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{backgroundImage:`url(${BGContact})`}}
      ></div>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 flex flex-col md:flex-row justify-between items-center px-8 md:px-16 py-16 md:py-20 gap-8">
        <div className="text-center md:text-left">
          <motion.h1 
            className="text-white font-bold text-[32px] md:text-[40px] tracking-tight mb-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Interested working with Me?
          </motion.h1>
          <motion.p 
            className="text-gray-300 text-lg font-light max-w-md"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Let&apos;s build something amazing together. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </motion.p>
        </div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 w-full md:w-auto justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link to="/projects" className="w-full sm:w-auto flex">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-medium text-[16px] transition-colors flex items-center justify-center gap-2 group"
            >
              See more projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
          <a href="https://wa.link/adbxh7" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-white text-black px-8 py-4 rounded-full font-semibold text-[16px] hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2"
            >
              <PhoneIcon className="w-5 h-5 text-black" />
              <span className="text-center">Contact Me</span>
            </motion.button>
          </a>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default forwardRef(Contact)