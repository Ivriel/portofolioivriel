import PropTypes from "prop-types";

function ArrowRight({ className = "" }) {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10.5 25.5L25.5 10.5M25.5 10.5H10.5M25.5 10.5V25.5"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

ArrowRight.propTypes = {
  className: PropTypes.string,
};

export default ArrowRight;
