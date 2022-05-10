import { configureStore} from '@reduxjs/toolkit'
import {createReducer, createAction } from '@reduxjs/toolkit'
import { clicksReducer} from './clickSlice';
import { persistStore, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,} from 'redux-persist'

export const increment =
createAction('myValue/increment');
export const decrement =
createAction('myValue/decrement');

const myReducer = createReducer(
  100, {
    [increment]:(state,action)=>
    state + action.payload,
    [decrement]:(state,action)=>
    state - action.payload,
  });

  export const store =
  configureStore({
    reducer:{
      myValue:myReducer
    }
  })





































//   export const store = configureStore({
//   reducer: {
//       clicks:clicksReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store)