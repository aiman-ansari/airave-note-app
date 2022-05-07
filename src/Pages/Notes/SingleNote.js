import React from 'react'
import { useNote } from "../../Context/NoteContext"
import { EditNote } from "./Edit"

export const SingleNote = ({note, date}) =>{
    const {deleteNote, addArchieve, updateNote, open, setOpen} = useNote()

    // const deletedNote = (id) =>{
    //     const filtered = note.filter((item) =>{
    //       return  item._id === id
    //     })
    //     console.log(filtered)
    //     deleteNote(filtered)
    // }
    // deleteNote()
    return(
        <>
                {open ==='edit' ? <EditNote open={open} setOpen={setOpen} note={note} id={note._id}/> :<>
                {note.length>0  ?  
        note.map((item) => 
        <div className="note box-shadow-bottom" key={item._id} style={{backgroundColor:item.color
        }}>
            <div className="h6">
                {date}
            </div>
            <div className="h5 mt-1 bold-text">
                {item.title}
            </div>
            <div className="note-body">
                {item.content}
            </div>     
            <div>
                {item.label}
            </div>
            <div className="note-icons">
            
                <button
                    onClick= {(_id)=>{
                        setOpen('edit')
                    }}                >
                   edit
                </button>
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
         :
        <h1>note</h1>
        
        }                
                </>}
        </>

    )
}