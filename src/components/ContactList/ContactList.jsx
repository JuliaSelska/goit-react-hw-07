import Contact from '../Contact/Contact'
import styles from './ContactList.module.css'
import { useSelector } from 'react-redux';
import { selectFilteredContacts, selectLoading } from '../../redux/contactsSlice';



const ContactList = () => {
    const contacts = useSelector(selectFilteredContacts);
    const loading = useSelector(selectLoading);

    return (
        <div className={styles.contactList}>
            {loading && <p>Loading contacts...</p>}
            {contacts.length > 0 ? (
                contacts.map((contact) => (
                    <Contact key={contact.id} contact={contact} />
                ))
            ) : (
                <p>No contacts found</p>
            )}
        </div>
    );
};

export default ContactList;