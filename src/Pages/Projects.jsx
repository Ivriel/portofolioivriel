import ChipText from "../components/ChipText"
import FAWZIUIUX from "../assets/projects/FAWZIUIUXPICTURE.png"
import GIDEONSBLOG from "../assets/projects/GIDEONSBLOGPICTURE.png"
import CUACA from "../assets/projects/CUACAPICTURE.png"
import AWSQUALIFIER from "../assets/projects/AWSQUALIFIERPICTURE.png"
import AWSFINAL from "../assets/projects/AWSFINALPICTURE.png"
import POLINEMA from "../assets/projects/POLINEMAPICTURE.png"
import LIGASMK from "../assets/projects/LIGASMKPICTURE.png"
import TYPEMASTER from "../assets/projects/TYPEMASTERPICTURE.png"
import CODECOMMUNITY from "../assets/projects/CODECOMMUNITYPICTURE.png"
import { useState } from "react";
import { motion } from "framer-motion";

function Projects() {
  const projectsFile = [
    {
      title: "FAWIUIUX",
      description: "This is a project description",
      tech: ["React", "Tailwind CSS"],
      image: FAWZIUIUX,
      link: "https://portfolioivriel.vercel.app/",
      repository: "https://github.com/Ivriel/FAWZIUIUX"
    },
    {
      title: "Gideon's Blog",
      description: "This is a project description",
      tech: ["React", "Tailwind CSS"],
      image: GIDEONSBLOG,
      link: "https://gideon-blog.vercel.app/",
      repository: "https://github.com/Ivriel/Update-GIDEON-S-BLOG"
    },
    {
      title: "Cuaca",
      description: "This is a project description",
      tech: ["React", "Tailwind CSS"],
      image: CUACA,
      link: "https://website-cuaca-five.vercel.app/",
      repository: "https://github.com/Ivriel/website-cuaca"
    },
    {
      title: "AWS Qualifier",
      description: "This is a project description",
      tech: ["React", "Tailwind CSS"],
      image: AWSQUALIFIER,
      link: "https://aws-qualifier.vercel.app/",
      repository: "https://github.com/Ivriel/AWS-QUALIFIER"
    },
    {
      title: "AWS Final",
      description: "This is a project description",
      tech: ["React", "Tailwind CSS"],
      image: AWSFINAL,
      link: "https://aws-final.vercel.app/",
      repository: "https://github.com/Ivriel/AWS-FINAL"
    },
    {
      title: "Polinema Webtech",
      description: "This is a project description",
      tech: ["React", "Tailwind CSS"],
      image: POLINEMA,
      link: "https://polinema-webtech.vercel.app/",
      repository: "https://github.com/Ivriel/POLINEMA-WEBTECH"
    },
    {
      title: "Liga SMK",
      description: "This is a project description",
      tech: ["React", "Tailwind CSS"],
      image: LIGASMK,
      link: "https://liga-smk.vercel.app/",
      repository: "https://liga-smk.vercel.app/"
    },
    {
      title: "Typemaster",
      description: "This is a project description",
      tech: ["React", "Tailwind CSS"],
      image: TYPEMASTER,
      link: "https://liga-smk.vercel.app/",
      repository: "https://liga-smk.vercel.app/"
    },
    {
      title: "Code Community",
      description: "This is a project description",
      tech: ["React", "Tailwind CSS"],
      image: CODECOMMUNITY,
      link: "https://example.com",
      repository: "https://liga-smk.vercel.app/"
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = currentPage === 1 ? 6 : 3;
  const startIndex = currentPage === 1 ? 0 : 6; // Page 1 starts at index 0, Page 2 starts at index 6
  const paginatedItems = projectsFile.slice(startIndex, startIndex +itemsPerPage);

  return (
    <div className="text-white w-full mt-20 px-[50px] mb-10" id="projects">
  <h1 className="font-medium text-[28px] border-white border-[1px] px-8 py-2 rounded-[100px] w-fit">Projects</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {paginatedItems.map((project, index) => (
      <div key={index} className="w-full mt-10">
        <div className="relative group cursor-pointer">
          <img src={project.image} className="rounded-xl object-cover w-full h-[250px] transition-all duration-300 group-hover:opacity-30" />
          <div className="w-full flex flex-col sm:flex-row justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="border-2 w-fit px-4 py-2 mb-4 sm:mb-0 sm:mr-4 rounded-[100px] transition-transform transform hover:scale-105 hover:bg-white hover:text-black">
              View Site
            </a>
            <a href={project.repository} target="_blank" rel="noopener noreferrer" className="border-2 w-fit px-4 py-2 rounded-[100px] transition-transform transform hover:scale-105 hover:bg-white hover:text-black">
              View Repository
            </a>
          </div>
        </div>
        <h2 className="text-[24px] font-bold mt-4">{project.title}</h2>
        <p className="text-[18px] mt-4">{project.description}</p>
        <div className="flex gap-4 mt-4">
          {project.tech.map((tech, index) => (<ChipText key={index} text={tech} />))}
        </div>
      </div>
    ))}
  </div>
  <div className="flex justify-center space-x-4 mt-20">
    {[1, 2].map((page) => (
      <motion.button
        key={page}
        onClick={() => setCurrentPage(page)}
        disabled={currentPage === page}
        className={`px-4 py-1 border rounded-lg text-lg font-semibold transition-transform transform ${currentPage === page ? "bg-[#ffffff] text-black cursor-not-allowed" : "bg-[#ffffffBA] text-black hover:bg-white active:scale-90"}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {page}
      </motion.button>
    ))}
  </div>
</div>
  
  );
}

export default Projects;
