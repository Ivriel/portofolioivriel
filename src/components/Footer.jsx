import PropTypes from "prop-types";

function Footer({scrollToSection, refs}) {
  return (
    <div className="text-white w-full flex flex-col items-center text-center mt-40">
        <h1 className="text-[64px] font-semibold w-[500px] leading-[80%] text-center">Be Kind and Do Great Things</h1>
     {/* Garis pemisah */}
     <hr className="w-full border-t-2 border-gray-500 my-10" />
     <ul className="flex gap-6">
     {['Home', 'About', 'Project', 'FAQ', 'Contact'].map((item, index) => (
            <li key={index} className="mt-2 lg:mt-0 py-2  list-none">
              <a
                onClick={() => scrollToSection(refs[`ref${index + 1}`])}
                className="block hover:text-gray-300 hover:cursor-pointer text-lg"
              >
                {item}
              </a>
            </li>
          ))}
          </ul>
          <p className="text-gray-600 mt-6"> © {new Date().getFullYear()} IVRIEL GUNAWAN. All rights reserved.
          </p>
    </div>
  )
}

Footer.propTypes = {
  scrollToSection: PropTypes.func.isRequired,
  refs: PropTypes.shape({
    ref1: PropTypes.object.isRequired,
    ref2: PropTypes.object.isRequired,
    ref3: PropTypes.object.isRequired,
    ref4: PropTypes.object.isRequired,
    ref5: PropTypes.object.isRequired
  }).isRequired
};
export default Footer