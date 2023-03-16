import React from "react";
import { Button } from "react-bootstrap";
import classes from './Contact.module.css';
const ContactForm = (props) => {


    const submitFormHandler = (event) => {
        event.preventDefault();
        const userName = document.getElementById("userName").value;
        const userEmail = document.getElementById("userEmail").value;
        const userPhone = document.getElementById("phone").value;

        const newUser = {
            name: userName,
            email: userEmail,
            phone: userPhone

        }
        props.onAddContact(newUser);
    };



    return (
        <section className={classes.form_Contain}>
            <h2>Contact us</h2>
            <form  onSubmit={submitFormHandler}>
               
                    <div className={classes.contain}>
                        <label>Name</label>
                        <input type="text" id="userName" required></input>
                    </div>

                    <div className={classes.contain}>
                        <label> Email</label>
                        <input type="email" id="userEmail" required></input>
                    </div>

                    <div className={classes.contain}>
                        <label>Phone no.</label>
                        <input type="tel" id="phone" required></input>
                    </div>

                    <div className={classes.action}>

                        <Button type="submit">Submit</Button>
                    </div>
              

            </form>
        </section>

    )
}
export default ContactForm;