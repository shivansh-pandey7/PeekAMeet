import axios from "axios";
import { notesActions } from "./reducer";

export const getNextData = (pg) => {
    return async (dispatch) => {
        const fetchData = async (pg) => {
            const response = await axios.get(`http://localhost:4000/posts?_page=${pg}`);

            const data = response.data;
            console.log(data);
            return data;
        };

        try{
            const nextDataSet = await fetchData(pg);
            dispatch(notesActions.gettingData(nextDataSet));
            dispatch(notesActions.load(false));
        }catch (error) {
            alert('error');
        }
    };
};


export const addNote = (obj) => {
    return async (dispatch) => {
        const addData = async (object) => {
            const response = await axios.post('http://localhost:4000/posts', object);

            return response;
        }

        
        try {
            const data = await addData(obj);
            console.log(data);
            dispatch(notesActions.addingNote(data.data));
        }catch (error){
            alert("Unable TO add");
        }
    }
};

export const editNote = (obj) => {
    return async (dispatch) => {
        const editData = async (object) => {
            const response = await axios.put(`http://localhost:4000/posts/${object.id}`, object);
            return response;
        }

        try{
            const data = await editData(obj);
            obj.id = +obj.id;
            dispatch(notesActions.editingNote(obj));
        }catch(error){
            alert(error);
        }
    }
};

export const deleteNote = (id) => {
    return async (dispatch) => {
        const deleteData = async (num) => {
            const response = await axios.delete(`http://localhost:4000/posts/${num}`);

            return response;
        }

        try {
            await deleteData(id);
            dispatch(notesActions.deletingNote(id));
        }catch (error){
            alert(error);
        }
    }
}