import React, { useEffect } from 'react'
import NoteComp from '../components/NoteComp'
import UserDetailHeader from '../components/UserDetailHeader'
import './DisplayNotes.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { pageno, selectNotesList, hasMore, loading } from '../redux/reducer'
import { useDispatch } from 'react-redux';
import { getNextData } from '../redux/notesActions';
import { notesActions } from '../redux/reducer';
import { useState, useRef, useCallback } from 'react';

const DisplayNotes = () => {

    // const [notesList, setNotesList] = useState([]);
    const dispatch = useDispatch();
    const notesList = useSelector(selectNotesList);
    const pageNumber = useSelector(pageno);
    const [expandedNote, setExpandedNote] = useState(false);
    const [expandedNoteDetail, setExpandedNoteDetail] = useState({});
    const loadingData = useSelector(loading);
    const hasMor = useSelector(hasMore);

    useEffect(() => {
        dispatch(notesActions.load(true));
        dispatch(getNextData(pageNumber));
        console.log(loadingData);
    }, [dispatch, pageNumber]);

    const observer = useRef();
    const lastNoteElementref = useCallback(node => {
        if(loadingData) return;
        if(observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting && hasMor){
                dispatch(notesActions.incPage());
            }
        })

        if(node) observer.current.observe(node);
    }, [loadingData, hasMor])


    const noteClickHandler = (obj) => {
        console.log("noteClickHandler initiated")
        setExpandedNote(true);
        setExpandedNoteDetail(obj);
    }


    const dismissExpandedNote = () => {
        setExpandedNote(false);
    }
    


    return (
        <div >
            <UserDetailHeader/>
            {console.log("PAGE" , pageNumber)}
            {/* <button onClick={loadMoreFuction}>Load More</button> */}
            <div className='btnWrap'>
                <Link to='/add-note'> <button  className='addNotesBtn'>Add Notes</button> </Link>
            </div>

            {expandedNote && <div onClick={dismissExpandedNote} className='expandedNote'>
                <div className='expandedNoteContent'>
                    <p className='expNote'>{expandedNoteDetail.note}</p>

                    <span className='expDT'>{expandedNoteDetail.time}</span>
                    <span className='expDT'>{expandedNoteDetail.date}</span>
                </div>
            </div>}

            <div className='notesWrap'>
                
                

                {notesList.map((item, index )=> {
                    if(notesList.length == index + 1){
                        return <div key={item.id} ref={lastNoteElementref}><NoteComp noteClick={noteClickHandler} note={item.note} date={item.date} time={item.time}  key={item.id} id={item.id} /></div>
                        
                    }else{
                        return <NoteComp noteClick={noteClickHandler} note={item.note} date={item.date} time={item.time}  key={item.id} id={item.id} />
                    }
                })} 


            </div>
                {loadingData && <div className='loading'>Loading...</div>}
            

        </div>
    )
}

export default DisplayNotes;
