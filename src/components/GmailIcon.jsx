import PropTypes from "prop-types";
function GmailIcon({ className = "" }) {
    return (
      <svg
        width="20"
        height="21"
        className={`${className} transition-colors duration-100`}
        viewBox="0 0 27 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.75 7.25C24.75 6.0125 23.7375 5 22.5 5H4.5C3.2625 5 2.25 6.0125 2.25 7.25M24.75 7.25V20.75C24.75 21.9875 23.7375 23 22.5 23H4.5C3.2625 23 2.25 21.9875 2.25 20.75V7.25M24.75 7.25L13.5 15.125L2.25 7.25"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  
  GmailIcon.propTypes = {
    className: PropTypes.string,
  };
export default GmailIcon;