import { configureStore} from '@reduxjs/toolkit'
import { persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { clicksReducer,filterReducer } from './reducers';
import { FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,} from 'redux-persist';

  const persistConfig = {
    key: "root",
    storage,
  };

const PersistedContacts=persistReducer(
  persistConfig,
  clicksReducer
)

export const store = configureStore({
  reducer: {
      contacts:PersistedContacts,
      filter:filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    devTools: process.env.NODE_ENV === 'development',
  });

export const persistor = persistStore(store)