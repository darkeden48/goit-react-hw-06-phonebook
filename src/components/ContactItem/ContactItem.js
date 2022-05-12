// import { useDispatch, useSelector } from "react-redux";
// import {remove} from "../../redux/clickSlice";

// export default function ContactItem({id,name,number}){
//   const dispatch = useDispatch();
//   const deleteContact = (id) =>dispatch(remove(id)) 
  
//   return(
//     <li key={id}>
// <span>{name}:</span>
// <span> {number}</span>
// <button type="button" id={id} onClick={() => deleteContact(id)}>
//   Delete
// </button>
// </li>
//     )
// }