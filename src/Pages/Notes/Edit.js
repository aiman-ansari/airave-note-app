import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from "react"
import { useNote } from "../../Context/NoteContext"
import { Header } from "../HomePage/Header"
import { Sidebar } from "../HomePage/Sidebar/Sidebar"
import axios from 'axios'
import { useEffect } from 'react'
import './Note.css'
// import { SingleNote } from "./SingleNote"
export const EditNote = () =>{
    const {note, addNote, updateNote} = useNote()
    const [newNote, setNewNote] = useState(note)
    const [open , setOpen] = useState(false)

    const handleNotes = (e) =>{
       setNewNote({...newNote, [e.target.name] : e.target.value})
    }
    console.log("newnote:",newNote)
    console.log("from context:",note)
    const addNotes = () =>{
        const {title} = newNote
        console.log(newNote)
        // addNote(newNote)
        setNewNote({
            content:'',
            "title":newNote.title,
            priority:''
        })
    } 
   

    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var dateTime = date;
    console.log(open)
    return(
        <div>
            {open ? 
            <>
            <button className='btn btn-primary' onClick={() => setOpen(!open)}>update</button>
<div className="note-container box-shadow" key={note._id}>
                        <div >
                            <input 
                            type="text" 
                            placeholder="Enter your title" 
                            className='title-section'
                            name="title"
                            value={newNote.title} 
                            onChange={handleNotes}
                            />
                        </div>
                        <div className='body-section'>
                            <textarea placeholder="Enter your body"
                            name="content" 
                            className='body-section'
                            value={newNote.content}
                            onChange={handleNotes}></textarea>
                        </div>
                        <div className='info-section'>
                            <div className="info-date">
                                {`Created at ${dateTime}`}
                            </div>
                            
                            <div className="info-icons">
                                
                                <span>
                                    <i className="bi bi-plus-circle-fill" onClick={() =>{
                                        addNotes()
                                    }}></i>
                                </span>
                                <span>
                                    <i className="bi bi-trash-fill"></i>
                                </span>
                                
                            </div>
                        </div>
                    </div>
            </>:
                        <button className='btn btn-primary' onClick={() => { addNotes()
                        setOpen(!open)
                    }}>change</button>
                    }
            
            
                    
                
</div>
    )
}