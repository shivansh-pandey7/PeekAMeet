import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { initialState } from "./reducer";


export const addNote = createAsyncThunk('notes/addNotes', async(obj, thunkAPI) => {
    const response = await axios.post('http://localhost:4000/posts', obj);
    return response.data;
});

const addNoteReducer = createSlice({

    name : "add",
    initialState,
    reducers: {

    },
    extraReducers : {
        [addNote.pending] : (state, action) => {
            state.loading = true;
            console.log('pending');
        },
        [addNote.fulfilled] : (state, action) => {
            state.loading = false;
            state.notesList = [];
            console.log(" doing WORK");
            state.page = 0;
        },
        [addNote.rejected] : (state, action) => {
            state.loading = true;
            console.log("failed");
        }
    }

});

export const addNotesReducer = addNoteReducer.reducer;
