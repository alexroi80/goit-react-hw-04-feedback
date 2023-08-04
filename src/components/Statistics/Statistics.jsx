import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { Notification } from '../Notification/Notification';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return total !== 0 ? (
    <ul className={css.statList}>
      <li className={css.item} key={'good'}>
        <span className={css.key}>Good: </span>
        <span className={css.value}>{good}</span>
      </li>
      <li className={css.item} key={'neutral'}>
        <span className={css.key}>Neutral: </span>
        <span className={css.value}>{neutral}</span>
      </li>
      <li className={css.item} key={'bad'}>
        <span className={css.key}>Bad: </span>
        <span className={css.value}>{bad}</span>
      </li>
      <li className={css.item} key={'total'}>
        <span className={css.key}>Total: </span>
        <span className={css.value}>{total}</span>
      </li>
      <li className={css.item} key={'percentage'}>
        <span className={css.key}>Positive feedback: </span>
        <span className={css.value}>{positivePercentage}%</span>
      </li>
    </ul>
  ) : (
    <Notification message="There is no feedback"></Notification>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
