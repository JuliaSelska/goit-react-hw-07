import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsPersistConfig = {
    key: 'contacts',
    storage,
    whitelist: ['items'],
};

const filterPersistConfig = {
    key: 'filters',
    storage,
    whitelist: ['name'],
};


const store = configureStore({
    reducer: {
        contacts: persistReducer(contactsPersistConfig, contactsReducer),
        filters: persistReducer(filterPersistConfig, filtersReducer),
    },

    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

const persistor = persistStore(store);

export { store, persistor };


// const initialState = {
//     contacts: {
//         items: []
//     },
//     filters: {
//         name: ""
//     }
// };


// const rootReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'addContact/contacts':
//             return {
//                 ...state,
//                 contacts: {
//                     item: state.contacts.items + action.payload,
//                 }
//             };

//         case 'deleteContact/contacts':
//             return {
//                 ...state,
//                 contacts: {
//                     items: state.contacts.items - action.payload,
//                 },
//             };

//         case 'filterContact/filters':
//             return {
//                 ...state,
//                 filters: {
//                     name: [...state.filters.name, action.payload]
//                 },
//             };

//         default:
//             break;
//     }
//     return state
// };

