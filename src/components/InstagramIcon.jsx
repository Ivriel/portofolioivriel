import PropTypes from "prop-types";

function InstagramIcon({ className }) {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 27 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} transition-colors duration-200`}
    >
      <path
        d="M19.6875 7.8125H19.6988M7.875 2.75H19.125C22.2316 2.75 24.75 5.2684 24.75 8.375V19.625C24.75 22.7316 22.2316 25.25 19.125 25.25H7.875C4.7684 25.25 2.25 22.7316 2.25 19.625V8.375C2.25 5.2684 4.7684 2.75 7.875 2.75ZM18 13.2912C18.1388 14.2275 17.9789 15.1837 17.543 16.0239C17.107 16.864 16.4173 17.5453 15.5718 17.9709C14.7264 18.3964 13.7683 18.5445 12.8338 18.3942C11.8993 18.2438 11.036 17.8026 10.3667 17.1333C9.69741 16.464 9.2562 15.6007 9.10583 14.6662C8.95545 13.7317 9.10357 12.7736 9.52912 11.9282C9.95466 11.0827 10.636 10.393 11.4761 9.95702C12.3163 9.52108 13.2725 9.36116 14.2088 9.5C15.1638 9.64162 16.048 10.0866 16.7307 10.7693C17.4134 11.452 17.8584 12.3362 18 13.2912Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// **Menambahkan Props Validation**
InstagramIcon.propTypes = {
  className: PropTypes.string,
};

export default InstagramIcon;
