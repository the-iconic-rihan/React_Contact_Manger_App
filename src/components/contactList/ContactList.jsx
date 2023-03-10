import React from "react";
import ContactCard from "../ContactCard/ContactCard";
const ContactList = (props) => {
  console.log(props.contacts);
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard 
      contact={contact}
       clickHandler={deleteContactHandler}
       key={contact.id} />
    );
  });
  return <div className="ui celled list">{renderContactList}</div>;
};

export default ContactList;
