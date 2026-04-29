import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import GithubIcon from "../components/GithubIcon";
import LinkIcon from "../components/LinkIcon";

import FAWZIUIUX from "../assets/projects/FAWZIUIUXPICTURE.png";
import GIDEONSBLOG from "../assets/projects/GIDEONSBLOGPICTURE.png";
import CUACA from "../assets/projects/CUACAPICTURE.png";
import AWSQUALIFIER from "../assets/projects/AWSQUALIFIERPICTURE.png";
import AWSFINAL from "../assets/projects/AWSFINALPICTURE.png";
import POLINEMA from "../assets/projects/POLINEMAPICTURE.png";
import LIGASMK from "../assets/projects/LIGASMKPICTURE.png";
import TYPEMASTER from "../assets/projects/TYPEMASTERPICTURE.png";
import CODECOMMUNITY from "../assets/projects/CODECOMMUNITYPICTURE.png";
import SHANKARA from "../assets/projects/SHANKARAPICTURE.png";

function Projects() {
  const projectsFile = [
    {
      title: "Shankara Paperstraw",
      description: "Company landing page website to promote their product and their company.",
      tech: ["Next JS", "Tailwind CSS"],
      image: SHANKARA,
      link: "https://www.shankarapaperstraw.com/",
      repository: "https://github.com/Ivriel/shankara-paperstraw"
    },
    {
      title: "FAWIUIUX",
      description: "Website which provides UI/UX design services with customer service feature also contact via email real-time send.",
      tech: ["React", "Tailwind CSS"],
      image: FAWZIUIUX,
      link: "https://fawziuiux.vercel.app/",
      repository: "https://github.com/Ivriel/FAWZIUIUX"
    },
    {
      title: "Gideon's Blog",
      description: "Website client's profile. Provide some information such as school,identity, and etc with real-time clock.",
      tech: ["HTML", "CSS", "JAVASCRIPT"],
      image: GIDEONSBLOG,
      link: "https://gideon-blog.vercel.app/",
      repository: "https://github.com/Ivriel/Update-GIDEON-S-BLOG"
    },
    {
      title: "Cuaca",
      description: "Provide information about weather in 3 place to find out the weather from tomorrow, 2 and 3 days later.",
      tech: ["HTML", "CSS", "AJAX"],
      image: CUACA,
      link: "https://website-cuaca-five.vercel.app/",
      repository: "https://github.com/Ivriel/website-cuaca"
    },
    {
      title: "AWS Qualifier",
      description: "Website made for participating the Asia Web Slicing qualifier round which made in just 4 hours due to time limitations.",
      tech: ["HTML", "CSS"],
      image: AWSQUALIFIER,
      link: "https://aws-qualifier.vercel.app/",
      repository: "https://github.com/Ivriel/AWS-QUALIFIER"
    },
    {
      title: "AWS Final",
      description: "Website made for participating the Asia Web Slicing final round which made in just 4 hours due to time limitations too.",
      tech: ["HTML", "CSS"],
      image: AWSFINAL,
      link: "https://aws-final.vercel.app/",
      repository: "https://github.com/Ivriel/AWS-FINAL"
    },
    {
      title: "Polinema Webtech",
      description: "Website which made to participating in LKS. Designed and builded just in 4 hours due to competition limit time.",
      tech: ["HTML", "CSS"],
      image: POLINEMA,
      link: "https://polinema-webtech.vercel.app/",
      repository: "https://github.com/Ivriel/POLINEMA-WEBTECH"
    },
    {
      title: "Liga SMK",
      description: "Website which made to participating in national vocational school league. Made in just 3 hours.",
      tech: ["HTML", "CSS"],
      image: LIGASMK,
      link: "https://liga-smk.vercel.app/",
      repository: "https://github.com/Ivriel/LIGA-SMK"
    },
    {
      title: "Typemaster",
      description: "Website which made for completing industrial assignment. This website show and sell various keyboards.",
      tech: ["HTML", "CSS"],
      image: TYPEMASTER,
      link: "https://typemaster-peach.vercel.app/",
      repository: "https://github.com/Ivriel/TYPEMASTER-KEYBOARD"
    },
    {
      title: "Code Community",
      description: "Simple website which made just for learning by doing. With the concept about programmer community.",
      tech: ["HTML", "CSS"],
      image: CODECOMMUNITY,
      link: "https://code-community-lime.vercel.app/",
      repository: "https://github.com/Ivriel/CODE-Community"
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = projectsFile.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(projectsFile.length / itemsPerPage);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen text-white pt-10 pb-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
      {/* Header & Navigation */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6"
      >
        <Link 
          to="/" 
          className="flex items-center gap-2 px-5 py-2.5 rounded-full glass-panel hover:bg-white/10 transition-colors group w-fit"
        >
          <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
          <span className="font-medium text-gray-300 group-hover:text-white transition-colors">Back to Home</span>
        </Link>
        
        <div className="inline-block border border-glass-border px-8 py-3 rounded-full glass-panel h-fit">
          <h1 className="font-semibold text-[24px] tracking-wide text-white">
            All Projects
          </h1>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div 
        key={currentPage} // Forces re-animation on page change
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {paginatedItems.map((project, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="glass-panel group overflow-hidden flex flex-col h-full rounded-[2rem]"
          >
            {/* Project Image Box */}
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-[2rem]">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out" 
              />
              
              {/* Quick Links Overlay */}
              <div className="absolute top-4 right-4 flex gap-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-[-10px] group-hover:translate-y-0">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black/60 backdrop-blur-md p-2.5 rounded-full hover:bg-white text-white hover:text-black transition-all"
                  title="View Live Site"
                >
                  <LinkIcon className="w-5 h-5" />
                </a>
                <a
                  href={project.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black/60 backdrop-blur-md p-2.5 rounded-full hover:bg-white text-white hover:text-black transition-all"
                  title="View Repository"
                >
                  <GithubIcon className="w-5 h-5 fill-current" />
                </a>
              </div>
            </div>

            {/* Project Info */}
            <div className="p-8 flex flex-col flex-grow relative bg-gradient-to-b from-transparent to-black/20">
              <h2 className="text-[24px] font-bold tracking-tight text-white mb-3 group-hover:text-gray-300 transition-colors">
                {project.title}
              </h2>
              <p className="text-gray-400 text-[15px] leading-relaxed mb-8 flex-grow">
                {project.description}
              </p>
              
              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, idx) => (
                  <div key={idx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-300 tracking-wide">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Pagination */}
      {totalPages > 1 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center items-center space-x-3 mt-20"
        >
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => {
                setCurrentPage(page);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`w-12 h-12 flex items-center justify-center rounded-full text-lg font-medium transition-all duration-300 ${
                currentPage === page 
                  ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]" 
                  : "glass-panel text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {page}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
}

export default Projects;
