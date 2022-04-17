import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from "react"
import { useNote } from "../../Context/NoteContext"
import { Header } from "../HomePage/Header"
import { Sidebar } from "../HomePage/Sidebar/Sidebar"
import './Note.css'
import { SingleNote } from "./SingleNote"
export const Note = () =>{
    const {note, addNote} = useNote()
    const [newNote, setNewNote] = useState(note)
    const handleNotes = (e) =>{
       setNewNote({...newNote, [e.target.name] : e.target.value})
    }
    console.log(newNote)
    console.log("from context:",note)
    const addNotes = () =>{
        addNote(newNote)
        setNewNote({
            content:'',
            title:'',
            priority:''
        })    } 
    const options = [
        { label: 'High', value: 'high' , name:'high'},
        { label: 'Low', value: 'low' , name:'low'},
        { label: 'Medium', value: 'medium' , name:'medium'},
      ];
      console.log(note.priority)
    

    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var dateTime = date;
    return(
        <div>
            <Header />
            <div className="flex">
                <div className="sidebar">
                    <Sidebar />
                </div>
                <div className="main-content">
                    {note.length <1 && note===undefined ? "you dont have any note" : 
                    <>
                    <div className="note-container box-shadow">
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
                            <div>
                            
                           <label>high<input 
                        type="radio" 
                        name="rating"
                        value="high"
                        onChange={handleNotes}
                        />
                        </label>
                        <label>Low<input 
                        type="radio" 
                        name="rating"
                        value={newNote.priority} 
                        onChange={handleNotes}
                        />
                        </label>

                            </div>
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
        
               
        

   <div className="notes">
     
     {note.map((item) => 
         <div className="m-2">
         <SingleNote note={item}  date={dateTime} />
         </div>
         
         ) 
      }
     
     </div>     
        </>}

                   
                    
                    
       
                </div>
                
            </div>

        </div>
    )
}