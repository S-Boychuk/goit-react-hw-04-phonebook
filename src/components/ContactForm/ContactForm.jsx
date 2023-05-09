import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInput = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        console.warn(`field type name - ${name} can't be managed`);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ id: nanoid(), name, number });

    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css['phonebook-form']} onSubmit={handleSubmit}>
      <div className={css.wrapper}>
        <label className={css['phonebook-label']}>
          <span className={css['phonebook-label-text']}>Name</span>
          <input
            className={css['phonebook-input']}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleInput}
          />
        </label>
        <label className={css['phonebook-label']}>
          <span className={css['phonebook-label-text']}>Number</span>
          <input
            className={css['phonebook-input']}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleInput}
          />
        </label>
      </div>
      <button className={css['phonebook-form-btn']} type="submit">
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
