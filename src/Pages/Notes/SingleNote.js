import React from 'react'
import { useNote } from "../../Context/NoteContext"
import { EditNote } from "./Edit"

export const SingleNote = ({note, date}) =>{
    const {title,content,_id} = note
    const {deleteNote,addArchieve} = useNote()

   
    return(
        <>
        <div className="note box-shadow-bottom" key={_id}>
            <div className="h6">
                {date}
            </div>
            <div className="h5 mt-1 bold-text">
                {title}
            </div>
            <div className="note-body">
                {content}
            </div>     
            <div className="note-icons">
            
                <span>
                    
                    <EditNote />
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