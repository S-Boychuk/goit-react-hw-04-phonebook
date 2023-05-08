import css from './Section.module.css';
import { PropTypes } from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <section className={css.section}>
      <h2 className={css['section-title']}>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
