// import { createSlice } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
// import { persistReducer } from 'redux-persist';
// import { createAction } from '@reduxjs/toolkit';

// export const clicksSlice = createSlice({
//     name: 'contacts',
//     initialState:{ contacts:[
//         { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//         { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//         { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//         { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//       ],
//       filter:"",
//     },
//     reducers: {
//       add:(state,action)=>{
//           state.contacts = [action.payload, ...state.contacts];
//         },
        
//       },
//       remove:(state,action)=>{
//         state.contacts = state.contacts.filter(contact=>contact.id!==action.payload);
//       },
//       addFilter:(state,action)=>{
//         state.contacts.filter(contact=>contact.name.toLowerCase().includes(state.filter))
//       }
  
// });


//   const persistConfig = {
//     key: 'clicks',
//     storage,
//     blacklist:['value']
//   }
  
//   export const clicksReducer = persistReducer(
//     persistConfig, 
//     clicksSlice.reducer
//     );

//   export const {add,remove,addFilter} = clicksSlice.actions;
//   export default clicksSlice.reducer;
//   export const changeFilter = createAction('contacts/changeFilter');

// export const getClicksValue = state => 
// state.clicks.value










