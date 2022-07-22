import React from "react"
import { useState } from "react"
import { useNote } from "./../../Context/NoteContext"
import './Filter.css'

export const Filter = () =>{
    const { setOpen, dispatch} = useNote();
    const [priority, setPriority] = useState('low')
    const [label, setLabel] = useState('Assignment')
    const [date, setDate] = useState('Oldest First')
    
    const handlePriority = (e) =>{
        dispatch({
            type:'SORT_BY_PRIORITY',
            payload:(e.target.value)

        })
        setPriority(e.target.value)
    }
    const handleSortByDate =(e) =>{
        dispatch({
            type:'SORT_BY_DATE',
            payload:(e.target.value)
        })
        setDate(e.target.value)
    }
    const handleLabel =(e) =>{
        dispatch({
            type:'SORT_BY_LABEL',
            payload:(e.target.value)
        })
        setLabel(e.target.value)
    }
   
    return(
        <div className="filter-container">

        <div className="filter">  
            <div>
                <span>Date</span>
                <select value={date} onChange={handleSortByDate}>
                    <option value="old">Oldest first</option>
                    <option value="new">Newest first</option>
                </select>
            </div>
            <div>
                <span>Priority:</span>
                <select  value={priority} onChange={handlePriority}>
                    <option value="low" label="low"></option>
                    <option value="high" label='high'></option>
                </select> 
            </div>          
            <div>
                <span>label:</span>
                <select  value={label} onChange={handleLabel}>
                    <option value="Assignment" label="Assignment"></option>
                    <option value="Task" label='Task'></option>
                    <option value="Meeting" label='Meeting'></option>
                    <option value="Exercise" label='Exercise'></option>
                </select> 
            </div> 
            <span onClick={() =>{
                dispatch({
                    type:"CLEAR_ALL",
                })
            }}>Clear filter
            </span> 
            <i className="bi bi-x" onClick={()=>setOpen('none')}></i>
        </div>
    </div>
    )
}