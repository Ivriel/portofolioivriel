import { forwardRef } from "react"
import { Link } from "react-router-dom"
import BGContact from "../assets/BG-Contact-Section.png"
import PhoneIcon from "./PhoneCall"
function Contact(props,ref4) {
  return (
    <div ref={ref4} className="text-white w-full flex justify-between items-center px-10 mt-32 h-[250px] bg-cover rounded-lg mb-10" id="contact" style={{backgroundImage:`url(${BGContact})`}}>
          <h1 className="text-black font-semibold text-[35px]">Interested working with Me?</h1>
          <div className="flex gap-4">
            <button className="border-2 border-black text-black px-4 py-2 rounded-lg font-semibold text-[16px] hover:bg-slate-200 hover:border-black">
              <Link to="/projects">
              See more project
              </Link>
            </button>
            <button className="border-2 border-black bg-black text-white px-4 py-2 rounded-lg font-semibold text-[16px] hover:bg-slate-600 hover:border-slate-600">
            <a href="https://wa.link/adbxh7" className="flex gap-2" target="_blank" rel="noopener noreferrer">
              <PhoneIcon />
              Contact Me
              </a>
            </button>
          </div>
    </div>
  )
}

export default forwardRef(Contact)