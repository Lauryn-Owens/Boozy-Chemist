import React, { useState } from 'react';
import style from '../PagesStyle/contactUsStyle.module.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: ''
    });

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the form submission, like sending the formData to a server
        // For now it logs the form data
        /*if this was connected to a database, the formData 
        state object would be pushed to the database*/
        console.log(formData);
    };

    return ( 
        <main className={style.contactUsContainer}>
            <h1 id={style.contactUsCaption}>Get In Touch</h1>
            <form onSubmit={onSubmit}>
                <label htmlFor="fullName">Full Name</label>
                <input 
                    onChange={onChangeHandler}
                    value={formData.fullName}
                    type="text"
                    name="fullName"
                    id={style.fullName}
                />
                <label htmlFor="email">Email</label>
                <input 
                    onChange={onChangeHandler}
                    value={formData.email}
                    type="email"
                    name="email"
                    id={style.email}
                />
                <label htmlFor="message">Message</label>
                <textarea 
                    onChange={onChangeHandler}
                    value={formData.message}
                    name="message"
                    id={style.message}
                    cols="30"
                    rows="10"
                ></textarea>
                <input type="submit" value="Submit" name="submit" id="submit" />
            </form>
        </main>
    );
};
 
export default ContactUs;
