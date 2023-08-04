import PropTypes from 'prop-types';
import css from './Section.module.css';
import { Fragment } from 'react';

export const Section = ({ title, children }) => {
  return (
    <Fragment>
      <h2 className={css.title}>{title}</h2>
      {children}
    </Fragment>
  );
};
Section.propTypes = {
  title: PropTypes.string,
};
