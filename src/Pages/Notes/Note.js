import React from 'react'
import { useState } from "react"
import { useNote } from "../../Context/NoteContext"
import './Note.css'
export const Note = () =>{
    const {addNote,setOpen} = useNote()
  
    const [title, setTitle] = useState()
    const [content, setContent] = useState()
    const [priority, setPriority] =useState('low')
    const [color, setColor] = useState('color')
    const [label, setLabel] = useState('')
    const addNotes = () =>{
        addNote({title,content,priority,color,label})

        setTitle('')
        setContent('')
        setColor('color')
        setPriority('low')
        setLabel('')
        setOpen('none')
    } 
    

    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var dateTime = date;
    return(
        <div>
           
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
                                    addNotes()
                                }}></i>
                            </span>
                            <span>
                                <i className="bi bi-trash-fill" 
                                onClick={() =>{
                                    setOpen('none')
                                }}></i>
                            </span>
                        </div>
                    </div>
                </div>
</div>
    )
}