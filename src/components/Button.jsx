import PropTypes from "prop-types";

const Button = ({ backgroundColor, width }) => {
  return (
    <button
      className={`${
        backgroundColor ? `${backgroundColor} ` : "bg-ash"
      } w-[${width}] px-4 py-2 rounded font-montserrat`}
    >
      Get Started
    </button>
  );
};

Button.propTypes = {
  backgroundColor: PropTypes.string,
    width: PropTypes.string,
};

export default Button;

