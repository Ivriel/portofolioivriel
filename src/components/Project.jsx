import { forwardRef } from "react";
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
      repository:"https://gideon-blog.vercel.app/"
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
        <a
          className="group flex items-center gap-2 cursor-pointer transition-colors"
          href="/projects"
        >
          <p className="text-[18px] text-white group-hover:text-gray-400 transition-colors">
            See More
          </p>
          <ArrowRight className="w-6 h-6 text-white group-hover:text-gray-400 transition-colors" />
        </a>
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
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 cursor-pointer hover:text-gray-600">
                    <LinkIcon className="group-hover:text-gray-600"/>
                    <span className="group-hover:text-gray-600">View Site</span>
                  </a>
              </div>
              <div className="flex gap-4 mt-4">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 cursor-pointer hover:text-gray-600">
                    <GithubIcon className="group-hover:text-gray-600"/>
                    <span className="group-hover:text-gray-600">View Repository</span>
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