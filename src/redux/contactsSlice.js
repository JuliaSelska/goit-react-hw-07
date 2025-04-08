import { createSlice } from "@reduxjs/toolkit";
import { deleteContact, fetchContacts } from "./contactsOps";
import { createSelector } from "@reduxjs/toolkit";


export const selectFilteredContacts = createSelector(
    [selectTasks, selectTextFilter],
    (tasks, textFilter) => {
        console.log('selectFilteredContacts', Date.now());
        return tasks.filter((task) =>
            task.text.toLowerCase().includes(textFilter.toLowerCase())
        );
    }
);



const handlePending = state => { state.loading = true; };

const handleRejected = (state, action) => {
    state.loading = false;
    state.error = action.payload;
};

export const selectFilteredContacts = createSelector([selectContacts], (contact) => {
    console.log('selectContacts', Date.now());
    return contacts.length;
});

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        loading: false,
        error: null
    },
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.pending, handlePending)
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(fetchContacts.rejected, handleRejected)
            .addCase(addContacts.pending, handlePending)
            .addCase(addContacts.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.items.push(action.payload)
            })
            .addCase(addContacts.rejected, handleRejected)
            .addCase(deleteContact.pending, handlePending)
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.loading = false;
                state.erroe = null;
                state.items = state.items.filter((contact) => contact.id !== action.payload.id);
            })
            .addCase(deleteContact.rejected, handleRejected)

    },
});

export default contactsSlice.reducer;

export const selectContacts = (state) => state.contacts.items;

export const selectLoading = (state) => state.contacts.loading;

export const selectError = (state) => state.contacts.error;