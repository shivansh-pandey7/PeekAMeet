import React from 'react';
import './AddNotes.css';
import SignedInHeader from '../components/SignedInHeader';
import Footer from '../components/Footer';
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addNote } from '../redux/notesActions';

const AddNote = () => {

    const history = useHistory();
    const dispatch = useDispatch();


    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [note, setNote] = useState('');

    const cancelBtn = () => {
        history.push('/display-notes')
    }

    const saveBtn = () => {

        const obj = {note:note, date:date, time:time};

        dispatch(addNote(obj));

        history.push('/display-notes');
    }


  return <div>
      <SignedInHeader/>
      <div className='add-notes'>
            <div className="add-note-rectangle">
                <h3>Add Note</h3>
            </div>

            <div>
                <p>User Name</p>

                <div className='flex'>
                    <div>
                        <p className='data-label'>Follow Up Date</p>
                        <input type='date' onChange={e => setDate(e.target.value)} />
                    </div>
                    <div className='margin-left'>
                        <p className='data-label'>Time</p>
                        <input type='time' onChange={e => setTime(e.target.value)}/>
                    </div>
                    
                </div>
                    <div>
                        <p className='data-label'>Notes</p>
                        <textarea type='text' className='notes-input' onChange={e => setNote(e.target.value)}>
                            
                        </textarea>
                        
                        <div>
                            <button onClick={cancelBtn} className='cancel-btn'>Cancel</button> 
                            <button onClick={saveBtn} className='save-btn'>Save</button>
                        </div>

                    </div>

            </div>

      </div>
      <Footer/>
  </div>;
};

export default AddNote;
