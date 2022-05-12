import React from 'react'
import { useState } from 'react'
import { useNote } from '../../Context/NoteContext'
export const Label = ({handleLabel}) =>{
    const {labels, setLabels} = useNote()
    const[text, setText] = useState("")
    const [arr, setArr] = useState([])
    const handleLabels = () => {
        
        if(!labels.includes(text) && !arr.includes(text)){
            setLabels(labels =>[...labels, text])
            setArr(arr => [...arr, text])

        }  
        else if(!arr.includes(text)){
            setArr(arr => [...arr, text])
            setLabels(labels)
        } 
        else{
            setArr(arr)
            setLabels(labels)
        }    
         setText('')
    }
    handleLabel(arr)
    // const something = () =>{
    //     if(!labels.includes(text)){
    //         setLabels(labels =>[...labels, text])
    //     }
    // }
    // console.log(something())
    console.log(labels)

    return(
        <>
            <input
                type="text"
                value={text}
                placeholder='Enter label'
                onChange={(e) => setText(e.target.value)}
            /> 
            <button onClick={handleLabels}>Add</button>
        </>
    )
}