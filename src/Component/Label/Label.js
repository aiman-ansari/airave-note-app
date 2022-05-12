import React from 'react'
import { useState } from 'react'
import { useNote } from '../../Context/NoteContext'
import './Label.css'
export const Label = ({handleLabel}) =>{
    const {labels, setLabels} = useNote()
    const[text, setText] = useState("")
    const [arr, setArr] = useState([])
    const handleLabels = () => {
        if(text !== '') {
            if(!labels.includes(text)){
                setLabels(labels =>[...labels, text])
                setArr(arr => [...arr, text])
                setText('')
            }
                else  if(!arr.includes(text)){
                    setLabels(labels)
                    setArr(arr => [...arr, text])
                } 
            
        }
            else{
                setText('')

            }
        
}
    handleLabel(arr)
   
    return(
        <>
            <input
                className='label-input'
                type="text"
                value={text}
                placeholder='Enter label'
                onChange={(e) => setText(e.target.value)}
            /> 
            <button 
                className= "btn-label"
                onClick={handleLabels}>Add</button>
        </>
    )
}