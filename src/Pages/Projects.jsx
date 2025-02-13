import ChipText from "../components/ChipText"
import FAWZIUIUX from "../assets/FAWZIUIUXPICTURE.png"
import GIDEONSBLOG from "../assets/GIDEONSBLOGPICTURE.png"
import CUACA from "../assets/CUACAPICTURE.png"
import AWSQUALIFIER from "../assets/AWSQUALIFIERPICTURE.png"
import AWSFINAL from "../assets/AWSFINALPICTURE.png"
import POLINEMA from "../assets/POLINEMAPICTURE.png"
import LIGASMK from "../assets/LIGASMKPICTURE.png"
import TYPEMASTER from "../assets/TYPEMASTERPICTURE.png"
import CODECOMMUNITY from "../assets/CODECOMMUNITYPICTURE.png"

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
      repository: ""
    },
    {
      title: "Typemaster",
      description: "This is a project description",
      tech: ["React", "Tailwind CSS"],
      image: TYPEMASTER,
      link: "https://example.com",
      repository: ""
    },
    {
      title: "Code Community",
      description: "This is a project description",
      tech: ["React", "Tailwind CSS"],
      image: CODECOMMUNITY,
      link: "https://example.com",
      repository: ""
    }
  ]
  return (
    <div className="text-white w-full mt-20 px-[50px] mb-10" id="projects">
       <h1 className="font-medium text-[28px] border-white border-[1px] px-8 py-2 rounded-[100px] w-fit">
            Projects
        </h1>
        {projectsFile.map((project,index) => (
          <div key={index} className="flex flex-col gap-10 items-center w-full mt-10">
          <img src={project.image} className="rounded-xl w-[500px]"/>
            <div>
              <h2 className="text-[24px] font-bold mt-4">{project.title}</h2>
              <p className="text-[18px] mt-4">{project.description}</p>
              <div className="flex gap-4 mt-4">
              {project.tech.map((tech,index) => (
                <ChipText key={index} text={tech}/>
              ))}
              </div>
            </div>
          </div>
          ))}
    </div>
  )
}

export default Projects