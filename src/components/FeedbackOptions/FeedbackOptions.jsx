import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(option => {
      return (
        <button
          key={option}
          type="button"
          className={s.btn}
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
          {option}
        </button>
      );
    })}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
