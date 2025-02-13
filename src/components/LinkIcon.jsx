import PropTypes from "prop-types";
function LinkIcon({ className }) {
    return (
      <svg
        width="42"
        height="42"
        viewBox="0 0 39 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className={className} 
      >
        <g clipPath="url(#clip0_8_376)">    
          <path 
            d="M17.7789 13.4978L20.2741 11.2253C20.8203 10.7279 21.459 10.3429 22.1539 10.0924C22.8488 9.84189 23.5863 9.73069 24.3241 9.76517C25.062 9.79964 25.7859 9.97912 26.4544 10.2933C27.1229 10.6076 27.723 11.0504 28.2204 11.5965C28.7178 12.1427 29.1027 12.7814 29.3532 13.4763C29.6038 14.1712 29.715 14.9087 29.6805 15.6466C29.646 16.3844 29.4665 17.1083 29.1523 17.7768C28.8381 18.4453 28.3953 19.0454 27.8491 19.5428L25.3539 21.8153M20.3633 26.3603L17.8681 28.6328C17.3219 29.1302 16.6832 29.5152 15.9883 29.7657C15.2934 30.0162 14.5559 30.1274 13.818 30.0929C12.3278 30.0233 10.9263 29.3645 9.92178 28.2616C8.91727 27.1586 8.39206 25.7017 8.46169 24.2115C8.53132 22.7213 9.19008 21.3198 10.2931 20.3153L12.7883 18.0428M15.7441 22.9591L22.3981 16.899"
            stroke="currentColor" //  Tetap pakai currentColor agar diwarisi dari parent
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_8_376">
            <rect
              width="42"
              height="42"
              fill="white"
              transform="translate(0 19.038) rotate(-42.3249)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  }
  
 LinkIcon.propTypes = {
    className: PropTypes.string,
  };
  export default LinkIcon;
  