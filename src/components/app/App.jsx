import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import Header from "../Header.jsx";
import "./App.css";
import AddContact from "../addcontact/AddContact";
import ContactList from "../contactList/ContactList";
// A component is a peice of reuseable code
// useEffect = Whenever the value changes it help us  to render the compoenet again
function App() {
  // handlers are used to pass the data from child to parent. -
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );
  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };
  // useEffect for retriving data
  // useEffect(() => {
  //   const retriveContact = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (retriveContact) setContacts(retriveContact);
  // }, []);
  // useEffect for storing data
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler}/>
    </div>
  );
}

export default App;
