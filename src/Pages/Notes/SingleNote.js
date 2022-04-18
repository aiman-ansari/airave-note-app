import React from 'react'
import { useNote } from "../../Context/NoteContext"
import { EditNote } from "./Edit"

export const SingleNote = ({note, date}) =>{
    const {title,content,_id,color, label} = note
    const {deleteNote, addArchieve, setEditNoteForm} = useNote()
    console.log(note)
   
    return(
        <>
        <div className="note box-shadow-bottom" key={_id} style={{backgroundColor:color
        }}>
            <div className="h6">
                {date}
            </div>
            <div className="h5 mt-1 bold-text">
                {title}
            </div>
            <div className="note-body">
                {content}
            </div>     
            <div>
                {label}
            </div>
            <div className="note-icons">
            
                <span 
onClick= {()=>{

    setEditNoteForm({display:'block',note:note})
}}                >
                   edit
                </span>
                <span>
                    <i className="bi bi-trash-fill" onClick={() =>deleteNote(note)}></i>
                </span>
                                <span>
                                    <i className="bi bi-archive-fill" onClick={
                                        ()=>{addArchieve(note)
                                    deleteNote(note)}}></i>
                                </span>
                                <span>
                                    <i className="bi bi-label"></i>
                                </span>
                            </div>      
        </div>
        </>
    )
}