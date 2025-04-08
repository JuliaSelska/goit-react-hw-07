import Contact from '../Contact/Contact'
import styles from './ContactList.module.css'
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';


const getVisibleContacts = (contacts, statusFilter) => {
    switch (statusFilter) {
        case 'active':

            return contacts.filter((task) => contact.completed)

        default:
            return contacts;
    }
};


const ContactList = () => {
    const contacts = useSelector(selectContacts);
    // const filter = useSelector(state => state.filters.name)?.toLowerCase() || "";
    const statusFilter = useSelector(selectStatusFilter);
    const visibleContacts = getVisibleContacts(contacts, statusFilter)

    // const filteredContacts = contacts.filter(contact =>
    //     contact.name.toLowerCase().includes(filter)
    // );

    return (
        <div className={styles.ContactList}>
            {visibleContacts.length > 0 ? (
                visibleContacts.map(({ contact }) => (
                    <Contact key={contact.id} contact={contact} />
                ))
            ) : (
                <p>No contacts found</p>
            )}
        </div>
    );
};


export default ContactList;