import { useState } from 'react';
import { useEffect } from 'react';
import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    } catch (error) {
      console.log(error);
    }
  }, [contacts]);

  const findContact = newContact =>
    contacts.find(
      existingContact =>
        existingContact.name.toLowerCase() === newContact.name.toLowerCase()
    );

  const addContact = newContact => {
    const checkedContact = findContact(newContact);
    if (checkedContact !== undefined) {
      return alert(
        `Sorry, ${newContact.name}'s contact has been already exist.`
      );
    }
    setContacts([...contacts, newContact]);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(({ id }) => id !== contactId)
    );
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const filterContacts = () => {
    if (filter !== '') {
      return contacts.filter(contact =>
        contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      );
    }
    return contacts;
  };

  const filteredContacts = filterContacts();

  return (
    <>
      <Section title="Phonebook">
        <ContactForm onSubmit={addContact} />
      </Section>
      <Section title="Contacts">
        <Filter filter={filter} onChange={changeFilter} />
        <ContactList contacts={filteredContacts} onDelete={deleteContact} />
      </Section>
    </>
  );
};

export default App;
