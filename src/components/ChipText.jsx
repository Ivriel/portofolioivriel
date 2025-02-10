import PropTypes from "prop-types"; 

function ChipText({ text, color = "border-gray-400 text-white" }) {
  return <div className={`px-4 py-1 border rounded-full text-sm ${color}`}>{text}</div>;
}


ChipText.propTypes = {
  text: PropTypes.string.isRequired, 
  color: PropTypes.string
};

export default ChipText;
