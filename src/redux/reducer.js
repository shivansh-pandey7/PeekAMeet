import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const initialState = {
    notesList : [],
    loading : false, 
    page : 1,
    hasMore: false,
};


const notesReducer = createSlice({

    name : "notes",
    initialState,
    reducers: {
        incPage(state, action){
            state.page = state.page + 1;
        },
        gettingData(state, action){
            if(action.payload.lenth > 0) hasMore = true;
            action.payload.map(item => state.notesList.push(item));
        },
        addingNote(state, action){
            state.notesList = [];
        },
        deletingNote(state, action){
            console.log('deleting');
            state.notesList = state.notesList.filter(item => item.id !== action.payload);
        },
        editingNote(state, action){
            state.notesList = state.notesList.map(item => item.id == action.payload.id ? action.payload : item);
        }

    }

});



//add notes

// edit note

// export const { loadNextBatch } = nextBatchReducer.actions;
export const selectNotesList = state => state.notesList;
export const reducer = notesReducer.reducer;
export const pageno = state => state.page;
export const hasMore = state => state.hasMore;
export const notesActions = notesReducer.actions;

