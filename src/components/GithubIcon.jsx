import PropTypes from "prop-types";

function GithubIcon({ className = "" }) {
  return (
    <svg
      width="26"
      height="28"
      viewBox="0 0 26 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-colors duration-200 ${className}`}
    >
      <g clipPath="url(#clip0_4_70)">
        <path
          d="M9.75001 21.875C4.33334 23.5625 4.33334 19.0625 2.16667 18.5M17.3333 25.25V20.8962C17.374 20.3598 17.3042 19.8205 17.1286 19.3143C16.953 18.808 16.6757 18.3463 16.315 17.96C19.7167 17.5662 23.2917 16.2275 23.2917 10.085C23.2914 8.5143 22.7096 7.00384 21.6667 5.86624C22.1605 4.49206 22.1256 2.97313 21.5692 1.62499C21.5692 1.62499 20.2908 1.23124 17.3333 3.28999C14.8503 2.59117 12.233 2.59117 9.75001 3.28999C6.79251 1.23124 5.51417 1.62499 5.51417 1.62499C4.95775 2.97313 4.92283 4.49206 5.41667 5.86624C4.36598 7.01228 3.78357 8.53639 3.79167 10.1187C3.79167 16.2162 7.36667 17.555 10.7683 17.9937C10.4119 18.3762 10.137 18.8323 9.96159 19.3324C9.78614 19.8325 9.71405 20.3653 9.75001 20.8962V25.25"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4_70">
          <rect width="26" height="27" fill="white" transform="translate(0 0.5)" />
        </clipPath>
      </defs>
    </svg>
  );
}


GithubIcon.propTypes = {
  className: PropTypes.string,
};

export default GithubIcon;
