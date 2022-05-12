import propTypes from "prop-types";
import c from "./Contacts.module.css";
import { useSelector, useDispatch } from "react-redux";
import {addContact, removeContact,filterContact} from "../../redux/store"

function Contacts() {
  const contacts = useSelector(state=>state.contacts.contacts);
  const filtered = useSelector(state=>state.filter);
  const dispatch = useDispatch();
console.log(contacts)
console.log(filtered)
  const filteredContacts = contacts.filter(contact =>
    contact.name.includes(filtered.filter));
     
   
  const deleteContact = (id) => {
    dispatch(removeContact((id))); 
  };
  return (
    <ul className={c.contacts_list}>
      {contacts.length > 0 &&filteredContacts.map(({ name, number, id }) => (
        <li key={id}>
          <span>{name}:</span>
          <span> {number}</span>
          <button type="button" id={id} onClick={() => deleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
Contacts.propTypes = {
  contacts: propTypes.array,
  deleteContact: propTypes.func,
};
export default Contacts;