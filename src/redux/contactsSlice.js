import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
    },
    reducers: {
        addContact: (state, action) => {
            state.items.push(action.payload);
        },
        deleteContact: (state, action) => {
            state.items = state.items.filter(contact => contact.id !== action.payload);
        },

    }
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;


// export const addContact = createaction('addContact/contacts');

// export const deleteContact = createaction('deleteContact/contacts');

// const initialState = {
//     items: [],
// };

// export default function addContactSliceReducer(state = initialState, action) {

//     switch (action.type) {
//         case 'addContact/contacts':
//             return {
//                 ...state, value: state.value + action.payload,
//             };

//         case 'deleteContact/contacts':
//             return {
//                 ...state, value: state.value - action.payload,
//             };

//         default:
//             return state;
//     }
// }