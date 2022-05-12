import propTypes from "prop-types";
import React from "react";
import f from "./Filter.module.css";
import { useSelector, useDispatch } from "react-redux";
import {addContact, removeContact,filterContact} from "../../redux/store"

function Filter() {
  const filtered = useSelector(state=>state.filter);
  const dispatch = useDispatch();
  
  const handleFilterChange = (e) => {
    
    dispatch(filterContact( e.currentTarget.value));
    console.log(filtered.filter)
  };
  
  return (
    <label className={f.filter_title}>
      Filter by name
      <input type="text" value={filtered.filter} onChange={handleFilterChange} />
    </label>
  );
}
Filter.propTypes = {
  value: propTypes.string,
  onChange: propTypes.func,
};
export default Filter;

