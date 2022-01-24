import React, { useEffect } from 'react'
import NoteComp from '../components/NoteComp'
import UserDetailHeader from '../components/UserDetailHeader'
import './DisplayNotes.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { pageno, selectNotesList } from '../redux/reducer'
import { useDispatch } from 'react-redux';
import { getNextData } from '../redux/notesActions';
import { notesActions } from '../redux/reducer';
import { useState, useRef, useCallback } from 'react'
import useNotesList from '../useNotesList';

const DisplayNotes = () => {

    // const [notesList, setNotesList] = useState([]);
    const dispatch = useDispatch();
    const notesList = useSelector(selectNotesList);
    const page = useSelector(pageno);
    
    
    const {loading, hasMor} = useNotesList(page);

    const observer = useRef();
    const lastNoteElementref = useCallback(node => {
        if(observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting){
                dispatch(notesActions.incPage());
            }
        })

        if(node) observer.current.observe(node);
    }, [loading, hasMor])


    


    return (
        <div >
            <UserDetailHeader/>
            {/* <button onClick={loadMoreFuction}>Load More</button> */}
            <div className='btnWrap'>
                <Link to='/add-note'> <button  className='addNotesBtn'>Add Notes</button> </Link>
            </div>


            <div className='notesWrap'>
                
                

                {notesList.map((item, index )=> {
                    if(notesList.length == index + 1){
                        return <div key={item.id} ref={lastNoteElementref}><NoteComp note={item.note} date={item.date} time={item.time}  key={item.id} id={item.id} /></div>
                         
                    }else{
                        return <NoteComp note={item.note} date={item.date} time={item.time}  key={item.id} id={item.id} />
                    }
                })} 


            </div>
            
            {loading && <div>Loading...</div>}

        </div>
    )
}

export default DisplayNotes;
