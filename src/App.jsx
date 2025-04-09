import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import styles from '../src/App.module.css'
import { fetchContacts } from './redux/contactsOps';
import { selectContacts, selectLoading, selectError, selectFilteredContacts } from './redux/contactsSlice';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      {loading && <p>Request in progres...</p>}
      {error && <p>Whooops, there was a problem, please reload this page!</p>}
      <ContactForm />
      <SearchBox />
      <ContactList />
      {/* <p>{contacts.length > 0 && JSON.stringify(contacts, null, 2)}</p> */}
    </div>
  );
};

export default App;


// const handleAddContact = (newContact) => {
//   dispatch(addContact(newContact));
// };

// const handleDeleteContact = (contactId) => {
//   dispatch(deleteContact(contactId));
// };

// const handleFilterChange = (value) => {
//   dispatch(changeFilter(value));
// };

// const filteredContacts = contacts.filter((contact) =>
//   contact.name.toLowerCase().includes(filter.toLowerCase())
// );
