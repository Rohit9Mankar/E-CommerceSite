import React from "react";
import { Button } from "react-bootstrap";
import classes from './Contact.module.css';
const ContactForm = (props) => {


    const submitFormHandler =(event) => {
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
        <form onSubmit={submitFormHandler}>
            <div className={classes.form} >
                <div className={classes.contain}>
                    <label>Name</label>
                    <input type="text" id="userName" ></input>
                </div>

                <div className={classes.contain}>
                    <label> Email</label>
                    <input type="email" id="userEmail"></input>
                </div>

                <div className={classes.contain}>
                    <label>Phone no.</label>
                    <input type="tel" id="phone"></input>
                </div>

                <div className={classes.action}>
                  
                    <Button type="submit">Submit</Button>
                </div>
            </div>

        </form>
    )
}
export default ContactForm;