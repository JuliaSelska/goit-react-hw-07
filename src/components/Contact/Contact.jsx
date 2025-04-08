import styles from './Contact.module.css';
import { BsFillTelephoneFill, BsPersonFill } from "react-icons/bs";
import { useDispatch } from 'react-redux';


const Contact = ({ contact }) => {
    const dispatch = useDispatch();

    const handleDeleteContact = () => {
        dispatch(deleteContact(contact.id));
    };


    return (
        <div className={styles.contactCard}>
            <div className={styles.contactInfo}>
                <p className={styles.contactItem}>
                    <BsPersonFill className={styles.icon} />
                    <p>{contact.name}</p>
                    <p>{contact.number}</p>
                </p>
                <p className={styles.contactItem}>
                    <BsFillTelephoneFill className={styles.icon} /> {number}
                </p>
            </div>
            <button onClick={handleDeleteContact} className={styles.contactButton}>Delete</button>
        </div>
    );
};

export default Contact;
