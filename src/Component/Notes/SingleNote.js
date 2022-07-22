import React from 'react'
import { useNote } from "../../Context/NoteContext"
import { EditNote } from "./Edit"

export const SingleNote = ({ item }) =>{
    const {deleteNote, addArchieve, updateNote, open, setOpen} = useNote()
    return(
        <div className="note box-shadow-bottom" key={item._id} style={{backgroundColor:item.color}}>
            <div className="h6">
                {item.date}
            </div>
            <div className="h5 mt-1 bold-text">
                {item.title}
            </div>
            <div className="note-body">
                {item.content}
            </div>     
            <div className='flex gap-3'>
                <div>Priority:
                {item.priority}
                </div>
                <div>Tag:
                {item.label}
                </div>
            </div>
            <div className="note-icons">
                <i class="bi bi-pencil-square" 
                    onClick={()=>{
                    setOpen('edit')         
                    EditNote(item)  
                }}>
                </i>
                <span>
                    <i className="bi bi-trash-fill"
                        onClick={() =>deleteNote(item)}>
                    </i>
                </span>
                <span>
                    <i className="bi bi-archive-fill" 
                        onClick={()=>addArchieve(item)}>
                    </i>
                </span>
            </div>      
        </div> 
    )
}