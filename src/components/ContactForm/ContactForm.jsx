import { useId } from "react";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from './ContactForm.module.css'
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

const ContactSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Recuired"),
    number: Yup.string().matches(/^\d{3,15}$/, "Must be a valid number").required("Required")
});


const initialValues = {
    name: "",
    number: "",
};

const ContactForm = () => {
    const dispatch = useDispatch();
    const nameFieldId = useId();
    const numberFieldId = useId();

    const handleAddContacts = (values, { resetForm }) => {
        const newContact = {
            id: nanoid(),
            name: values.name,
            number: values.number,
        };
        dispatch(addContact(newContact));
        resetForm();
    };


    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleAddContacts}
            validationSchema={ContactSchema}>
            <Form className={styles.formContainer}>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor={nameFieldId}>Name</label>
                    <Field className={styles.input} type="text" name="name" id={nameFieldId} />
                    <ErrorMessage name="name" component="span" />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor={numberFieldId}>Number</label>
                    <Field className={styles.input} type="text" name="number" id={numberFieldId} />
                    <ErrorMessage name="number" component="span" />
                </div>
                <button className={styles.addButton} type="submit">Add contact</button>
            </Form>
        </Formik>
    );
};

export default ContactForm;