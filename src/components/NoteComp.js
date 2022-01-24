import React from 'react'
import deleteIcon from '../assets/images/group-7.svg';
import edit from '../assets/images/recycle.svg';
import './NoteComp.css'
import { useState } from 'react';
import menuIconImg from '../assets/images/dots.png';
import { useHistory } from 'react-router-dom';
import { deleteNote } from '../redux/notesActions';
import { useDispatch } from 'react-redux';

const NoteComp = (props) => {

    const dispatch = useDispatch();

    const [showMenu, setShowMenu] = useState(false);
    const history = useHistory();
    const [menuClass, setMenuClass] = useState('menu-hidden');
    const [menuIcon, setMenuIcon] = useState('icon-visible');
    const toggleMenu = () => {
        setShowMenu(!showMenu);

        if(showMenu){
            setMenuClass('menu-visible');
            setMenuIcon('icon-hidden');
        }else {
            setMenuClass('menu-hidden');
            setMenuIcon('icon-visible');
        }

    }

    const deleteClicked = () => {
        dispatch(deleteNote(props.id));
    }

    const editClicked = () => {
        console.log('edit clickedeeeeeeeeeeeeeeee');
        history.push(`/edit-note/${props.id}`);
    }
    return (
        <div onClick={toggleMenu} className='notes-wrap'>
            <p>{props.note}</p>

            <div className=''>
                <img height={28} width={28}  src={menuIconImg} className={menuIcon} />
                <div id='togMenu' className={menuClass}>
                    <button className='delete-btn'>
                        <img src={edit} />
                        <span className='date-info' onClick={editClicked}>Edit</span>
                    </button> 

                    <button onClick={deleteClicked} className='delete-btn'>
                        <img src={deleteIcon} />  
                        <span className='date-info'>Delete</span>
                    </button>

                </div>
                <div>
                    <span className='date-info'>{props.time}</span>
                    <span className='date-info'> {props.date} </span>
                </div>

                
            </div>
        </div>
    )
}

export default NoteComp;    
