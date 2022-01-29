import './AddNotes.css';
import SignedInHeader from '../components/SignedInHeader';
import Footer from '../components/Footer';
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { editNote } from '../redux/notesActions';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditNote = () => {

    const params = useParams();
    const noteid = params.noteId;

    const history = useHistory();
    const dispatch = useDispatch();

    const [data, setData] = useState({});

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [note, setNote] = useState('');

    const cancelBtn = () => {
        history.push('/display-notes')
    }

    const saveBtn = () => {

        const obj = {id:noteid, note:note, date:date, time:time};

        dispatch(editNote(obj));

        history.push('/display-notes');
    }


    useEffect(() => {
        axios.get(`http://localhost:4000/posts/${noteid}`)
        .then(function(response){
            console.log(response);
            setData(response.data);
            setDate(response.data.date)
            setNote(response.data.note)
            setTime(response.data.time)
            
        })
        .catch(function(error){
            alert('noteId NOT FOUND');
        })
    }, []);
    

  return <div>
      <SignedInHeader/>
      <div className='add-notes'>
            <div className="add-note-rectangle">
                <h3>Edit Note</h3>
            </div>

            <div>

                <div className='flex'>
                    <div>
                        <p className='data-label'>Follow Up Date</p>
                        <input type='date' value={date} onChange={e => setDate(e.target.value)} />
                    </div>
                    <div className='margin-left'>
                        <p className='data-label'>Time</p>
                        <input type='time' value={time} onChange={e => setTime(e.target.value)}/>
                    </div>
                    
                </div>
                    <div>
                        <p className='data-label'>Notes</p>
                        <textarea type='text' value={note} className='notes-input' onChange={e => setNote(e.target.value)}>
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


export default EditNote;
