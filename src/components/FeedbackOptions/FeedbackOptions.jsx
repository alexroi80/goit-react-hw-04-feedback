import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';
import { convertString } from '../helpers/convertString';

export const FeedbackOptions =({ options, onLeaveFeedback })=> {
    return (
      <div className={css.container}>
        {options.map(option => {
         const name = Object.keys(option).join('');
          return (
            <button
              className={css.button}
              type="button"
              onClick={onLeaveFeedback}
              name={name}
              key={name}
            >
              {convertString(name)}
            </button>
          );
        })}
      </div>
    );
}
FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,    
}