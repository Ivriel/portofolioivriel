import PropTypes from "prop-types";

function Footer({ scrollToSection, refs }) {
    return (
        <div className="text-white w-full flex flex-col items-center text-center mt-40">
            <h1 className="md:text-[64px] text-[30px] font-semibold md:w-[500px] sm:w-full leading-[80%] text-center" data-aos="zoom-in">
                Be Kind and Do <br />Great Things
                </h1>
            <hr className="w-full border-t-2 border-gray-500 my-10" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="500" data-aos-easing="ease-in"/>
            <ul className="flex gap-3 md:gap-6 justify-center w-full">
                {['Home', 'About', 'Project', 'FAQ', 'Contact'].map((item, index) => (
                    <li key={index} className="mt-2 lg:mt-0 py-2  list-none" data-aos="fade-up" data-aos-delay="400">
                        <a
                            onClick={() => scrollToSection(refs[`ref${index + 1}`])}
                            className="block hover:text-gray-300 hover:cursor-pointer text-lg"
                        >
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
            <p className="text-gray-600 mt-24">
             © {new Date().getFullYear()} IVRIEL GUNAWAN. All rights reserved.
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