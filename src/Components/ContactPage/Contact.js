import React from "react";
import ContactForm from "./ContactForm";

const Contact=()=>{
 async function addContactHandler(contact){
        const response = await fetch('https://reacthttpsrequests-default-rtdb.firebaseio.com/contacts.json', {
            method: 'POST',
            body: JSON.stringify(contact),
            headers: {
              'Content-Type': 'application/json'
            }
          });
          const dat = await response.json();
          console.log(dat);
    }

    return(
        <ContactForm onAddContact={addContactHandler}/>
    )
}
export default Contact;