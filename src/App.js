import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Form from "./components/Form/Form";
import Contacts from "./components/Contacts/Contacts";
import Filter from "./components/Filter/Filter";

export default function App() {


  // const formSubmit = (name, number) => {
  //   const contact = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };
  //   if (contacts.some((el) => el.name === contact.name)) {
  //     alert(contact.name + " is already in contacts");
  //     return;
  //   }
  //   // setContacts((prevContacts) => [...prevContacts, contact]);
  // };

  // const handleFilterChange = (e) => {
  //   setFilter(e.currentTarget.value);
  // };

  // const deleteContact = (id) => {
  //   // setContacts(contacts.filter((contact) => contact.id !== id));
  // };

  // const { contacts, filter } = this.state;
  // const filteredContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filter)
  // );

  // useEffect(() => {
  //   const data = window.localStorage.getItem("contacts");
  //   const localData = JSON.parse(data);
  //   console.log(localData);
  //   setContacts(localData);
  // }, []);

  // useEffect(() => {
  //   window.localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </div>
  );
}