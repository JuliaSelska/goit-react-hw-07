import Contact from '../Contact/Contact'
import styles from './ContactList.module.css'
import { useSelector } from 'react-redux';

const ContactList = () => {
    const contacts = useSelector((state) => state.contacts.items);
    const filter = useSelector(state => state.filters.name)?.toLowerCase() || "";


    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter)
    );

    return (
        <div className={styles.ContactList}>
            {filteredContacts.length > 0 ? (
                filteredContacts.map(({ id, name, number }) => (
                    <Contact key={id} id={id} name={name} number={number} />
                ))
            ) : (
                <p>No contacts found</p>
            )}
        </div>
    );
};


export default ContactList;