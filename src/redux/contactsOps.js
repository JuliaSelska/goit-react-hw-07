import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";
import { useDispatch } from 'react-redux';

axios.defaults.baseURL = "https://67f50c00913986b16fa2fb57.mockapi.io"

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const response = await axios.get("/contacts");
        return response.data;

    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
});



export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (text, thunkAPI) => {
        try {
            const response = await axios.post("/contacts", { text });
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactId, thunkAPI) => {
    try {
        const response = await axios.delete(`/contacts/${contactId}`);
        return response.data;

    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});
