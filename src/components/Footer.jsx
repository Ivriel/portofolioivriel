import PropTypes from "prop-types";
import { motion } from "framer-motion";

function Footer({ scrollToSection, refs }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.footer 
      className="text-white w-full flex flex-col items-center text-center mt-20 relative z-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.h1 
        variants={itemVariants}
        className="text-[40px] md:text-[60px] lg:text-[80px] font-bold tracking-tighter w-full leading-none text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500"
      >
        Be Kind and Do <br />Great Things.
      </motion.h1>
      
      <motion.div 
        variants={itemVariants}
        className="w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent my-16"
      />
      
      <motion.ul variants={itemVariants} className="flex flex-wrap gap-6 md:gap-10 justify-center w-full">
        {['Home', 'About', 'Project', 'FAQ', 'Contact'].map((item, index) => (
          <li key={index} className="list-none">
            <a
              onClick={() => scrollToSection(refs[`ref${index + 1}`])}
              className="text-gray-400 hover:text-white font-medium hover:cursor-pointer text-lg transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        ))}
      </motion.ul>
      
      <motion.p variants={itemVariants} className="text-gray-500 text-sm mt-20 mb-8 font-light tracking-wide">
        &copy; {new Date().getFullYear()} IVRIEL GUNAWAN. All rights reserved.
      </motion.p>
    </motion.footer>
  )
}

Footer.propTypes = {
  scrollToSection: PropTypes.func.isRequired,
  refs: PropTypes.shape({
    ref1: PropTypes.object.isRequired,
    ref2: PropTypes.object.isRequired,
    ref3: PropTypes.object.isRequired,
    ref4: PropTypes.object.isRequired,
    ref5: PropTypes.object.isRequired
  }).isRequired
};

export default Footer;