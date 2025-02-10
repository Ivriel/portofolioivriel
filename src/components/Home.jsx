import { forwardRef } from "react";
import InstagramIcon from "./InstagramIcon";
import GmailIcon from "./GmailIcon";
import GithubIcon from "./GithubIcon";
import IconButton from "../assets/File text.svg";
import ProfileImage from "../assets/Profile Image Container.png";

function Home(props, ref) {
  return (
    <div ref={ref} className="flex items-center justify-between text-white mt-[90px] w-full" id="home">
      <div className="w-[718px]">
        <h4 className="text-[#FFFFFFCC]" 
        data-aos="fade-right"
        data-aos-duration="500"
        >HELLO, IM</h4>
        <h1 className="font-bold text-[60px] mt-6"
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-delay="800"
        >IVRIEL DEI GRATIA GUNAWAN</h1>
        <h1 className="text-[#FFFFFFCC] text-[25px] mt-8"
         data-aos="fade-right"
         data-aos-duration="500"
         data-aos-delay="1200"
        >FRONTEND DEVELOPER</h1>
        <div className="flex gap-4 mt-10">
          <a
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="1600"
            href="https://www.instagram.com/wynsc_u13/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 group cursor-pointer hover:text-gray-600"
          >
            <InstagramIcon className="group-hover:text-gray-600" />
            <span className="group-hover:text-gray-600">Instagram</span>
          </a>
          <a
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay="2100"
          href="https://github.com/Ivriel"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 group cursor-pointer hover:text-gray-600"
          >
          <GithubIcon className="group-hover:stroke-gray-600" />
          <span className="group-hover:text-gray-600">Github</span>
        </a>
          <a
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay="2500"
          href="https://mail.google.com/mail/?view=cm&to=gunawanivriel@gmail.com"
          target="_blank"
          className="flex items-center space-x-2 group cursor-pointer text-white hover:text-gray-600 transition-colors duration-100"
          >
            <GmailIcon className="group-hover:text-gray-600" />
            <span className="group-hover:text-gray-600">Gmail</span>
          </a>
        </div>

        <a
          data-aos="zoom-out"
          data-aos-duration="500"
          data-aos-delay="2800"
          className="flex items-center justify-center bg-white text-black gap-2 px-6 py-[11px] rounded-md hover:bg-gray-300 text-sm font-medium w-fit mt-8"
          title="Download CV"
          href="/CV-Ivriel.pdf"
          download="CV_Ivriel.pdf"
        >
          <img src={IconButton} alt="Download Icon" className="w-4 h-4" />
          Download CV
        </a>
      </div>
      <div className="mb-10"
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      data-aos-delay="3000"
      >
      <img src={ProfileImage} alt="Profile Image" className=" h-[500px]"/>
      </div>
    </div>
  );
}

export default forwardRef(Home);
