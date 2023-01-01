import React, { useState, useEffect } from "react";
import Header from "../Header.jsx";
import "./App.css";
import AddContact from "../addcontact/AddContact";
import ContactList from "../contactList/ContactList";
// A component is a peice of reuseable code
// useEffect = Whenever the value changes it help us  to render the compoenet again
function App() {
  // handlers are used to pass the data from child to parent. -
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    setContacts([...contacts, contact]);
  };
  useEffect(() => {
    const retriveContact = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContact) setContacts(retriveContact);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
