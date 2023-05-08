import { PropTypes } from 'prop-types';
import css from './ContactItem.module.css';

const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <>
      <li className={css['contact-list-item']}>
        <span className={css['contact-name-text']}>{name}: </span>
        <span className={css['contact-number-text']}> {number}</span>
        <button
          className={css['delete-contact-btn']}
          type="button"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </li>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
