import { forwardRef } from "react";
import InstagramIcon from "./InstagramIcon";
import GmailIcon from "./GmailIcon";
import GithubIcon from "./GithubIcon";
import IconButton from "../assets/File text.svg";
import ProfileImage from "../assets/Profile Image Container.png";

function Home(props, ref) {
  return (
    <div ref={ref} className="flex flex-col lg:flex-row items-center justify-between text-white mt-[90px] w-full" id="home">
      {/* Teks dan Informasi Profil */}
      <div className="w-full lg:w-[718px] px-6 lg:px-0">
        <h4 className="text-[#FFFFFFCC]" data-aos="fade-right" data-aos-duration="200">HELLO, IM</h4>
        <h1 className="font-bold text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] mt-6" data-aos="fade-right" data-aos-duration="200" data-aos-delay="800">
          IVRIEL DEI GRATIA GUNAWAN
        </h1>
        <h1 className="text-[#FFFFFFCC] text-[18px] sm:text-[20px] md:text-[25px] lg:text-[25px] mt-8" data-aos="fade-right" data-aos-duration="200" data-aos-delay="1200">
          FRONTEND DEVELOPER
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <a data-aos="zoom-in" data-aos-duration="200" data-aos-delay="1600" href="https://www.instagram.com/wynsc_u13/" target="_blank" rel="noopener noreferrer" className="group w-fit transition-colors flex items-center space-x-2 cursor-pointer text-white hover:text-gray-600">
            <InstagramIcon className="transition-colors" />
            <span className="transition-colors">Instagram</span>
          </a>
          <a data-aos="zoom-in" data-aos-duration="200" data-aos-delay="2100" href="https://github.com/Ivriel" target="_blank" rel="noopener noreferrer" className="flex w-fit items-center space-x-2 group cursor-pointer hover:text-gray-600 transition-colors duration-200">
            <GithubIcon className="group-hover:stroke-gray-600 transition-colors duration-200" />
            <span className="group-hover:text-gray-600 transition-colors duration-200">Github</span>
          </a>
          <a data-aos="zoom-in" data-aos-duration="200" data-aos-delay="2500" href="https://mail.google.com/mail/?view=cm&to=gunawanivriel@gmail.com" target="_blank" rel="noopener noreferrer" className="flex w-fit items-center space-x-2 group cursor-pointer text-white hover:text-gray-600 transition-colors duration-100">
            <GmailIcon className="transition-colors" />
            <span className="transition-colors">Gmail</span>
          </a>
        </div>
        <a data-aos="zoom-out" data-aos-duration="200" data-aos-delay="2800" className="flex items-center justify-center bg-white text-black gap-2 px-6 py-[11px] rounded-md hover:bg-gray-300 text-sm font-medium w-fit mt-8" title="Download CV" href="/CV-Ivriel.pdf" download="CV_Ivriel.pdf">
          <img src={IconButton} alt="Download Icon" className="w-4 h-4" />
          Download CV
        </a>
      </div>

      {/* Gambar Profil */}
      <div className="mb-10 mt-10 lg:mt-0" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="3000">
        <img src={ProfileImage} alt="Profile Image" className="h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] w-full object-cover"/>
      </div>
    </div>
  );
}

export default forwardRef(Home);
