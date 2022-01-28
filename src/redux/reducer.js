import { createSlice } from "@reduxjs/toolkit";



export const initialState = {
    notesList : [],
    loading : true, 
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
            if(action.payload.length > 0) state.hasMore = true;
            else state.hasMore = false;
            
            let s = new Set();
            action.payload.map(item => state.notesList.push(item));
            state.notesList.map(item => s.add(JSON.stringify(item)));
            state.notesList = [];
            let arr = Array.from(s);
            arr.map(item => state.notesList.push(JSON.parse(item)));
            console.log(state.notesList);

        },
        addingNote(state, action){
            state.notesList = [];
            state.loading = true;
            state.hasMore = true;
            state.page = 1;
        },
        deletingNote(state, action){
            console.log('deleting');
            state.notesList = state.notesList.filter(item => item.id !== action.payload);
        },
        editingNote(state, action){
            state.notesList = state.notesList.map(item => item.id === action.payload.id ? action.payload : item);   
            // state.notesList = [];
            // state.page = 1;
        },
        load(state, action){
            state.loading = action.payload;
        },

    }

});



//add notes

// edit note

// export const { loadNextBatch } = nextBatchReducer.actions;
export const selectNotesList = state => state.notesList;
export const reducer = notesReducer.reducer;
export const pageno = state => state.page;
export const hasMore = state => state.hasMore;
export const loading = state => state.loading;
export const notesActions = notesReducer.actions;

