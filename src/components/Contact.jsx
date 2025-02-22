import { forwardRef } from "react"
import { Link } from "react-router-dom"
import BGContact from "../assets/BG-Contact-Section.png"
import PhoneIcon from "./PhoneCall"

function Contact(props,ref4) {
  return (
    <div ref={ref4} className="text-white w-full flex justify-between items-center px-5 md:px-10 mt-32 lg:h-[250px] h-[160px] bg-cover rounded-lg mb-10" id="contact" style={{backgroundImage:`url(${BGContact})`}} data-aos="zoom-in">
          <h1 className="text-black font-semibold lg:text-[35px] md:text-[20px]" data-aos="zoom-out" data-aos-delay="300">Interested working with Me?</h1>
          <div className="flex gap-2 md:gap-4 flex-col md:flex-row">
            <button className="border-2 border-black text-black px-4 py-2 rounded-lg font-semibold text-[10px] lg:text-[18px] hover:bg-slate-200 hover:border-black" data-aos="fade-up" data-aos-delay="600">
              <Link to="/projects">
              See more project
              </Link>
            </button>
            <button className="border-2 border-black bg-black text-white px-4 py-2 rounded-lg font-semibold text-[10px] lg:text-[18px] hover:bg-[#000000B3] hover:border-transparent" data-aos="fade-down" data-aos-delay="900">
            <a href="https://wa.link/adbxh7" className="flex items-center gap-2" target="_blank" rel="noopener noreferrer">
              <PhoneIcon />
              Contact Me
              </a>
            </button>
          </div>
    </div>
  )
}

export default forwardRef(Contact)