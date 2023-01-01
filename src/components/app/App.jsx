import React from "react";
import Header from "../Header.jsx";
import "./App.css";
import AddContact from "../addcontact/AddContact";
import ContactList from "../contactList/ContactList";
// A component is a peice of reuseable code
function App() {
  const contacts = [
    {
      id: "1",
      name: "Rihan",
      email: "rihanbagwan5017@gmail.com",
    },
    {
      id: "2",
      name: "Saboor",
      email: "saboorbagwan5017@gmail.com",
    },
  ];
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts = {contacts}/>
    </div>
  );
}

export default App;
