import React from 'react'
import { useState } from "react"
import { useNote } from "../../Context/NoteContext"

import './Note.css'

export const EditNote = (note) =>{
    const {addNote, state, dispatch,updateNote, editNoteForm,setEditNoteForm} = useNote()
  console.log("note" , note)
    const [title, setTitle] = useState(editNoteForm.note.title)
    const [content, setContent] = useState(editNoteForm.note.content)
    const [priority, setPriority] =useState(editNoteForm.note.priority)
    const [color, setColor] = useState(editNoteForm.note.color)
    const [label, setLabel] = useState(editNoteForm.note.label)
   console.log(title,content,priority,color)
    const updateNotes = () =>{
        updateNote({title,content,priority,color,label})
        
        // addNote(newNote)
        // setNewNote({
        //     content:'',
        //     title:'',
        //     priority:''
        // })
    } 
    // console.log(newNote)
    // const openLabel = () =>{
    //     setOpen(true)
    // }
    // const closeLabel = () =>{
    //     setOpen(false)
    // }
    //   const allFilterNotes = filterFunction(note, state)

    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var dateTime = date;
    return(
        <div style={{ display: editNoteForm.display }}>
            {/* <Header />
            <div className="flex">
                <div className="sidebar">
                    <Sidebar />
                </div>
                <div className="main-content"> */}
                    {/* <div class="searchbox">
                        <i class="fa fa-search input-icon" onClick={()=>
                            setOpen(!open)
                        }></i>
                        <input type="text" placeholder="Search here"class="search-input"/>
                    </div> */}
                    {/* <div className='flex box-shadow-bottom mt-2'>
                        <input type="text" placeholder="Search here" class="input"/>
                        <i className='bi bi-plus toggle'></i>
                    </div> */}
                    {
                        // open && <>
                            // <Filter />
                            // </>
                    }
                    <div className="note-container box-shadow" style={{backgroundColor:color}}>
                    <div >
                        <input 
                        type="text" 
                        placeholder="Enter your title" 
                        className='title-section'
                        name="title"
                        value={title} 
                        onChange={(e) =>setTitle(e.target.value)}
                        />
                    </div>
                    <div className='body-section'>
                        <textarea placeholder="Enter your body"
                        name="content" 
                        className='body-section'
                        value={content}
                        onChange={(e)=>setContent(e.target.value)}></textarea>
                    </div>
                    <hr />
                    <div className='info-section'>
                        <div className="info-date">
                            {`Created at ${dateTime}`}
                        </div>
                        
                        <div className="info-icons">
                            {/* <div className='flex gap-1'>
                            
                           <label>high<input 
                        type="radio" 
                        name="rating"
                        value="high"
                        // onChange={handleNotes}
                        />
                        </label>
                        <label>Low<input 
                        type="radio" 
                        name="rating"
                        value="low" 
                        // onChange={handleNotes}
                        />
                        </label>

                            </div> */}
                            <div>
                                <select value={priority} onChange={e =>setPriority(e.target.value)}>
                                    <option value="low" label="low"></option>
                                    <option value="high" label='high'></option>
                                </select>
                            </div>
                            <div>
                                <select value={color} onChange={e =>setColor(e.target.value)}>
                                <option value="none" label="color"></option>

                                    <option value="#F0FFFF" label="Azure"></option>
                                    <option value="#FFF8DC" label='CornSilk'></option>
                                    <option value="#8FBC8F" label="Sea green"></option>
                                    <option value="#FFE4E1" label='Light Coral'></option>

                                </select>
                            </div>
                            <div>
                                <select value={label} onChange={e =>setLabel(e.target.value)}>

                                    <option value="Assignment" label="Assignment"></option>
                                    <option value="Exercise" label='Exercise'></option>
                                    <option value="Meeting" label="Meeting"></option>
                                    <option value="Task" label='Task'></option>

                                </select>
                            </div>
                            <span>
                                <i className="bi bi-plus-circle-fill" onClick={() =>{
                                    updateNote(title,content,priority,label,color,editNoteForm.note._id)
                                }}></i>
                            </span>
                            <span>
                                <i className="bi bi-trash-fill" onClick={() => setEditNoteForm({display:"none",note:""})}></i>
                            </span>
                            {/* {open ? 
                                <>
                                    <i className='bi bi-tag-fill' 
                                    onClick={closeLabel}>
                                    </i>
                                    <div className='mt-5'>
                                        <input type="text" 
                                        name='tags'
                                        value={newNote.tags}
                                        placeholder="enter label"
                                        onChange={handleNotes} />
                                        <button 
                                            onClick={() => 
                                                {setNewNote({...newNote, tags:newNote.tags })
                                                setOpen(false)}
                                            }
                                            >Add label
                                        </button>
                                    </div> 
                                </>:
                                <i className='bi bi-tag-fill' 
                                onClick={openLabel}></i>
                                } */}
                                
                            
                            
                        </div>
                    </div>
                </div>
        
               
        

   {/* <div className="notes">

   {note.map((item) => 
         <SingleNote note={item} date={dateTime} />

   )}
     
     </div>      */}
</div>
                
                    
                    
       
            //     </div>
                
            // </div>

      
    )
}