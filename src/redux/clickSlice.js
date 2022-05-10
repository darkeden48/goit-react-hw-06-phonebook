import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';











// export const clicksSlice = createSlice({
//     name: 'clicks',
//     initialState: {value:10, a:1},
//     reducers: {
//       update(state,action){
//        state.value += action.payload;
//       },
//     },
//   });

//   const persistConfig = {
//     key: 'clicks',
//     storage,
//     whitelist:['value']
//   }
  
//   export const clicksReducer = persistReducer(
//     persistConfig, 
//     clicksSlice.reducer
//     );

//   export const {update} = clicksSlice.actions

// // --Selectors
// export const getClicksValue = state => 
// state.clicks.value
