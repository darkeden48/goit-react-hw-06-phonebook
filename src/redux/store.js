import { configureStore} from '@reduxjs/toolkit'
import {createReducer, createAction } from '@reduxjs/toolkit'
// import { clicksReducer} from './clickSlice';
import { persistStore, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,} from 'redux-persist';

  export const addContact = createAction('contacts/addContact');
  export const removeContact = createAction('contacts/removeContact');
  export const filterContact = createAction('filter/filterContact');
  
  const contactsList = {
  contacts:[ 
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },]}
  
  const filteredContacts = {
filter:'',
  }
  const clicksReducer = createReducer(contactsList,{
    [addContact]:(state,action)=>{
      state.contacts=[...state.contacts,action.payload]},

    [removeContact]:(state,action)=>{
      const filtered=state.contacts.filter(contact=>contact.id!==action.payload);
      state.contacts= filtered;
}
});

  const filterReducer = createReducer(filteredContacts,{
    [filterContact]:(state,action)=>{
      state.filter=action.payload;
    console.log(action.payload)
}
  });

console.log()
 


export const store = configureStore({
  reducer: {
      contacts:clicksReducer,
      filter:filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store)