import PropTypes from "prop-types";

const Button = ({ backgroundColor }) => {
  return (
    <button
      className={`${
        backgroundColor ? `${backgroundColor}` : "bg-ash"
      } px-4 py-2 rounded font-montserrat`}
    >
      Get Started
    </button>
  );
};

Button.propTypes = {
  backgroundColor: PropTypes.string,
};

export default Button;

