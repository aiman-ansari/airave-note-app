import React from 'react'
import { useNote } from "../../Context/NoteContext"
import { EditNote } from "./Edit"

export const SingleNote = ({ item }) =>{
    const {deleteNote, addArchieve, updateNote, open, setOpen, labels, setLabels} = useNote()
    const edithandler = (item) =>{
        setOpen('edit')

        EditNote(item)
    }
    
    const handleDelete = (item) =>{

        setLabels(labels.filter((i)=> !item.label.includes(i)))
        deleteNote(item)
    }
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
                <div className='flex'>
                {item.label.length > 0 ? <>
                    <span>Tag :</span>{item.label.map((item) => <div className='ml-1'>{item}</div>)}</> : <></>}
                </div>
            </div>
            <div className="note-icons">
                <i class="bi bi-pencil-square" 
                    onClick={() =>edithandler(item)}>
                </i>
                <span>
                    <i className="bi bi-trash-fill"
                        onClick={() =>handleDelete(item)}>
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