import styles from './Contact.module.css';
import { BsFillTelephoneFill, BsPersonFill } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const Contact = ({ id, name, number }) => {
    const dispatch = useDispatch();

    const handleDeleteContact = () => {
        dispatch(deleteContact(id));
    };


    return (
        <div className={styles.contactCard}>
            <div className={styles.contactInfo}>
                <p className={styles.contactItem}>
                    <BsPersonFill className={styles.icon} /> {name}
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
