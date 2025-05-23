import { forwardRef } from "react";
import ArrowRight from "./ArrowRight";
import Shankara from "../assets/projects/SHANKARAPICTURE.png";
import Gideonsblog from "../assets/projects/GIDEONSBLOGPICTURE.png";
import Cuaca from "../assets/projects/CUACAPICTURE.png";
import GithubIcon from "./GithubIcon";
import LinkIcon from "./LinkIcon";
import ChipText from "./ChipText";
import { Link } from "react-router-dom";

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
  ]

  return (
    <div ref={ref} className="text-white w-full mt-40" id="project">
      <div className="flex justify-between w-full items-center" data-aos="zoom-in" data-aos-duration="600">
        <h1 className="font-medium text-[28px] border border-white px-8 py-2 rounded-full">
          Projects
        </h1>
        <Link
          className="group flex items-center gap-2 cursor-pointer transition-colors"
          to="/projects"
          data-aos="zoom-out" 
          data-aos-duration="600"
          data-aos-delay="300"
        >
          <p className="text-[18px] text-white group-hover:text-gray-400 transition-colors hidden md:flex">
            See More
          </p>
          <ArrowRight className="w-6 h-6 text-white group-hover:text-gray-400 transition-colors" />
        </Link>
      </div>
      <div>
        {projects.map((project, index) => (
          <div key={index} className={["lg:flex gap-14 mt-20", index % 2 === 1 ? "flex-row-reverse" : "flex-row"].join(" ")}>
            <img src={project.image} className="rounded-xl lg:max-w-[500px]" data-aos="flip-up" data-aos-delay="600"/>
            <div>
              <h1 className="md:text-[34px] font-semibold lg:mt-0 mt-6 text-[22px]" data-aos="zoom-in-left" data-aos-delay="700">{project.title}</h1>
              <p className="md:text-[18px] mt-2 text-[15px]" data-aos="zoom-in-up" data-aos-delay="900">{project.description}</p>
              <div className="flex gap-4 mt-4" data-aos="fade-up" data-aos-delay="1000">
                {project.tech.map((tech, index) => (
                  <ChipText key={index} text={tech} />
                ))}
              </div>
              <div className="flex gap-4 mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="zoom-out"
                  data-aos-delay="1100"
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
                   data-aos="zoom-out"
                  data-aos-delay="1200"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 cursor-pointer transition-colors text-white hover:text-gray-600"
                >
                  <GithubIcon className="transition-colors group-hover:text-gray-600" />
                  <span className="transition-colors group-hover:text-gray-600">View Repository</span>
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
