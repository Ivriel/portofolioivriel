import { forwardRef,Link } from "react";
import ArrowRight from "./ArrowRight";
import Fawziuiux from "../assets/FAWZIUIUXPICTURE.png";
import Gideonsblog from "../assets/GIDEONSBLOGPICTURE.png";
import Cuaca from "../assets/CUACAPICTURE.png";
import GithubIcon from "./GithubIcon";
import LinkIcon from "./LinkIcon";
import ChipText from "./ChipText";

function Project(props, ref) {
  const projects = [
    {
      image: Fawziuiux,
      title: "Fawzuiux",
      description: "Fawziuiux is a website that provides UI/UX design services. This website is made using ReactJS and TailwindCSS.",
      tech: [
         "React JS",
         "Tailwind CSS"
      ],
      link:"https://fawziuiux.vercel.app/",
      repository:"https://github.com/Ivriel/FAWZIUIUX"
    },
    {
      image: Gideonsblog,
      title: "Gideonsblog",
      description: "Gideonsblog is a blog website that provides information about technology. This website is made using NextJS and TailwindCSS.",
      tech: [
        "React JS",
        "Tailwind CSS" 
      ],
      link:"https://gideon-blog.vercel.app/",
      repository:"https://github.com/Ivriel/Update-GIDEON-S-BLOG"
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
      link:"https://website-cuaca-five.vercel.app/",
      repository:"https://github.com/Ivriel/website-cuaca"
    }
  ]
  return (
    <div ref={ref} className="text-white w-full mt-40" id="project">
      <div className="flex justify-between w-full items-center">
        <h1 className="font-medium text-[28px] border border-white px-8 py-2 rounded-full">
          Projects
        </h1>
        <Link
          className="group flex items-center gap-2 cursor-pointer transition-colors"
          to="/projects"
          target="_blank"
        >
          <p className="text-[18px] text-white group-hover:text-gray-400 transition-colors">
            See More
          </p>
          <ArrowRight className="w-6 h-6 text-white group-hover:text-gray-400 transition-colors" />
        </Link>
      </div>
      <div>
        {projects.map((project,index) => (
          <div key={index} className={["flex gap-14 mt-20", index % 2 === 1 ? "flex-row-reverse" : "flex-row"].join(" ")}>
            <img src={project.image} className="rounded-xl w-[500px]"/>
              <div>
                <h1 className="text-[34px] font-semibold">{project.title}</h1>
                <p className="text-[18px] mt-4">{project.description}</p>
                <div className="flex gap-4 mt-4">
                {project.tech.map((tech,index) => (
                  <ChipText key={index} text={tech}/>
                ))}
                </div>
                <div className="flex gap-4 mt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 cursor-pointer text-white hover:text-gray-400 transition-colors duration-0"
                  >
                    <LinkIcon className="w-6 h-6 text-white group-hover:text-gray-400 transition-colors duration-0" />
                    <span className="group-hover:text-gray-400 transition-colors duration-0">
                      View Site
                    </span>
                  </a>
              </div>
              <div className="flex gap-4 mt-4">
                    <a 
                      href={project.repository} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="group flex items-center gap-2 cursor-pointer text-white hover:text-gray-600"
                    >
                      <GithubIcon className="text-white group-hover:text-gray-600 transition-colors duration-0" />
                      <span className="group-hover:text-gray-600 transition-colors duration-0">View Repository</span>
                    </a>
              </div>
          </div>
        </div>
        ))}
      </div>

    </div>
  );
}

export default forwardRef(Project);