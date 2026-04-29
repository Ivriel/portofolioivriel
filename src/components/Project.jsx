import { forwardRef } from "react";
import ArrowRight from "./ArrowRight";
import Shankara from "../assets/projects/SHANKARAPICTURE.png";
import Gideonsblog from "../assets/projects/GIDEONSBLOGPICTURE.png";
import Cuaca from "../assets/projects/CUACAPICTURE.png";
import GithubIcon from "./GithubIcon";
import LinkIcon from "./LinkIcon";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Project(props, ref) {

  const projects = [
    {
      image: Shankara,
      title: "Shankara Paperstraw",
      description: "Shankara Paperstraw is a company that produces paper straw for pre rolled cones industry.",
      tech: [
        "Next JS",
        "Tailwind CSS"
      ],
      link: "https://www.shankarapaperstraw.com/",
      repository: "https://github.com/Ivriel/shankara-paperstraw"
    },
    {
      image: Gideonsblog,
      title: "Gideonsblog",
      description: "Gideonsblog is a blog website that provides information about technology. This website is made using NextJS and TailwindCSS.",
      tech: [
        "React JS",
        "Tailwind CSS"
      ],
      link: "https://gideon-blog.vercel.app/",
      repository: "https://github.com/Ivriel/Update-GIDEON-S-BLOG"
    },
    {
      image: Cuaca,
      title: "Cuaca",
      description: "Cuaca is a website that provides weather information. This website is made using ReactJS and TailwindCSS.",
      tech: [
        "HTML",
        "CSS",
        "AJAX"
      ],
      link: "https://website-cuaca-five.vercel.app/",
      repository: "https://github.com/Ivriel/website-cuaca"
    }
  ];

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
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <motion.div 
      ref={ref} 
      className="text-white w-full pt-24" 
      id="project"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="flex justify-between w-full items-center mb-16">
        <motion.div variants={itemVariants} className="inline-block border border-glass-border px-8 py-3 rounded-full glass-panel h-fit">
          <h1 className="font-semibold text-[24px] tracking-wide text-white">
            Featured Projects
          </h1>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <Link
            className="group flex items-center gap-2 cursor-pointer p-2 rounded-full hover:bg-white/5 transition-colors"
            to="/projects"
          >
            <p className="text-[16px] text-gray-300 group-hover:text-white transition-colors hidden md:block font-medium tracking-wide">
              View All
            </p>
            <div className="bg-white/10 p-2 rounded-full group-hover:bg-white transition-colors">
              <ArrowRight className="w-5 h-5 text-white group-hover:text-black transition-colors" />
            </div>
          </Link>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
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
      </div>
    </motion.div>
  );
}

export default forwardRef(Project);
