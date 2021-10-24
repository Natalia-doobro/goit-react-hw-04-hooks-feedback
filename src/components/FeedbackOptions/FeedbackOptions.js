import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={s.container}>
      {options.map((el) => (
        <button
          key={el.id}
          type="button"
          className={s.button}
          onClick={() => onLeaveFeedback(el)}
        >
          {el.name}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ),
};
export default FeedbackOptions;
